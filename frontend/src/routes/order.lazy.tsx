import { createLazyFileRoute } from "@tanstack/react-router";
import Order from "../pages/order/Order";

export const Route = createLazyFileRoute("/order")({
  component: Order,
});
