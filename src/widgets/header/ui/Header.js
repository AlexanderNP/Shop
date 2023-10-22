import { commonComponentProps, getAttrs } from "../../../shared/lib"
import { Logo } from "../../../shared/ui/logo"
export function Header(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "header", getCN } = { ...commonComponentProps, ...props }
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

  return `
  <header  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-header="" >
  <div class="${getClassName("logo", { isValid: true })}">
      ${Logo({ imgSrc: "/images/logo.svg" })}
  </div>
  <nav class="${getClassName("nav")}">
    <ul class="${getClassName("list")}">
      <li class="${getClassName("list-item")}">
        <a href="#" class="${getClassName("link")}">Ссылка1</a>
      </li>
    </ul>
  </nav>
  </header>
  `
}