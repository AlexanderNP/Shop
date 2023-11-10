import "./reset.pcss"
import "./style.pcss"
import "./fonts.pcss"
import "../widgets/header/style.pcss"
import "../widgets/footer/style.pcss"
import "../widgets/filter/style.pcss"
import "../widgets/cart/style.pcss"
import "../entities/product/style.pcss"
import "../entities/cartProduct/style.pcss"
import "../features/popupAfterOrder/style.pcss"
import "../../node_modules/swiper/swiper.min.css"
import "../shared/ui/slider/style.pcss"
import HeaderModel from "../widgets/header/model"
import FilterModel from "../widgets/filter/model"
import CartModel from "../widgets/cart/model"
import ProductModel from "../entities/product/model"
import CartProductModel from "../entities/cartProduct/model"
import SliderModel from "../shared/ui/slider/model"
const runApp = async () => {
    const runWidgets = () => {
        new SliderModel()
        new HeaderModel()
        new FilterModel()
        new ProductModel()
        new CartProductModel()
        new CartModel()
    }
    switch (process.env.NODE_ENV) {
        case "development":
            await import("../shared/api/browser")
                .then(async ({ worker }) => {
                    await worker.start().then(() => {
                        console.debug("App dev run")
                        runWidgets()
                    })
                })
    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })