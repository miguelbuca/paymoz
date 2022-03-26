import Input from "../../atoms/input";
import Select from "../../atoms/select";
import { PhoneInputContainer } from "./styles";


const PhoneInput = () => {
  return (
    <PhoneInputContainer>
      <div>
        <Select>
          <option value="+258">+258</option>
          <option value="+244">+244</option>
        </Select>
      </div>
      <div>
        <Input placeholder="Número de telemóvel" required/>
      </div>
    </PhoneInputContainer>
  );
};

export default PhoneInput;
