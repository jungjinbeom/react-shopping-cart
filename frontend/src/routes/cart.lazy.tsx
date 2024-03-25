import { createLazyFileRoute } from "@tanstack/react-router";
import Cart from "../pages/cart/Cart";

export const Route = createLazyFileRoute("/cart")({
  component: Cart,
});
