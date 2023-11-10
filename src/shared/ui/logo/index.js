import { commonComponentProps, getAttrs } from "../../lib"

export function Logo(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "logo", getCN, imgSrc } = { ...commonComponentProps, ...props }
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

  return `<img class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} src="${imgSrc}"/>`
}