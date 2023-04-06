import listaProdutos from "../../database";
import { Tag } from "../../types";

const listByTag = (searchTag: Tag) => {
  const filteredList = listaProdutos.filter((produto) =>
    produto.categoria.tags.some((tag) => tag === searchTag)
  );
  let quantidadeTotal: number = 0;
  filteredList.forEach((produto) => (quantidadeTotal += produto.quantidade));
  filteredList.forEach((produto) =>
    console.log({
      nome: produto.nome,
      quantidade: produto.quantidade,
    })
  );
  console.log(
    `A quantidade total de produtos com esta tag é de ${quantidadeTotal}`
  );
};

export default listByTag;
