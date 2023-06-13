class Produto {
	id: string;
	nome: string;
	preco: number;
	private estoque: number;

	constructor(id: string, nome: string, preco: number) {
		this.estoque = 0;
		this.id = id;
		this.nome = nome;
		this.preco = preco;
	}

	adicionarEstoque(qtd: number) {
		this.estoque = qtd;
	}
}

export default Produto;
