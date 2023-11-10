import { commonComponentProps, getAttrs } from "../../../shared/lib";

import { Button } from "../../../shared/ui/button";

export function Product(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "product", getCN, products } = {
    ...commonComponentProps,
    ...props
  };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `<ul class="${getClassName("list", extraClasses)}" ${getAttrs(extraAttrs)}>
              ${products.map(product => `<li class="${getClassName("item")}">
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
                })}</li>`).join("")}
              </ul>`;
}