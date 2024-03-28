import Header from "../../components/header/Header";
import CartList from "./components/CartList";
import LeftSection from "./components/LeftSection";

import { useState } from "react";
import Flex from "../../components/flex/Flex";
import Section from "../../components/section/Section";
import useCartListQuery from "../../hooks/useCartListQuery";
import RightSection from "./components/RightSection";

export const OPERATOR = {
  PLUS: "PLUS",
  MINUS: "MINUS",
} as const;

const sum = (first: number, second: number) => {
  return first + second;
};
const subtract = (first: number, second: number) => {
  return first - second;
};

type TotalPrice = {
  price: number;
  operator?: string;
};

const Cart = () => {
  const { data } = useCartListQuery();

  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPrice = ({ price, operator }: TotalPrice) => {
    if (!operator) setTotalPrice((prev) => prev + price);

    if (operator) {
      if (operator === "PLUS") setTotalPrice((prev) => sum(prev, price));
      if (operator === "MINUS") setTotalPrice((prev) => subtract(prev, price));
    }
  };

  return (
    <Section type="cart">
      <Header>
        <h2 className="cart-section__title">장바구니</h2>
      </Header>
      <Flex>
        <LeftSection>
          {data?.map((item) => (
            <CartList
              key={item.id}
              product={item.product}
              handleTotalPrice={handleTotalPrice}
            />
          ))}
        </LeftSection>
        <RightSection price={totalPrice} />
      </Flex>
    </Section>
  );
};

export default Cart;
