interface Desconto {
	aplicarDescontoEmPorcentagem(desconto: number): void;

	recuperarValorTotal(): number;
}

interface ValorPedido {
	aplicarDescontoEmReais(desconto: number): void;
	removeItem(item: string): void;
}

class Pedido implements ValorPedido {
	aplicarDescontoEmReais(desconto: number): void {
		throw new Error("Method not implemented.");
	}
	removeItem(item: string): void {
		throw new Error("Method not implemented.");
	}

	itens: ItemPedido[] = [];

	valores = this.itens.map((item) => item.valor);

	valor = this.valores.reduce((prev, curr) => prev + curr, 0);

	add(item: ItemPedido): void {
		this.itens.push(item);
	}

	recuperarValorTotal(): number {
		let total = this.itens
			.map((i) => i.recuperarValorTotal())
			.reduce((sum, v) => sum + v, 0);

		return total;
	}

	aplicarDescontoEmPorcentagem(desconto: number): void {
		const porcentagem = desconto / 100;
		const descontoEmReais = this.valor * porcentagem;
		this.valor -= descontoEmReais;
	}
}

class ItemPedido implements ValorPedido, Desconto {
	valor: number;
	nome: string;
	quantidade: number;

	constructor(valor: number, nome: string, quantidade: number) {
		this.valor = valor;
		this.nome = nome;
		this.quantidade = quantidade;
	}

	removeItem(item: string): void {
		throw new Error("Method not implemented.");
	}

	recuperarValorTotal(): number {
		return this.valor * this.quantidade;
	}

	aplicarDescontoEmReais(desconto: number): void {
		this.valor -= desconto;
	}

	aplicarDescontoEmPorcentagem(desconto: number): void {
		const porcentagem = desconto / 100;
		const descontoEmReais = this.valor * porcentagem;
		this.valor -= descontoEmReais;
	}
}
