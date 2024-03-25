import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type BaseButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  type: "button" | "submit" | "reset";
  className?: string;
} & PropsWithChildren<BaseButtonType>;
const Button = ({ type = "button", className, children }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
