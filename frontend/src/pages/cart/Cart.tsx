import Header from "../../components/header/Header";
import CartList from "./components/CartList";
import LeftSection from "./components/LeftSection";

import RightSection from "./components/RightSection";

const Cart = () => {
  return (
    <section className="cart-section">
      <Header>
        <h2 className="cart-section__title">장바구니</h2>
      </Header>
      <div className="flex">
        <LeftSection>
          <CartList />
        </LeftSection>
        <RightSection />
      </div>
    </section>
  );
};

export default Cart;
