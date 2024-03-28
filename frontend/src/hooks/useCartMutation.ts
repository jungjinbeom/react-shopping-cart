import { useMutation } from "@tanstack/react-query";
import addCartList from "../api/cart/addCartList";

export const useCartMutation = () => {
  return useMutation({ mutationFn: addCartList });
};
