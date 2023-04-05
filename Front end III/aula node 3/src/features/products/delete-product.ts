import { Produto } from '../../types';
import listaProdutos from '../../database';

export const deleteProduct = (id:string) :string | Partial<Produto[]> => {
    const indexProduct = listaProdutos.findIndex((produto)=> produto!.id === id);

    if(indexProduct === -1){
        return "Produto não encontrado"
    }

    listaProdutos.splice(indexProduct,1)
    return listaProdutos
}
