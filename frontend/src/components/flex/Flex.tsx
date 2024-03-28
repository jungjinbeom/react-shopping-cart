import { HTMLAttributes, PropsWithChildren } from "react";
import classnames from "classnames";

type BaseFlexType = HTMLAttributes<HTMLDivElement>;

type FlexProps = BaseFlexType & PropsWithChildren;

const Flex = ({ className, children }: FlexProps) => {
  return <div className={classnames("flex", className)}>{children}</div>;
};

export default Flex;
