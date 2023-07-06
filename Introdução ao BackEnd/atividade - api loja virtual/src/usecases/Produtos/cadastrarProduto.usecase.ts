import { Produto, ProdutoDTO } from "../../classes";
import { ProdutoRepository } from "../../repository/Produtos";

export type AdicionarProdutoDTO = Omit<ProdutoDTO, "id">;

export type RetornoAdicionarProduto = {
	sucesso: boolean;
	mensagem: string;
	dado?: Produto;
};

export class CadastrarProduto {
	dados: AdicionarProdutoDTO;

	constructor(dados: AdicionarProdutoDTO) {
		this.dados = dados;
	}

	execute(): RetornoAdicionarProduto {
		const repository = new ProdutoRepository();

		if (repository.verificaNumeroSerie(this.dados.numeroSerie)) {
			return {
				sucesso: false,
				mensagem: "Numero de série já cadastrado",
			};
		}

		const produtoCadastrado = repository.cadastrarProduto(this.dados);

		return {
			mensagem: "Produto cadastrado com sucesso",
			sucesso: true,
			dado: produtoCadastrado,
		};
	}
}
