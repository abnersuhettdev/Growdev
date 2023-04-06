import listaProdutos from "../../database";

const listaPorPreco = (min: number, max: number) => {
  const listaFiltrada = listaProdutos.filter(
    (produto) => produto.preco >= min && produto.preco <= max
  );

  listaFiltrada.forEach((product) => {
    console.log({
      nome: product.nome,
      preco: product.preco,
    });
  });
};

export default listaPorPreco;
