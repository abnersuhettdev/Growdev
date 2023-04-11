import React from "react";
import { Tarefa } from "../../types";
import { CardStyled } from "./style";

export const Card: React.FC<Tarefa> = ({id, titulo, criadoEm}) =>{
    return(
        <CardStyled>
            <strong>{titulo}</strong> 
            <small>{criadoEm}</small>
        </CardStyled>
    )
}