import { rest } from "msw"
import useCartStore from "../zustand";

const catalogProduct = [
  {
    idProduct: "1",
    label: "Бесплатный офлайн курс",
    productName: "«Frontend-разработчик»",
    category: [
      "Веб-разработка",
      "Мобильная разработка"
    ],
    imageSrc: "/images/img1.svg",
    registration: {
      "startDate": "18.08.2023",
      "endDate": "24.09.2023"
    },
    startCourse: "26.09.2023",
    price: 10000,
    isPopular: true
  },
  {
    idProduct: "2",
    label: "Бесплатный офлайн курс",
    productName: "«Backend-разработчик»",
    category: [
      "Веб-разработка",
      "Мобильная разработка",
      "Бэкенд-разработка"
    ],
    imageSrc: "/images/img3.svg",
    registration: {
      "startDate": "18.08.2023",
      "endDate": "24.09.2023"
    },
    startCourse: "26.09.2023",
    price: 11000,
    isPopular: true
  },
  {
    idProduct: "3",
    label: "Бесплатный офлайн курс",
    productName: "«Project manager»",
    category: [
      "Управление разработкой",
      "IT-инфраструктура"
    ],
    imageSrc: "/images/img4.svg",
    registration: {
      "startDate": "10.09.2023",
      "endDate": "26.09.2023"
    },
    startCourse: "22.09.2023",
    price: 12000,
    isPopular: true
  },
  {
    idProduct: "4",
    label: "Бесплатный офлайн курс",
    productName: "«Full-stack-разработчик»",
    category: [
      "Веб-разработка",
      "Мобильная разработка",
      "Бэкенд-разработка"
    ],
    imageSrc: "/images/img1.svg",
    registration: {
      "startDate": "16.09.2023",
      "endDate": "26.10.2023"
    },
    startCourse: "26.09.2023",
    price: 13000,
    isPopular: true
  },
  {
    idProduct: "5",
    label: "Бесплатный офлайн курс",
    productName: "«Системный аналитик»",
    category: [
      "Анализ данных",
      "IT-инфраструктура"
    ],
    imageSrc: "/images/img3.svg",
    registration: {
      "startDate": "14.09.2023",
      "endDate": "29.09.2023"
    },
    startCourse: "15.09.2023",
    price: 14000,
    isPopular: true
  }
];

let cartProducts = [];

const calculateTotalPrice = () => {
  let total = 0;
  
  let items = useCartStore.getState().cartProducts
    
    // Подсчет общей стоимости товаров
    for (let i = 0; i < items.length; i++) {
      total += items[i].price;  // Суммируем цены каждого товара
    }
  
  // Возвращение общей стоимости
  return total;
}

const calculatePriceWithPromocode = (promocode) => {
  const totalPrice = calculateTotalPrice();

  // Заведем условие что промокод "SALE10" дает скидку 10%
  if (promocode === 'SALE10') {
      return totalPrice * 0.9;   // Уменьшение цены на 10%
  } else {
      return totalPrice;         // Нет скидки если код промокода не подходит
  }
};


export const handlers = [

  // Добовление товаров
  rest.post("/cart/add", (req, res, ctx) => {

    const { idProduct } = req.body;

    for (let index = 0; index < catalogProduct.length; index++) {

      const item = catalogProduct[index];

      for (let jIndex = 0; jIndex < item.idProduct.length; jIndex++) {

        if (item.idProduct[jIndex] === idProduct) {

          cartProducts.push(catalogProduct[index]);
          break;

        }

      }

    }

    if (cartProducts.length > cartProducts.length-1) {
      const s = cartProducts.length - (cartProducts.length-1);
      cartProducts = cartProducts.slice(cartProducts.length - s);
    }

    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        cartProducts
      }));
  }),

  // Удаление товаров
  rest.post("/cart/remove", (req, res, ctx) => {

    const { idProduct } = req.body;

    for (let index = 0; index < catalogProduct.length; index++) {

      const item = catalogProduct[index];

      for (let jIndex = 0; jIndex < item.idProduct.length; jIndex++) {

        if (item.idProduct[jIndex] === idProduct) {

          cartProducts.push(catalogProduct[index]);
          break;

        }

      }

    }
    
    // Проверяем, есть ли товар с таким productId в корзине
    const existingItemIndex = cartProducts.findIndex(item => item.idProduct === idProduct);

    if (existingItemIndex !== -1) {
      // Товар существует в корзине, удаляем его
      cartProducts.splice(existingItemIndex, 1);
    }

    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        cartProducts,
        existingItemIndex
      }));
  }),

  //Получение товаров
  rest.post("/filterProducts", (req, res, ctx) => {

    const { searchParam } = req.body

    const products = [];

    for (let index = 0; index < catalogProduct.length; index++) {

      const item = catalogProduct[index];

      for (let jIndex = 0; jIndex < item.category.length; jIndex++) {

        if (item.category[jIndex] === searchParam) {

          products.push(catalogProduct[index]);
          break;

        }

      }

    }

    const responce = {

      products: products

    }

    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        data: responce
      }),
    )
  }),
  rest.get("/products", (req, res, ctx) => {
    const products = catalogProduct
    const responce = {
      products
    }
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        data: responce
      }),
    )
  }),
  rest.get("/filters", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        cat: [
          {
            name: "Все курсы",
            searchParam: "all",
            isChecked: true
          },
          {
            name: "Бэкенд-разработка",
            searchParam: "Бэкенд-разработка",
          },
          {
            name: "Веб-разработка",
            searchParam: "Веб-разработка",
          },
          {
            name: "Мобильная разработка",
            searchParam: "Мобильная разработка",
          },
          {
            name: "Анализ данных",
            searchParam: "Анализ данных",
          },
          {
            name: "IT-инфраструктура",
            searchParam: "IT-инфраструктура",
          },
          {
            name: "Управление разработкой",
            searchParam: "Управление разработкой",
          },
        ]
      }),
    )
  }),
  rest.post("/apply-promocode", (req, res, ctx) => {
    const { promocode } = req.body;

    const price = calculatePriceWithPromocode(promocode);

    return res(ctx.status(200), ctx.json({ price }));
  }),
]