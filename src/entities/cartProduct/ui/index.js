import { commonComponentProps, getAttrs } from "../../../shared/lib";

import { Button } from "../../../shared/ui/button";

export function CartProduct(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "cart-product", getCN, products } = {
    ...commonComponentProps,
    ...props
  };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `<ul class="${getClassName("list", extraClasses)}" ${getAttrs(extraAttrs)}>
              ${products.map(product => `<li class="${getClassName("item")}" id="${product.idProduct}">
              <img width="188" height="144" src="${product.imageSrc}" ${getClassName("img")}>
              <div>
                <p class="${getClassName("label")}">${product.label}</p>
                <p class="${getClassName("name")}">${product.productName}</p>
                <p class="${getClassName("registration")}">Регистрация на курс: <span>${product.registration.startDate}-${product.registration.endDate}</span></p>
                <p class="${getClassName("registration")}">Начало курса: <span>${product.startCourse}</span></p>
                <p class="${getClassName("price")}">${product.price}</p>
                ${Button({
                  extraAttrs: {
                      "data-js-product-cart-id": `${product.idProduct}`,
                      "id": "btn"
                  },
                  extraClasses: {
                      "cart-product": true,
                  }
                  })}
              </div>
              </li>`).join("")}
              </ul>`;
}