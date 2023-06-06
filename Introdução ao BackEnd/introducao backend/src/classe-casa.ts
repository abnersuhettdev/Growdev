class Casa {
	// atributos - caracteristicas para o objeto
	quantidadeJanelas: number;
	quantidadePortas: number;
	largura: number;
	altura: number;
	cor: string = "Amarela";

	constructor(
		qtdJanelas: number,
		qtdPortas: number,
		larg: number,
		alt: number,
		cor?: string
	) {
		this.quantidadeJanelas = qtdJanelas;
		this.quantidadePortas = qtdPortas;
		this.altura = alt;
		this.largura = larg;
		this.cor = cor ?? this.cor;
	}

	// definir todos os metodos/acoes possiveis para a classe
	trocarCor(novaCor: string) {
		//qual a nova cor?
		this.cor = novaCor;
	}

	reformarCasa(
		novaQtdJanela: number,
		novaQtdPorta: number,
		novaCor: string,
		novaLargura: number,
		novaAltura: number
	) {
		this.quantidadePortas = novaQtdPorta;
		this.quantidadeJanelas = novaQtdJanela;
		this.cor = novaCor;
		this.altura = novaAltura;
		this.largura = novaLargura;
	}

	abrirJanela() {
		console.log("Janela aberta");
	}

	fecharJanela() {
		console.log("Janela fechada");
	}

	calcularMetrosQuadrados(comprimento: number) {
		console.log("Metros quadrados: ", comprimento * this.largura);
	}
}

export default Casa;
