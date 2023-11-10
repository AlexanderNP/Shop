import { commonComponentProps, getAttrs } from "../../../shared/lib";

import { Input } from "../../../shared/ui/input";

import { Button } from "../../../shared/ui/button";

export function Cart(props) {
  const { extraClasses = {}, extraAttrs = {}, baseClass = "cart", getCN } = {
    ...commonComponentProps,
    ...props
  };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `<div class="container">
          <section  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-cart>
            <div class="${getClassName("content")}" data-js-cart-products></div>
            <form class="${getClassName("form")}" data-js-cart-form>
              <p class="${getClassName("title")}">Итого</p>
              <div class="${getClassName("text-box")}">
                <p class="${getClassName("count")}">count</p>
                <p class="${getClassName("result-price")}">price</p>
              </div>
              <label class="${getClassName("label")}">
              <p class="${getClassName("error")}"></p>
              ${Input({
                extraAttrs: {
                    "placeholder": "Промокод" ,
                    "id": "input"
                }
                })}
                </label>
              <div class="${getClassName("text-box")}">
                <p class="${getClassName("result")}">Итоговая сумма</p>
                <p class="${getClassName("result-price result-price-promo")}">price</p>
              </div>
              ${Button({
                  "label": "Оформить заказ",
                  extraAttrs: {
                      "id": "btn"
                  },
                  extraClasses: {
                      "form-product": true,
                  }
              })}
            </form>
          </section>
          </div>`;
}