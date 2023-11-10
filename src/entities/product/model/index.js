import { getProducts } from "../api";
import { getFilterProducts } from "../api/filterProduct";
import { Product } from "../ui";
import useCartStore from "../../../shared/zustand";


export default class ProductModel {

  static btnSelector = "data-js-product-id"

  products = []

  async fetchData() {
    try {
      const res = await getProducts(); // Получите данные из API
      console.log(res)
      return res.data.products;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async fetchDataFilterProduct(props) {
    try {
      const res = await getFilterProducts(props); // Получите данные из API
      console.log(res)
      return res.data.products;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  renderProducts(flag) {
    console.log(flag)

    const listProduct = document.querySelector('[data-js-product]')

    if (flag === "all" || flag === undefined) {
      this.fetchData().then(res => {
        this.products = res
        console.log(this.products)
        listProduct.innerHTML = `${Product({ products: this.products })}`
      })
        .then(() => this.eventListenerButtoon())
    } else {
      this.fetchDataFilterProduct(flag).then(res => {
        this.products = res
        console.log(this.products)
        listProduct.innerHTML = `${Product({ products: this.products })}`
      }).then(() => this.eventListenerButtoon())
    }
  }

  getProductsId(product) {
    return product.getAttribute(ProductModel.btnSelector)
  }

  eventListenerButtoon() {
    const btn = Array.from(document.querySelectorAll(`[${ProductModel.btnSelector}]`))

    btn.forEach((item) => {
      item.addEventListener('click', () => {
        let idProduct = this.getProductsId(item)
        console.log(idProduct)
        useCartStore.getState().addProductToCart(idProduct);
      })
    })
  }
}