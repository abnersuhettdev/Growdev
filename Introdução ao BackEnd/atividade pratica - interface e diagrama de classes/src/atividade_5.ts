interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void{
    throw 'Pegadinha do malandro!';
  }

  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }
}

class Pedido implements ValorPedido {
  aplicarDescontoEmReais(desconto: number): void {
    throw new Error("Method not implemented.");
  }
  removeItem(item: string): void {
    throw new Error("Method not implemented.");
  }
  itens: ItemPedido[] = [];

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

class ItemPedido extends ValorPedido, Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

 

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}
