import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

const Input = ({ ...args }: InputHTMLAttributes<HTMLInputElement>) => {
  return <InputContainer {...args} />;
};

export default Input;
