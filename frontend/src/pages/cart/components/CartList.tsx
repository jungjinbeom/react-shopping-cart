import Button from "../../../components/button/Button";
import CheckBox from "../../../components/checkbox/CheckBox";
import Container from "../../../components/container/Container";
import Input from "../../../components/input/Input";

const CartList = () => {
  return (
    <>
      <Container className="cart-container">
        <div className="flex gap-15 mt-10">
          <CheckBox checked={false} />
          <img
            className="w-144 h-144"
            src="./assets/images/product.png"
            alt="PET보틀-정사각(420ml)"
          />
          <span className="cart-name">PET보틀-정사각(420ml)</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img
            className="cart-trash-svg"
            src="./assets/svgs/trash.svg"
            alt="삭제"
          />
          <Container className="number-input-container">
            <Input type="number" className="number-input" value="1" />
            <div>
              <Button type="button" className="number-input-button">
                ▲
              </Button>
              <Button type="button" className="number-input-button">
                ▼
              </Button>
            </div>
          </Container>
          <span className="cart-price">123,456원</span>
        </div>
      </Container>
      <hr className="divide-line-thin mt-10" />
    </>
  );
};
export default CartList;
