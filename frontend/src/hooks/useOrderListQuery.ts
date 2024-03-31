import { useQuery } from "@tanstack/react-query";
import getOrderList from "../api/order/getOrderList";

export const useOrderListQuery = () => {
  return useQuery({
    queryKey: ["orderList"],
    queryFn: getOrderList,
  });
};
