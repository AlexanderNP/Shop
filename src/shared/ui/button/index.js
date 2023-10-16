import { commonComponentProps, getAttrs } from "../../lib"

export function Button(props){
  const {label = "", extraClasses = {}, extraAttrs = {}, baseClass = "btn", children, isDisabled = false} = props

  const getClassName = (elem, mod) => commonComponentProps.getCN(baseClass, elem, mod)

  return `<button disabled="${isDisabled}" class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
    ${children || `<span class="${getClassName("label")}">${label}</span>`}
    </button>
  `
}