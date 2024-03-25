import Button from "../button/Button";

interface OrderListItemProps {
  productName: string;
  productInfo: string;
  src: string;
  alt: string;
}
const OrderListItem = ({
  productName,
  productInfo,
  src,
  alt,
}: OrderListItemProps) => {
  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src={src} alt={alt} />
        <div className="flex-col gap-15">
          <span className="order-name">{productName}</span>
          <span className="order-info">{productInfo}</span>
        </div>
      </div>
      <Button
        type="button"
        className="primary-button-small flex-center self-start"
      >
        장바구니
      </Button>
    </div>
  );
};

export default OrderListItem;
