import Funcionario from "./funcionario.class";

//INTERFACE- Protótipo de acoes possiveis e que serao implementadas na classe
interface GerenteComercial {
	receberAdicional: () => void;
	atualizarDados: (novoNome: string, novoCpf: string) => void;
	mostrarDados: () => void;
}

//Herança
class Gerente extends Funcionario implements GerenteComercial {
	adicionalSalario: number;

	constructor(
		adicionalSalario: number,
		nomeGerente: string,
		cpfGerente: string,
		salarioGerente: number
	) {
		//super dá o start no construtor da classe Pai
		super(nomeGerente, cpfGerente, salarioGerente);
		this.adicionalSalario = adicionalSalario;
	}

	receberBonificacao(valor: number): void {
		if (valor > 500) {
			const totalPerc = this.salario * 0.1;

			this.salario += valor + totalPerc;
		} else {
			this.salario += valor;
		}
	}

	receberAdicional() {}

	atualizarDados(novoNome: string, novoCpf: string) {
		this.setNome(novoNome);
		this.cpf = novoCpf;
	}

	mostrarDados() {
		console.log(this.getNome);
		console.log(this.cpf);
	}
}

export default Gerente;
