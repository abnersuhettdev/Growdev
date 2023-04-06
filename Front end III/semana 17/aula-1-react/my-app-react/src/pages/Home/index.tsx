import React from "react";
import './styles.css'
import TitleDefault from "../../components/TitleDefault";
import Input from "../../components/Input";

const Home:React.FC =()=>{
    return(
        <main>
            <TitleDefault title="Home"/>
            <Input id='name' label="Nome" name="name" placeholder="Digite seu nome..." type="text"/>

            <Input id='email' label="Email" name="email" placeholder="Digite seu email..." type="text"/>
        </main>
    )
}

export default Home