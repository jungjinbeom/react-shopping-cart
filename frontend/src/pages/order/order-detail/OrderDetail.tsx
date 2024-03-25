import Container from "../../../components/container/Container";
import Header from "../../../components/header/Header";
import HighlightText from "../../../components/highlight-text/HighlightText";
import OrderListItem from "../../../components/orderListItem/OrderListItem";

const OrderDetail = () => {
  return (
    <section className="order-section">
      <Header>
        <h2 className="order-section__title">주문내역상세</h2>
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

      <Container className="order-detail-container">
        <div className="w-480">
          <span className="order-detail-title">결제금액 정보</span>
          <hr className="divide-line-thin my-20" />
          <div className="flex justify-between">
            <HighlightText>총 결제금액</HighlightText>
            <HighlightText>325,600원</HighlightText>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OrderDetail;
