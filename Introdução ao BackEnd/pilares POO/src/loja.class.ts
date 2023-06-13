import Gerente from "./gerente.class";
import Produto from "./produtos.class";

class Loja {
	razaoSocial: string;
	responsavelComercial: Gerente;
	responsavelFinanceiro: Gerente;
	dataAbertura: Date;
	produtos: Produto[];

	constructor(
		razaoSocial: string,
		responsavelComercial: Gerente,
		responsavelFinanceiro: Gerente,
		dataAbertura: Date
	) {
		this.razaoSocial = razaoSocial;
		this.dataAbertura = dataAbertura;
		this.responsavelComercial = responsavelComercial;
		this.responsavelFinanceiro = responsavelFinanceiro;
		this.produtos = [];
	}

	adicionarProduto(novoProduto: Produto) {
		this.produtos.push(novoProduto);
	}

	adicionarProdutos(novosProdutos: Produto[]) {
		this.produtos = [...this.produtos, ...novosProdutos];
	}
}

export default Loja;
