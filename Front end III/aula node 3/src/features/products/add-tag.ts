import listaProdutos from "../../database";
import { Tag } from "../../types";

const addTag = (id:string ,tagsAdicionadas: Tag) =>{

    const produto = listaProdutos.find((produto) => produto.id === id);

    if(!produto){
        console.log("Produto não encontrado!")
        return
    }

    if(produto.categoria.tags.includes(tagsAdicionadas)){
        console.log("Tag Já adicionada ao item")
        return
    }

    produto.categoria.tags.push(tagsAdicionadas) 
    console.log(produto)
}

export default addTag