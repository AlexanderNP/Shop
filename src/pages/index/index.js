import { getPage } from "../../shared/lib"
import { Button } from "../../shared/ui/button"
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
          <h1>Главная</h1>
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
          ${Button({ text: "Нажми меня" })}
      `
    })
}