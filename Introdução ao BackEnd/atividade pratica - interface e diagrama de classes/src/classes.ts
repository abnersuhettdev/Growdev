export class Item {
	valor: number;
	nome: string;
	descricao: string;

	constructor(valor: number, nome: string, descricao: string) {
		this.valor = valor;
		this.nome = nome;
		this.descricao = descricao;
	}
}

export class Pedido {
	itens: Item[] = [];
	valorTotal: number = 0;
}

interface FormatoDeElemento {
	desenhar(): void;
	redimensionar(): void;
}

export class Circulo implements FormatoDeElemento {
	raio: number;

	constructor(raio: number) {
		this.raio = raio;
	}

	desenhar(): void {
		console.log("Circulo Desenhado");
	}
	redimensionar(): void {
		console.log("Redimensionar ", this.raio);
	}
}

export class Retangulo implements FormatoDeElemento {
	comprimento: number;
	altura: number;

	constructor(comp: number, alt: number) {
		this.comprimento = comp;
		this.altura = alt;
	}

	desenhar(): void {
		console.log("Desenhando Retangulo");
	}
	redimensionar(): void {
		console.log("Redimensionar ", this.altura, " ", this.comprimento);
	}
}
