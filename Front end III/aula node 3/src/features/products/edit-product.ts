import listaProdutos from "../../database"
import { Produto } from "../../types"

export const editProduct = (id:string, nome:string, quantidade:number, preco:number): Partial<Produto[]> =>{
    
    const produtoToDeleteIndex = listaProdutos.findIndex(produto => produto!.id === id)

    const produto = listaProdutos[produtoToDeleteIndex]

    const newProduct :Produto = {
        id: produto!.id,
        genero: produto!.genero,
        categoria: produto!.categoria,

        nome : nome !== undefined ? nome : produto!.nome,
        quantidade : quantidade !== undefined ? quantidade : produto!.quantidade,
        preco : preco !== undefined ? preco : produto!.preco
    }

    listaProdutos.splice(produtoToDeleteIndex,1, newProduct)
    return listaProdutos
}