import { useQuery } from "@tanstack/react-query";
import OrderListItem from "../components/OrderListItem";
import Layout from "../components/Layout";
import OrderListHeader from "../components/OrderListHeader";
import OrderSummary from "../components/OrderSummary";
import getOrderList from "../../../api/order/getOrderList";

const OrderList = () => {
  const { data } = useQuery({
    queryKey: ["orderList"],
    queryFn: getOrderList,
  });

  return (
    <Layout title="주문 목록">
      <OrderSummary>
        {data?.map((item) => (
          <>
            <OrderListHeader />
            {item.orderDetails.map((orderDetail) => {
              const price = `${orderDetail.price.toLocaleString()}원/ 수량${orderDetail.quantity}개`;
              return (
                <OrderListItem
                  key={orderDetail.id}
                  name={orderDetail.name}
                  price={price}
                  imageUrl={orderDetail.imageUrl}
                />
              );
            })}
          </>
        ))}
      </OrderSummary>
    </Layout>
  );
};

export default OrderList;
