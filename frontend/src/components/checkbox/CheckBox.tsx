import { InputHTMLAttributes } from "react";

type BaseCheckBoxType = InputHTMLAttributes<HTMLInputElement>;

type CheckBoxProps = BaseCheckBoxType;

const CheckBox = ({ checked }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="checkbox"
      name="checkbox"
      checked={checked}
    />
  );
};

export default CheckBox;
