import { commonComponentProps, getAttrs } from "../../../shared/lib"
import { NavFooter } from "../../../shared/ui/navFooter"

export function Footer(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "footer", getCN } = { ...commonComponentProps, ...props }
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

  return `
  <footer  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-footer="" >
    <div class="container">
          ${NavFooter()}
    </div>
  </footer>
  `
}