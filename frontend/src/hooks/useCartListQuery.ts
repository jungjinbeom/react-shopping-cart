import { useQuery } from "@tanstack/react-query";
import { getCartList } from "../api/cart/getCartList";

const useCartListQuery = () => {
  return useQuery({ queryKey: ["cartList"], queryFn: getCartList });
};

export default useCartListQuery;
