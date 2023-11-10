import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"
import mainPage from "./src/pages/index"
import cartPage from "./src/pages/cart"
import catalogPage from "./src/pages/catalog"

const pages = [
  {
      name: "index",
      content: mainPage()
  },
  {
      name: "cart",
      content: cartPage()
  },
  {
    name: "catalog",
    content: catalogPage()
  }
]

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
            pages: pages.map(({ name, content }) => ({
                filename: `${name}.html`,
                template: `${name}.html`,
                injectOptions: {
                    data: {
                        injectScript: content,
                    },
                },
            })),
    }),
  ],
})