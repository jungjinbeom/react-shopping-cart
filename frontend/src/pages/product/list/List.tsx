import { ProductType } from "../../../domain/type";

import { useCartMutation } from "../../../hooks/useCartMutation";
import useProductsQuery from "../../../hooks/useProductsQuery";
import ListItem from "./components/ListItem";

const List = () => {
  const { data } = useProductsQuery();
  const { mutate } = useCartMutation();

  const onClick = ({ name, price, imageUrl, id }: ProductType) =>
    mutate({ name, price, imageUrl, id });

  return (
    <section className="product-container">
      {data?.map((item) => (
        <ListItem
          key={item.id}
          id={Number(item.id)}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onClick={onClick}
        />
      ))}
    </section>
  );
};

export default List;
