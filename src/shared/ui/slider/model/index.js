import { getProducts } from "../../../../entities/product/api";
import { Slider } from "../ui/index"
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import useCartStore from "../../../zustand";

class SliderModel {

  static btnSelector = "data-js-product-id"

  products = []

  constructor(){
    this.renderSlider()
  }

  async fetchData() {
    try {
      const res = await getProducts(); // Получите данные из API
      console.log(res)
      return res.data.products;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  renderSlider() {

    const slider = document.querySelector(".slider")
      this.fetchData().then(res => {
        this.products = res
        console.log(this.products)
        slider.innerHTML = `${Slider({ products: this.products })}`
      })
      .then(() => this.initSlider())
      .then(() => this.eventListenerBtn())
  }

  initSlider() {
    new Swiper('.swiper', {
      // Optional parameters
      modules: [Navigation, Pagination],
      slidesPerView: "3.5",
      loop: true,
      spaceBetween: 32,
      // Navigation arrows
      navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
      },

    });
  }

  getProductsId(product) {
    return product.getAttribute(SliderModel.btnSelector)
  }

  eventListenerBtn() {
    const btn = Array.from(document.querySelectorAll(`[${SliderModel.btnSelector}]`))

    btn.forEach((item) => {
      item.addEventListener('click', () => {
        let idProduct = this.getProductsId(item)
        console.log(idProduct)
        useCartStore.getState().addProductToCart(idProduct);
      })
    })
  }
}

export default SliderModel;