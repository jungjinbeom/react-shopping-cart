import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type BaseButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  type: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
} & PropsWithChildren<BaseButtonType>;

const Button = ({
  type = "button",
  className,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
