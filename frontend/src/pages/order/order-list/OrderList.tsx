import Header from "../../../components/header/Header";
import OrderListItem from "../../../components/orderListItem/OrderListItem";

const OrderList = () => {
  return (
    <section className="order-section">
      <Header>
        <h2 className="order-section__title">주문 목록</h2>
      </Header>

      <div className="order-list">
        <div className="order-list__header">
          <span>주문번호: 1</span>
          <span>{`상세보기 >`}</span>
        </div>
        <OrderListItem
          productName="PET보틀-정사각(420ml)"
          productInfo="54,800원 / 수량: 3개"
          src="./assets/images/product.png"
          alt="PET보틀-정사각(420ml)"
        />
      </div>
    </section>
  );
};

export default OrderList;
