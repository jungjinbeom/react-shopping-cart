import axios from "axios";
import { ProductType } from "../../domain/type";

type ResponseType = {
  id: number;
  orderDetails: ProductType[];
};

const getOrderList = async () => {
  const { data } = await axios.get<ResponseType[]>("/orders");
  return data;
};

export default getOrderList;
