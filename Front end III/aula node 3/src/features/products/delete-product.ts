import { Produto } from '../../types';
import listaProdutos from '../../database';

const deletaProduto = (id:string) :string | Partial<Produto[]> => {
    const indexProduto = listaProdutos.findIndex((produto)=> produto!.id === id);

    if(indexProduto === -1){
        return "Produto não encontrado"
    }

    listaProdutos.splice(indexProduto,1)
    return listaProdutos
}

export default deletaProduto