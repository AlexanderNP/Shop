import { CartProduct } from "../ui"
import useCartStore from "../../../shared/zustand";

export default class CartProductModel {

  static selector = "[data-js-cart-products]"

  static btnSelector = "data-js-product-cart-id"

  constructor() {
    this.renderCartProducts()
    this.eventListenerButtoon()
  }

  renderCartProducts() {
    const listCartProduct = document.querySelector(CartProductModel.selector)
    const productsFromStore = useCartStore.getState().cartProducts
    listCartProduct.innerHTML += `${CartProduct({ products: productsFromStore })}`
  }

  getProductsId(product) {
    return product.getAttribute(CartProductModel.btnSelector)
  }

  eventListenerButtoon() {
    const btn = Array.from(document.querySelectorAll(`[${CartProductModel.btnSelector}]`))

    btn.forEach((item) => {
      item.addEventListener('click', () => {
        let idProduct = this.getProductsId(item)
        console.log(idProduct)
        useCartStore.getState().removeProductFromCart(idProduct)
        location.reload();
      })
    })
  }

}