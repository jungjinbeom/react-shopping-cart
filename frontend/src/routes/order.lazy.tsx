import { createLazyFileRoute } from "@tanstack/react-router";
import Order from "../pages/order/order-payment/OrderPayment";
import { ROUTE_PATH } from "../domain/route";

export const Route = createLazyFileRoute(ROUTE_PATH.ORDER)({
  component: Order,
});
