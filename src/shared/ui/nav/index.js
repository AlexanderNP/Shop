import { commonComponentProps, getAttrs } from "../../lib"

import { Button } from "../button"

export function Nav(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "nav", getCN } = { ...commonComponentProps, ...props }
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

  return `<nav class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
    <ul class="${getClassName("list")}">
      <li class="${getClassName("item")}">
        <a href="/">Главная</a>
      </li>
      <li class="${getClassName("item")}">
        <a href="/catalog.html">Каталог</a>
      </li>
      <li class="${getClassName("item")}">
        <a href="/cart.html">${Button(
          {
            label: "Корзина",
            extraClasses: {
              "cart": true,
            }
          }
        )}</a>
      </li>
    </ul>
  </nav>`
}