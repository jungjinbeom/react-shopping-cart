import { ChangeEvent, MouseEvent, useState } from "react";
import CheckBox from "../../../components/checkbox/CheckBox";
import Container from "../../../components/container/Container";
import Input from "../../../components/input/Input";
import { ProductType } from "../../../domain/type";
import CountButton from "./CountButton";
import TrashIcon from "./TrashIcon";
import { OPERATOR } from "../Cart";

const MIN = 0;

interface CartListProps {
  product: ProductType;
  handleTotalPrice: ({
    price,
    operator,
  }: {
    price: number;
    operator?: string;
  }) => void;
}

const isMinVaildate = (num: number) => {
  return MIN >= num;
};

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return { count, increase, decrease };
};
const CartList = ({ product, handleTotalPrice }: CartListProps) => {
  const { name = "", price = 0, imageUrl = "" } = product;
  const { count, increase, decrease } = useCounter();

  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = (e: MouseEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    setIsChecked(checked);

    const total = checked ? price * count : -(price * count);
    handleTotalPrice({ price: total });
  };

  const handleIncrease = () => {
    increase();

    if (!isChecked) return;

    handleTotalPrice({ price, operator: OPERATOR.PLUS });
  };

  const handleDecrease = () => {
    if (isMinVaildate(count)) return;
    decrease();

    if (!isChecked) return;
    handleTotalPrice({ price, operator: OPERATOR.MINUS });
  };

  return (
    <>
      <Container className="cart-container">
        <div className="flex gap-15 mt-10">
          <CheckBox checked={isChecked} onClick={handleChecked} />
          <img className="w-144 h-144" src={imageUrl} alt={name} />
          <span className="cart-name">{name}</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <TrashIcon />
          <Container className="number-input-container">
            <Input
              type="number"
              className="number-input"
              value={count}
              readOnly
            />
            <CountButton increase={handleIncrease} decrease={handleDecrease} />
          </Container>
          <span className="cart-price">{`${(price * count)?.toLocaleString()}원`}</span>
        </div>
      </Container>
      <hr className="divide-line-thin mt-10" />
    </>
  );
};
export default CartList;
