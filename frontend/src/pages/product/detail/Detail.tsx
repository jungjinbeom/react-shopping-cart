import product from "../../../assets/images/product.png";
import Button from "../../../components/button/Button";
import Container from "../../../components/container/Container";
import { useCartMutation } from "../../../hooks/useCartMutation";
import { useProductQuery } from "../../../hooks/useProductQuery";

type DetailProps = {
  id: number;
};
const Detail = ({ id }: DetailProps) => {
  const { data } = useProductQuery({ id });
  const { mutate } = useCartMutation();

  const addCart = () => mutate(data);

  return (
    <Container className="product-detail-container">
      <div className="flex-col-center w-520">
        <img className="w-480 h-480 mb-10" src={product} alt={data?.name} />
        <div className="product-detail-info">
          <span className="product-detail-info__name">{data?.name}</span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">
              {`${data?.price?.toLocaleString()}원`}
            </span>
          </div>
        </div>
        <Button
          type="button"
          className="product-detail-button flex-center mt-20"
          onClick={addCart}
        >
          장바구니
        </Button>
      </div>
    </Container>
  );
};

export default Detail;
