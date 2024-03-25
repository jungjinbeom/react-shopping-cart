import { createLazyFileRoute } from "@tanstack/react-router";
import Product from "../pages/product/Product";

export const Route = createLazyFileRoute("/product")({
  component: Product,
});
