import { rest } from "msw"

let cartItems = [];

export const handlers = [

  // Добовление товаров
  rest.post("/cart/add", (req, res, ctx) => {

    const { productId, quantity } = req.body;

    // Проверяем, есть ли товар с таким productId уже в корзине
    const existingItemIndex = cartItems.findIndex(item => item.productId === productId);

    if (existingItemIndex !== -1) {
      // Товар уже существует в корзине, обновляем его количество
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Товара нет в корзине, добавляем его
      cartItems.push({ productId, quantity });
    }
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        cartItems
      }));
  }),

  // Удаление товаров
  rest.post("/cart/remove", (req, res, ctx) => {

    const { productId } = req.body;

    // Проверяем, есть ли товар с таким productId в корзине
    const existingItemIndex = cartItems.findIndex(item => item.productId === productId);

    if (existingItemIndex !== -1) {
      // Товар существует в корзине, удаляем его
      cartItems.splice(existingItemIndex, 1);
    }

    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        cartItems
      }));
  }),

  //Получение товаров
  rest.get("/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: "true",
        data: {
          idProduct: "123",
          label: "Бесплатный офлайн курс",
          productName: "«Frontend-разработчик»",
          category: [
            "Веб-разработка",
            "Мобильная разработка"
          ],
          imageSrc: "/images/course-image.png",
          registration: {
            "startDate": "298347302984",
            "endDate": "239847320984"
          },
          startCourse: "2389047320",
          price: 10000,
          isPopular: true
        }
      }),
    )
  }),
]