import { popUp } from "../../../features/popupAfterOrder/ui/index";
import { popUpScipt } from "../../../features/popupAfterOrder";
import useCartStore from "../../../shared/zustand/index"
import { getPromocode } from "../api";

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
    this.inputFormListener()
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
    const btnOrder = document.querySelector(".btn--form-product")

    if (useCartStore.getState().cartProducts.length === 0) {
      btnOrder.disabled = true
    }
    const popContainer = document.querySelector(CartModel.selectorPop)
    popContainer.innerHTML = `${popUp()}`
    popUpScipt()
  }

  async fetchPromocode(props) {
    try {
      const response = await getPromocode(props); // Получите данные из API
      console.log(response)
      return response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  updatePrice() {
    const promocodeInput = document.querySelector('.input');
    const priceDisplay = document.querySelector('.result-price-promo');
    const errorMessage = document.querySelector('.cart__error');
    const promocode = promocodeInput.value.trim();
    this.fetchPromocode(promocode).then(response => {
      if (Number(priceDisplay.textContent) !== response.price){
        priceDisplay.textContent = `${response.price}`;
        errorMessage.textContent = "";
      }
      else{
        errorMessage.textContent = "Неверный промокод";
      }
    })
  }

  inputFormListener() {
    const promocodeInput = document.querySelector('.input');
    promocodeInput.addEventListener('blur', () => {
      this.updatePrice()
    })
  }
}