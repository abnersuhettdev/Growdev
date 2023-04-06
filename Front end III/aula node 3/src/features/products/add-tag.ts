import listaProdutos from "../../database";
import { Tag } from "../../types";

const addTag = (id:string ,tagsAdicionadas: Tag) =>{

    const foundProduct = listaProdutos.find((produto) => produto.id === id);

    if(!foundProduct){
        console.log("Produto não encontrado!")
        return
    }

    if(foundProduct.categoria.tags.includes(tagsAdicionadas)){
        console.log("Tag Já adicionada ao item")
        return
    }

    foundProduct.categoria.tags.push(tagsAdicionadas) 
    console.log(foundProduct)
}

export default addTag