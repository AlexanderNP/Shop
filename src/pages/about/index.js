import { getPage } from "../../shared/lib/index.js";

export default () => {
    const metaTags = [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "О нас" },
        { name: "keywords", content: "ключевые слова" },
    ];
    return getPage({
        title: "О нас",
        meta: metaTags,
        body: `
            <h1>О нас</h1>
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