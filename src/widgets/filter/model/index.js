import { getFilters } from "../api";

import { Filter } from "../ui/filter";

import ProductModel from "../../../entities/product/model";

import { coloringInput } from "../../../features/checkedInput/index"

export default class FilterModel {
  static selector = "[data-js-filter]";

  static checkboxSelector = "data-search-param"

  static instance = null;

  cat = [];

  products = new ProductModel();

  constructor() {
    if (FilterModel.instance) {
      return FilterModel.instance;
    }
    FilterModel.instance = document.querySelector(FilterModel.selector);


    this.renderFilter()

    this.inputs = Array.from(document.querySelectorAll(`[${FilterModel.checkboxSelector}]`))

  }

  getSearchParam(input) {
    return input.getAttribute(FilterModel.checkboxSelector)
  }

  init() {
    const inputs = Array.from(document.querySelectorAll(`[${FilterModel.checkboxSelector}]`))
    const product = this.products
    product.renderProducts()
    inputs.forEach((input) => {
      input.addEventListener("change", () => {
        let searchParam = this.getSearchParam(input)
        product.renderProducts(searchParam)
      })
    })
  }

  async fetchDataFilter() {
    try {
      const res = await getFilters();
      // console.log(res)
      return res.cat;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  renderFilter() {
    this.fetchDataFilter().then(res => {
      this.cat = res
      // console.log(this.cat)
      FilterModel.instance.innerHTML += `${Filter({ cat: this.cat })}`;

    })
    .then(() => coloringInput())
    .then(() => this.init())
  }
}