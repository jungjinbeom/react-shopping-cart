import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/product/getProduct";

type UseProductQuery = { id: number };

export const useProductQuery = ({ id }: UseProductQuery) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct({ id }),
  });
};
