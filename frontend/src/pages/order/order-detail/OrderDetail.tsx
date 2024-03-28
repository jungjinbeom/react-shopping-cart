import Container from "../../../components/container/Container";
import HighlightText from "../../../components/highlight-text/HighlightText";
import OrderListItem from "../components/OrderListItem";
import Layout from "../components/Layout";
import OrderSummary from "../components/OrderSummary";
import OrderListHeader from "../components/OrderListHeader";

const OrderDetail = () => {
  return (
    <Layout title="주문내역상세">
      <OrderSummary>
        <OrderListHeader />
        <OrderListItem
          productName="PET보틀-정사각(420ml)"
          productInfo="54,800원 / 수량: 3개"
          src="./assets/images/product.png"
          alt="PET보틀-정사각(420ml)"
        />
      </OrderSummary>
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
    </Layout>
  );
};

export default OrderDetail;
