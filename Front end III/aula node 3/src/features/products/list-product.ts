import listaProdutos from "../../database";

const listProducts = () => {
  listaProdutos.forEach((product) => console.log(product));
};

export default listProducts;
