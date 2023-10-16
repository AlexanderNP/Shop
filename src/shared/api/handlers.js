import { rest } from "msw"

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", null),

  // Handles a GET /user request
  rest.get("/cart", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        kitchen: [
          {
            idKitchen: 1,
            name: "Стол деревянный",
            price: 1200
          },
          {
            idKitchen: 2,
            name: "Стол дубовый",
            price: 2000
          }
        ]
      }),
    )

  }),
]