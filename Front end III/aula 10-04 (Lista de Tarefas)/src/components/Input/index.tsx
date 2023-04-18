import React from "react";
import CustomInput from "./styles";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  label?: string;
  showLabel?: boolean;
  id: string;
  valor: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  type,
  id,
  showLabel,
  valor,
  handleChange,
}) => {
  return (
    <>
      {/* { {showLabel &&}  */}
      <label htmlFor={id}>{valor}</label>
      {/* } */}
      <CustomInput
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={valor}
        onChange={(ev) => handleChange(ev.target.value)}
      />
    </>
  );
};

export default Input;
