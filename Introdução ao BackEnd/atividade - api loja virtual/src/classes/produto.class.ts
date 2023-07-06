export type ProdutoDTO = {
	id: string;
	preco: number;
	nome: string;
	descricao: string;
	numeroSerie: string;
};

export type AtualizarProdutoDTO = Partial<
	Omit<ProdutoDTO, "id" | "numeroSerie">
>;

export type Acao = "adicionar" | "excluir";

export type MetodoDesconto = "porcentagem" | "valor";

export class Produto {
	#id: string;
	#categorias: any[];
	#preco: number;
	#quantidadeEstoque: number;
	#nome: string;
	#descricao: string;
	#numeroSerie: string;
	#ativo: boolean;

	constructor(dados: ProdutoDTO) {
		this.#id = dados.id;
		this.#categorias = [];
		this.#preco = dados.preco;
		this.#quantidadeEstoque = 0;
		this.#nome = dados.nome;
		this.#descricao = dados.descricao;
		this.#numeroSerie = dados.numeroSerie;
		this.#ativo = true;
	}

	public adicionarEstoque(novaQuantidade: number) {
		this.#quantidadeEstoque += novaQuantidade;
	}

	public editarDados(dados: AtualizarProdutoDTO) {
		this.#nome = dados.nome || this.#nome;
		this.#descricao = dados.descricao || this.#descricao;
		this.#preco = dados.preco || this.#preco;
	}

	public editarCategorias(acao: Acao, id?: string, categoria?: string) {
		switch (acao) {
			case "adicionar":
				if (!categoria) {
					throw new Error("categoria não informada");
				}
				this.#categorias.push(categoria);
			case "excluir":
				if (!id) {
					throw new Error("Id da categoria não encontrado");
				}
				const index = this.#categorias.indexOf(id);
				this.#categorias.splice(index, 1);
				break;
			default:
				throw new Error("A ação é inválida");
		}
	}

	public aplicarDesconto(metodo: MetodoDesconto, valor: number) {
		if (valor < 0) {
			throw new Error("o valor deve ser maior que zero");
		}
		switch (metodo) {
			case "porcentagem":
				if (valor >= 100) {
					throw new Error("O valor de porcentagem deve ser menor que 100.");
				}
				this.#preco -= (this.#preco * valor) / 100;
				break;
			case "valor":
				if (valor > this.#preco) {
					throw new Error(
						"O valor informado para desconto é excede o preço do produto."
					);
				}

				this.#preco -= valor;
				break;
		}
	}
	public toJSON() {
		return {
			id: this.#id,
			nome: this.#nome,
			descricao: this.#descricao,
			preco: this.#preco,
			numeroSerie: this.#numeroSerie,
			quantidadeEstoque: this.#quantidadeEstoque,
			categorias: this.#categorias,
			ativo: this.#ativo,
		};
	}
}
