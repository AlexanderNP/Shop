import { commonComponentProps, getAttrs } from "../../../shared/lib"

export function Footer(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "footer", getCN } = { ...commonComponentProps, ...props }
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

  return `
  <footer  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-header="" >
  <nav class="${getClassName("nav")}">
    <ul class="${getClassName("list")}">
      <li class="${getClassName("list-item")}">
        <a href="#" class="${getClassName("link")}">ФУТЕР</a>
      </li>
    </ul>
  </nav>
  </footer>
  `
}