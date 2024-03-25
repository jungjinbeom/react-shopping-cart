import { PropsWithChildren } from "react";
import Button from "../../../components/button/Button";
import CheckBox from "../../../components/checkbox/CheckBox";
import Container from "../../../components/container/Container";
import Label from "../../../components/label/Label";
import ProductName from "./ProductName";

const LeftSection = ({ children }: PropsWithChildren) => {
  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <Container className="checkbox-container">
          <CheckBox checked={false} />
          <Label className="checkbox-label" htmlFor="checkbox">
            선택해제
          </Label>
        </Container>
        <Button type="button" className="delete-button">
          상품삭제
        </Button>
      </div>
      <ProductName>든든배송 상품(3개)</ProductName>
      <hr className="divide-line-gray mt-10" />
      {children}
    </section>
  );
};

export default LeftSection;
