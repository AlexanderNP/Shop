import { popUp } from "../../../features/popupAfterOrder/ui/index";
import { popUpScipt } from "../../../features/popupAfterOrder";

export default class CartModel {
  static selector = "[data-js-cart]";

  static instance = null;

  static selectorPop = ".pop"

  constructor() {
    if (CartModel.instance) {
      return CartModel.instance;
    }
    CartModel.instance = document.querySelector(CartModel.selector);

    this.renderParamProductsToForm()
    this.placeOrder()
  }

  getCountProducts() {
    const products = document.querySelectorAll(".cart-product__item")
    let sum = 0
    for (let i = 0; i < products.length; i++) {
      sum = i + 1
    }
    return sum
  }

  getPriceProducts() {
    const priceProducts = document.querySelectorAll(".cart-product__price")
    let sum = 0
    for (let i = 0; i < priceProducts.length; i++) {
      let price = Number(priceProducts[i].textContent)
      sum = sum + price
    }
    return sum
  }

  renderParamProductsToForm() {
    let count = this.getCountProducts()
    let price = this.getPriceProducts()

    const countProduct = document.querySelector(".cart__count")
    const priceProducts = document.querySelectorAll(".cart__result-price")

    countProduct.textContent = `Товаров: ${count}`
    priceProducts.forEach((item) => item.textContent = price)
  }

  placeOrder() {
    const popContainer = document.querySelector(CartModel.selectorPop)
    popContainer.innerHTML = `${popUp()}`
    popUpScipt()
  }
}