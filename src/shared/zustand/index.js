import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = createStore(
  persist(
    (set, get) => ({
      cartProducts: [],
      addProductToCart: async (idProduct) => {
        const responce = await fetch("/cart/add", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            idProduct: idProduct,
          })
        });
        const data = await responce.json();
        console.log(data.cartProducts)
        if (data.isSuccess) {
          let newProduct = data.cartProducts.flat()
          set((state) => ({ cartProducts: [ ...state.cartProducts, ...newProduct ] }));
        }
      },
      removeProductFromCart: (idProduct) => {
        set((state) => ({ cartProducts: state.cartProducts.filter((product) => product.idProduct !== idProduct) }));
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useCartStore