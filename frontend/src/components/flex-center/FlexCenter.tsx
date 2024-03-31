import classnames from "classnames";
import { HTMLAttributes, PropsWithChildren } from "react";

type BaseFlexCenterType = HTMLAttributes<HTMLDivElement>;

type FlexCenterProps = BaseFlexCenterType & PropsWithChildren;

const FlexCenter = ({ className, children }: FlexCenterProps) => {
  return <div className={classnames("flex-center", className)}>{children}</div>;
};

export default FlexCenter;
