import listaProdutos from "../../database";

const listByPrice = (min: number, max: number) => {
  const filterList = listaProdutos.filter(
    (produto) => produto.preco >= min && produto.preco <= max
  );

  filterList.forEach((product) => {
    console.log({
      nome: product.nome,
      preco: product.preco,
    });
  });
};

export default listByPrice;
