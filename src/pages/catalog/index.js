import { getPage } from "../../shared/lib/index.js";

import { Header } from "../../widgets/header/ui/Header.js";

import { Footer } from "../../widgets/footer/ui/Footer.js"

export default () => {
    const metaTags = [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "О нас" },
        { name: "keywords", content: "ключевые слова" },
    ];
        return getPage({
            title: "Каталог",
            meta: metaTags,
            body: `
                ${Header()}
                <main>
                    <div class="container">
                    <h1>Каталог</h1>
                        <div class="wrapper">
                            <section data-js-filter></section>
                            <section data-js-product></section>
                        </div>
                    </div>
                </main>
                ${Footer()}
            `
        });
};