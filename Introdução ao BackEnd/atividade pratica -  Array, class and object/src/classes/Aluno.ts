import ContratoAluno from "../contratos/contratoAluno";

class Aluno implements ContratoAluno {
	private _nome: string;
	private _idade: number;
	private _nota: number;
	private _status: "aprovado" | "reprovado" | undefined;
	private _respostas: string[];

	constructor(nome: string, idade: number) {
		this._nome = nome;
		this._idade = idade;
		this._nota = 0;
		this._status = undefined;
		this._respostas = [];
	}

	realizarProva() {
		const opcoes = ["A", "B", "C"];

		for (let i = 1; i <= 10; i++) {
			let indice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
			const resposta = opcoes[indice];
			this._respostas.push(resposta);
		}
	}

	calcularNota(gabarito: string[]) {
		if (this._respostas.length < 10) {
			console.log("O aluno não respondeu todas as questões");
			return;
		}

		for (let i = 0; i <= gabarito.length; i++) {
			if (gabarito[i] === this._respostas[i]) {
				this._nota += 1;
			}
		}
	}

	aprovarOuReprovar() {
		if (this._respostas.length < 10) {
			console.log("o aluno precisa fazer a prova");
			return;
		}

		if (this._nota >= 6) {
			this._status = "aprovado";
			return;
		} else {
			this._status = "reprovado";
		}
	}

	public get nome(): string {
		return this._nome;
	}

	public get nota(): number {
		return this._nota;
	}

	public get respostas(): string[] {
		return this._respostas;
	}

	public get status() {
		return this._status;
	}
}

export default Aluno;
