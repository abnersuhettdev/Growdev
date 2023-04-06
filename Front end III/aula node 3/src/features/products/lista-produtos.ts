import listaProdutos from "../../database";

const listarProdutos = () => {
  listaProdutos.forEach((product) => console.log(product));
};

export default listarProdutos;
