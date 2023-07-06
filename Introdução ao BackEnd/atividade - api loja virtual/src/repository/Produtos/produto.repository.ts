import { randomUUID } from "crypto";
import { Produto } from "../../classes";
import { produtos } from "../../database";
import { AdicionarProdutoDTO } from "../../usecases/Produtos";

export class ProdutoRepository {
	public verificaNumeroSerie(numeroSerie: string) {
		return produtos.some(
			(produto) => produto.toJSON().numeroSerie === numeroSerie
		);
	}

	public cadastrarProduto(produto: AdicionarProdutoDTO): Produto {
		const { descricao, nome, numeroSerie, preco } = produto;

		const novoProduto = new Produto({
			id: randomUUID(),
			nome,
			descricao,
			numeroSerie,
			preco,
		});

		produtos.push(novoProduto);

		return novoProduto;
	}
}
