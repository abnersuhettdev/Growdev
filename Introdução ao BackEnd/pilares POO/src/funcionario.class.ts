abstract class Funcionario {
	private nome: string;
	private _cpf: string;
	protected salario: number;

	constructor(nome: string, cpf: string, salario: number) {
		this.nome = nome;
		this._cpf = cpf;
		this.salario = salario;
	}

	receberBonificacao(valor: number) {
		this.salario += valor;
	}

	//getters
	//Nossa forma
	protected getNome(): string {
		return this.nome;
	}

	//setters

	protected setNome(novoNome: string): void {
		this.nome = novoNome;
	}

	//getter Typescript

	protected get cpf(): string {
		return this._cpf;
	}

	//setters Typescript

	protected set cpf(novoCpf: string) {
		this._cpf = novoCpf;
	}
}

export default Funcionario;
