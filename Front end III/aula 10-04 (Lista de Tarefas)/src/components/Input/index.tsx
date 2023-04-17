import React, { useState } from "react";
import CustomInput from "./styles";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  label?: string;
  showLabel?: boolean;
  id: string;
}

interface User {
  email: string;
  password: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  type,
  id,
  showLabel,
}) => {
  const [titulo, setTitulo] = useState("Teste");

  const [users, setUsers] = useState<User[]>([
    { email: "joao@teste", password: "123" },
    { email: "mariao@teste", password: "1234" },
  ]);

  const [loggedUser, setLoggedUser] = useState<User>({
    email: "",
    password: "",
  });

  const newUser: User = {
    email: "joaquim@teste",
    password: "12345",
  };

  //ADICIONAR um novo usuario na lista de usuarios

  //UNSHIFT
  setUsers((prevState) => [newUser, ...prevState]);

  //PUSH
  setUsers((prevState) => [...prevState, newUser]); //copia de um determinado array ou objeto

  //REMOVER um usuario da lista
  setUsers(users.filter((user) => user.email !== "joaquim@teste"));

  const changeTitle = (texto: string) => {
    setTitulo(texto);
    console.log(titulo);
  };

  return (
    <>
      <label htmlFor={id}>{titulo}</label>

      <CustomInput
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={(ev) => changeTitle(ev.target.value)}
      />
    </>
  );
};

export default Input;
