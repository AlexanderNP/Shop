import { commonComponentProps, getAttrs } from "../../lib"

export function Button(props) {
  const { label = "", extraClasses = {}, extraAttrs = {}, baseClass = "btn", getCN, children } = { ...commonComponentProps, ...props }
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

  return `<button class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
              ${children || `<span class="${getClassName("label")}">${label}</span>`}
          </button>`
}
