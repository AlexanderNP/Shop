import { getPage } from "../../shared/lib"

export default () => {

  return getPage({
      title: "Главная",
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
      `
  })
}