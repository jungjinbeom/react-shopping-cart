import { HttpResponse, http } from "msw";
import { ProductType } from "../domain/type";
import { productHandler } from "./productHandler";
import { orderHandler } from "./orderHandler";

type CartListType = { id: number; product: ProductType };

const cartList: CartListType[] = [
  {
    id: 1,
    product: {
      name: "test",
      price: 1234,
      imageUrl: "test.com",
      id: 1,
    },
  },
  {
    id: 5,
    product: {
      name: "tes11111t",
      price: 1234,
      imageUrl: "test.com",
      id: 10,
    },
  },
];

export const handlers = [
  ...productHandler,
  ...orderHandler,

  http.get("/carts", () => {
    return HttpResponse.json(cartList);
  }),

  http.post<never, CartListType>("/carts", async ({ request }) => {
    const newPost = await request.json();
    const id = cartList.length + 1;
    cartList.push({
      id: id,
      product: { ...newPost },
    });
    return new HttpResponse(null, {
      status: 201,
    });
  }),
];
