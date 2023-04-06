import listaProdutos from "../../database";
import { Categoria } from "../../types";

const listaPorCategoria = (categoria: Partial<Categoria>) => {
  const lista = listaProdutos.filter(
    (produto) => produto.categoria.nome === categoria.nome
  );

  lista.forEach((produto) => {
    console.log(produto.nome, produto.quantidade);
  });
};

export default listaPorCategoria;
