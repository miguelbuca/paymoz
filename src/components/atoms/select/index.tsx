import { SelectHTMLAttributes } from "react";
import { SelectContainer } from "./styles";

const Select = ({ ...args }: SelectHTMLAttributes<HTMLSelectElement>) => {
  return <SelectContainer {...args} />;
};

export default Select;
