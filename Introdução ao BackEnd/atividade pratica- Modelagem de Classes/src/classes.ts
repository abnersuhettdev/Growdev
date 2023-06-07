export class Contador {
	valor: number = 0;

	constructor(val: number) {
		this.valor = val;
	}

	zerar() {
		const zero = this.valor - this.valor;

		console.log("Valor zerado = ", zero);
	}

	incrementar() {
		console.log("incrementando: ", this.valor + 1);
	}

	retornarContador() {
		console.log("O contador começa em: ", this.valor);
	}
}

export class Bola {
	cor: string;
	circunferencia: number;
	material: string;

	constructor(cor: string, circunferencia: number, material: string) {
		this.cor = cor;
		this.circunferencia = circunferencia;
		this.material = material;
	}

	trocarCor(novaCor: string) {
		this.cor = novaCor;

		console.log("Nova cor da Bola : ", novaCor);
	}

	mostraCor() {
		console.log("Cor da bola: ", this.cor);
	}
}

export class ContaCorrente {
	numeroConta: number;
	nomeCorrentista: string;
	saldo: number = 0;

	constructor(numConta: number, nome: string, saldo?: number) {
		this.numeroConta = numConta;
		this.nomeCorrentista = nome;
		this.saldo = saldo ?? this.saldo;
	}

	alterarNome(novoNome: string) {
		this.nomeCorrentista = novoNome;

		console.log("Nome alterado para: ", novoNome);
	}

	depositar(valor: number) {
		this.saldo += valor;

		console.log(
			"Foi depositado um valor de : R$",
			valor,
			"\n Saldo atual : R$",
			this.saldo
		);
	}

	sacar(valor: number) {
		if (valor > this.saldo) {
			console.log("O valor de saque nao pode ser maior que o saldo atual");
			return;
		}

		this.saldo -= valor;

		console.log("Valor sacado de : R$", valor, "\n Saldo atual : R$", this.saldo);
	}
}

export class Calculadora {
	historico: String[] = [];

	adicao(num1: number, num2: number) {
		const resultado = num1 + num2;

		console.log(`Adição de ${num1} + ${num2} = ${resultado}`);

		this.adicionaHistorico(num1, num2, "+", resultado);
	}

	multiplicacao(num1: number, num2: number) {
		const resultado = num1 * num2;

		console.log(`Multiplicacao de ${num1} x ${num2} = ${resultado}`);

		this.adicionaHistorico(num1, num2, "*", resultado);
	}

	dividisao(num1: number, num2: number) {
		const resultado = num1 / num2;

		console.log(`Divisão de ${num1} x ${num2} = ${resultado}`);

		this.adicionaHistorico(num1, num2, "/", resultado);
	}

	subtracao(num1: number, num2: number) {
		const resultado = num1 - num2;

		console.log(`Subtracao de ${num1} - ${num2} = ${resultado}`);

		this.adicionaHistorico(num1, num2, "-", resultado);
	}

	adicionaHistorico(
		num1: number,
		num2: number,
		operacao: string,
		resultado: number
	) {
		this.historico.push(`${num1} ${operacao} ${num2} = ${resultado}`);
	}

	mostraHistorico() {
		console.log(this.historico);
	}
}

export class BombaCombustivel {
	tipoCombustivel: string = "Gasolina";
	valorLitro: number = 4.5;
	quantidadeCombustivel: number = 20;

	abastecerPorValor(valor: number) {
		const litros = valor / this.valorLitro;

		if (this.quantidadeCombustivel < litros) {
			console.log("Quantidade insuficiente de combustivel para esse valor");
			return;
		}

		this.quantidadeCombustivel -= litros;

		console.log(`Foram abastecidos ${litros}`);
	}

	abastecerPorLitro(litros: number) {
		const valor = litros * this.valorLitro;

		if (this.quantidadeCombustivel < litros) {
			console.log("Quantidade insuficiente de combustivel para esse valor");
			return;
		}

		this.quantidadeCombustivel -= litros;

		console.log("Valor a ser pago: R$", valor);
	}

	alterarValor(valor: number) {
		this.valorLitro = valor;

		console.log("Valor do combustivel alterado para:  R$", valor);
	}

	alterarCombustivel(combustivel: string) {
		this.tipoCombustivel = combustivel;

		console.log("Combustivel alterado para : ", combustivel);
	}

	alterarQuantidadeCombustivel(valor: number) {
		this.quantidadeCombustivel = valor;

		console.log("Quantidade em Litros de combustivel :", valor);
	}
}

export class Carro {
	consumoCombustivel: number = 0;
	combustivelTanque: number = 20;

	constructor(consumo: number) {
		this.consumoCombustivel = consumo;
	}

	andar(distancia: number) {
		const consumoTotal = distancia * this.consumoCombustivel;

		if (this.combustivelTanque < consumoTotal) {
			console.log("Combustivel insuficiente");
			return;
		}

		this.combustivelTanque -= consumoTotal;
	}

	obterCombustivel() {
		console.log(this.combustivelTanque);
	}

	adicionarGasolina(quantidade: number) {
		this.combustivelTanque += quantidade;
	}
}
