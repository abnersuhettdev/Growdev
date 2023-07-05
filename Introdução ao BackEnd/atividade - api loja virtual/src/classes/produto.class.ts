type ProdutoDTO = {
	id: string;
	preco: number;
	nome: string;
	descricao: string;
	numeroSerie: string;
};

type AtualizarProdutoDTO = Omit<ProdutoDTO, "id" | "numeroSerie">;

type Acao = "adicionar" | "excluir";

type MetodoDesconto = "porcentagem" | "valor";

class Produto {
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

	public adicionarEstoque(novoQuantidade: number) {}

	public editarDados(produtoEditado: AtualizarProdutoDTO) {}

	public editarCategorias(categoria?: string, acao: Acao) {}

	public aplicarDesconto(metodo: MetodoDesconto, valor: number) {}
}
