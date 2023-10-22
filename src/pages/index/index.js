import { getPage } from "../../shared/lib"
import { Button } from "../../shared/ui/button"
import { Input } from "../../shared/ui/input";
import { Header } from "../../widgets/header/ui/Header";
import { Footer } from "../../widgets/footer";

export default () => {
    const metaTags = [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "Главная страница" },
        { name: "keywords", content: "ключевые слова" },
    ];
    return getPage({
        title: "Главная",
        meta: metaTags,
        body: `
        ${Header()}
          <h1>Главная</h1>
          ${Button({
            label: "Текст",
            extraAttrs: {
                "data-js-require": true,
                "id": "btn"
            },
            extraClasses: {
                isHidden: true,
                isDisabled: true,
            }
        })}
        ${Input({
            extraAttrs: {
                "data-js-require": true,
                "id": "input",
                "placeholder": "Фамилия",
            },
            extraClasses: {
                isHidden: true,
            }
        })}
          <nav>
              <ul>
                  <li>
                      <a href="/">Главная</a>
                  </li>
                  <li>
                      <a href="/about.html">О Нас</a>
                  </li>
              </ul>
          </nav>
    ${Footer()}
      `
    })
}