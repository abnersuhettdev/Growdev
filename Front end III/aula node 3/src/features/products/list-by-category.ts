import listaProdutos from "../../database";
import { Categoria } from "../../types";

const listByCategory = (category: Partial<Categoria>) => {
  const list = listaProdutos.filter(
    (product) => product.categoria.nome === category.nome
  );

  list.forEach((produto) => {
    console.log(produto.nome, produto.quantidade);
  });
};

export default listByCategory;
