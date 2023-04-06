import { Produto } from "../../types";
import listaProdutos from "../../database";

function criaProduto(produto: Produto) {
  const nomeEncontrado = listaProdutos.some(
    (item) => item!.nome === produto.nome
  );

  if (nomeEncontrado) {
    console.log("O nome do produto enviado já está cadastrado.");
  } else {
    listaProdutos.push(produto);
  }
}

export default criaProduto;
