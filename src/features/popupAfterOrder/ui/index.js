import { commonComponentProps, getAttrs } from "../../../shared/lib"

export function popUp(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "popup", getCN } = { ...commonComponentProps, ...props }
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

  return `<div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
            <div class = "${getClassName("container")}">
              <div class="${getClassName("body")}">
                <button class="${getClassName("close")}"></button>
                <p class="${getClassName("text")}">Заказ успешно создан!</p>
              </div>
            </div>
          </div>`
}