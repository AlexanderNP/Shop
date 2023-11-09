import { getPage } from "../../shared/lib"
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
        <main>
          <div class="container-slider">
            <h1>Популярные товары</h1>
                <section class="slider"></section>
          </div>
        </main>
        ${Footer()}
      `
  })
}