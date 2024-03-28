import { Link } from "@tanstack/react-router";
import image from "../../../../assets/images/product.png";
import { ROUTE_PATH } from "../../../../domain/route";
import { ProductType } from "../../../../domain/type";
import CartIcon from "./CartIcon";
import ProductInfo from "./ProductInfo";

type ListItemProps = ProductType & {
  onClick: ({ name, price, imageUrl, id }: ProductType) => void;
};

const ListItem = ({
  id,
  //imageUrl,
  name,
  price,

  onClick,
}: ListItemProps) => {
  const addCartList = () => {
    onClick({ name, price, imageUrl: image, id: id });
  };
  return (
    <div>
      <img src={image} alt={name} />
      <div className="flex justify-between w-280 p-5">
        <Link to={ROUTE_PATH.PRODUCT_DETAIL} params={{ id: id }}>
          <ProductInfo name={name} price={price} />
        </Link>
        <CartIcon onClick={addCartList} />
      </div>
    </div>
  );
};

export default ListItem;
