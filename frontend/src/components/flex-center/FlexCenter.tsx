import { HTMLAttributes } from "react";

type BaseFlexCenterType = HTMLAttributes<HTMLDivElement>;

type FlexCenterProps = BaseFlexCenterType;

const FlexCenter = ({ className }: FlexCenterProps) => {
  return <div className={`flex-center ${className}`}></div>;
};

export default FlexCenter;
