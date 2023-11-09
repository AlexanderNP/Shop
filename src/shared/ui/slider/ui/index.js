import { commonComponentProps, getAttrs } from "../../../lib"

import { Button } from "../../button";

export function Slider(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "swiper", getCN, products } = {
    ...commonComponentProps,
    ...props
  };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `<button class="slider-button-prev"></button>
          <button class="slider-button-next"></button>
          <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
            <div class="swiper-wrapper">
              ${products.map(product => 
                `<div class="swiper-slide">
                  <li class="${getClassName("item")}">
                    <img width="228" height="220" src="${product.imageSrc}" class="${getClassName("img")}">
                    <p class="${getClassName("label")}">${product.label}</p>
                    <p class="${getClassName("name")}">${product.productName}</p>
                    ${Button({
                      label: "В корзину",
                      extraAttrs: {
                          "data-js-product-id": `${product.idProduct}`,
                          "id": "btn"
                      },
                      extraClasses: {
                          product: true,
                      }
                      })}
                  </li>
                  </div>`).join("")}
            </div>
          </div>`;
}