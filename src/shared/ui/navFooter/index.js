import { commonComponentProps, getAttrs } from "../../lib"

export function NavFooter(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "navFooter", getCN } = { ...commonComponentProps, ...props }
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

  return `<nav class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
    <div class="${getClassName("top")}">
      <ul class="${getClassName("list")}">
        <li class="${getClassName("item")}">
          <a href="#">Курсы</a>
        </li>
        <li class="${getClassName("item")}">
          <a href="#">О нас</a>
        </li>
        <li class="${getClassName("item")}">
          <a href="#">Отзывы</a>
        </li>
        <li class="${getClassName("item")}">
          <a href="#">Контакты</a>
        </li>
      </ul>
      <p class="${getClassName("polit")}">Политика конфиденциальности</p>
    </div>
    <div class="${getClassName("bottom")}">
      <div class="${getClassName("about-1")}">
        <p class="${getClassName("about-title")}">Наш адрес</p>
        <p class="${getClassName("about-content")}">г. Челябинск, ул. Лесопарковая 5/2</p>
      </div>
      <div class="${getClassName("about-2")}">
      <p class="${getClassName("about-title")}">Эл. почта</p>
      <p class="${getClassName("about-content")}">info@d-element.ru</p>
      </div>
  </nav>`
}