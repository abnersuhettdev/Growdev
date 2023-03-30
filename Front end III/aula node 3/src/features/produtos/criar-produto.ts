import estoque from "../../database";
import { Produto } from "../../types";

function criarProduto(produto:Produto) {
    const nomeExiste = estoque.some(item => item.nome === produto.nome)

    if(nomeExiste){
        console.log("O nome do produto enviado já está cadastrado")
    }

    estoque.push(produto)
}

export default criarProduto