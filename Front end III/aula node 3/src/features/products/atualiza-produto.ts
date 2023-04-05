import { Produto } from '../../types';
import listaProdutos from '../../database';

function atualizaProduto(id:string, produto:Produto){
    
   const index = listaProdutos.findIndex(produto => produto!.id === id)

   if(index === -1){
    return "Nenhum produto encontrado com este ID"
   }

   const produtoAtualizado:Produto  = {
    id,
    genero: produto.genero,
    nome : produto.nome,
    preco: produto.preco,
    quantidade: produto.quantidade,
    categoria: produto.categoria
   }

   listaProdutos[index] = produtoAtualizado
    
   return produtoAtualizado

}

export default atualizaProduto;