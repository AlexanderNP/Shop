import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/ui/Header.js";
import { Cart } from "../../widgets/cart/ui/index.js";
import { Footer } from "../../widgets/footer/ui/Footer.js"

export default () => {
    const metaTags = [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "О нас" },
        { name: "keywords", content: "ключевые слова" },
    ];
    return getPage({
        title: "Корзина",
        meta: metaTags,
        body: `
            ${Header()}
            <main>
                <div class="container">
                    <h1>Корзина</h1>
                </div>
                ${Cart()}
                <div class="pop"></div>
            </main>
            ${Footer()}
        `
    })
}