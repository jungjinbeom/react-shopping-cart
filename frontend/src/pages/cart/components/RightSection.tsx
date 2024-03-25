import Button from "../../../components/button/Button";
import FlexCenter from "../../../components/flex-center/FlexCenter";
import HighlightText from "../../../components/highlight-text/HighlightText";
import ProductName from "./ProductName";
import RightSectionBottom from "./RightSectionBottom";

const RightSection = () => {
  return (
    <section className="cart-right-section">
      <div className="cart-right-section__top">
        <ProductName>결제예상금액</ProductName>
      </div>
      <hr className="divide-line-thin" />
      <RightSectionBottom>
        <div className="flex justify-between p-20 mt-20">
          <HighlightText>결제예상금액</HighlightText>
          <HighlightText>21,800원</HighlightText>
        </div>
        <FlexCenter className="mt-30 mx-10">
          <Button type="button" className="primary-button flex-center">
            주문하기(3개)
          </Button>
        </FlexCenter>
      </RightSectionBottom>
    </section>
  );
};

export default RightSection;
