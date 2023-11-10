import { commonComponentProps, getAttrs } from "../../../shared/lib";

export function Filter(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "filter", getCN, cat } = {
    ...commonComponentProps,
    ...props
  };
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `<div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
              ${cat.map(cat => `<label class="${getClassName("label")}"><input class="${getClassName("input")}" ${cat.isChecked ? "checked" : ""} 
              data-search-param="${cat.searchParam}" type="checkbox" 
              value="${cat.searchParam}">${cat.name}</label>`).join("")}
              </div>`;
}
