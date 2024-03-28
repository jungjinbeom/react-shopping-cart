import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product/getProducts";

const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export default useProductsQuery;
