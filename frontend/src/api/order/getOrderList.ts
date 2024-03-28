import axios from "axios";

type ResponseType = {
  id: number;
  orderDetails: {
    id: number;
    price: number;
    name: string;
    imageUrl: string;
    quantity: number;
  }[];
};
const getOrderList = async () => {
  const { data } = await axios.get<ResponseType[]>("/orders");
  return data;
};

export default getOrderList;
