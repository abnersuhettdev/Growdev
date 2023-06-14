import { randomUUID } from "crypto";

export class Arquivo {
	id: string;
	tipo: string;

	constructor(tipo: string) {
		this.id = randomUUID();
		this.tipo = tipo;
	}
}

export class Caixa {
	id: string;
	arquivos: Arquivo[] = [];

	constructor() {
		this.id = randomUUID();
	}

	adicionarArquivo(novoArquivo: Arquivo) {
		this.arquivos.push(novoArquivo);
	}

	visualizarArquivos() {
		console.log(this.arquivos);
	}
}

export class Estante {
	prateleiras: Record<number, Caixa[]>;

	constructor(numPrateleiras: number) {
		this.prateleiras = {};

		for (let index = 0; index < numPrateleiras; index++) {
			this.prateleiras[index] = [];
		}
	}

	adicionarCaixa(caixa: Caixa, numPrateleira: number) {
		this.prateleiras[numPrateleira].push(caixa);
	}

	visualizarPrateleiras() {
		console.table(this.prateleiras);
	}

	visualizarUmaPrateleira(numPrateleira: number) {
		console.table(this.prateleiras[numPrateleira]);
	}

	resgatarCaixa(idCaixa: string) {
		const matriz = Object.values(this.prateleiras);

		for (let index = 0; index < matriz.length; index++) {
			const caixa = matriz[index].find((caixa) => caixa.id === idCaixa);

			if (caixa) {
				console.table(caixa);
				return caixa;
			}
		}
		console.log("Caixa não encontrada");
	}
}
