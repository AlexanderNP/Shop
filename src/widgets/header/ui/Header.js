import { commonComponentProps, getAttrs } from "../../../shared/lib"
import { Logo } from "../../../shared/ui/logo"
import { Nav } from "../../../shared/ui/nav"

export function Header(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "header", getCN } = { ...commonComponentProps, ...props }
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

  return `
  <header  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-header="" >
    <div class="container">
      <div class="wrapper">
        <div class="${getClassName("logo", { isValid: true })}">
            ${Logo({ imgSrc: "/images/logo.svg" })}
        </div>
          ${Nav()}
      </div>
    </div>
  </header>
  `
}