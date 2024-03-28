import { InputHTMLAttributes } from "react";

type BaseCheckBoxType = InputHTMLAttributes<HTMLInputElement>;

type CheckBoxProps = BaseCheckBoxType;

const CheckBox = ({ checked, onClick }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="checkbox"
      name="checkbox"
      checked={checked}
      onClick={onClick}
    />
  );
};

export default CheckBox;
