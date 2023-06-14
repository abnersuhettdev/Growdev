import { Arquivo, Caixa, Estante } from "./atividade4";
import { Circulo, Item, Pedido, Retangulo } from "./classes";

/// Atividade 1

const pedido = new Pedido();

const item1 = new Item(100, "Cadeira", "Movel para sala");
const item2 = new Item(200, "Mesa", "Movel para cozinha");

pedido.itens.push(item1);
pedido.itens.push(item2);

pedido.valorTotal = pedido.itens.reduce((acc, item) => acc + item.valor, 0);

console.log(pedido);

// Atividade 2

const circulo = new Circulo(2.5);
const retangulo = new Retangulo(5, 2);

circulo.desenhar();
circulo.redimensionar();

retangulo.desenhar();
retangulo.redimensionar();

// Atividade 4
const arquivo1 = new Arquivo("CTE");

const caixa1 = new Caixa();

const estante1 = new Estante(5);

caixa1.adicionarArquivo(arquivo1);
caixa1.visualizarArquivos();

estante1.adicionarCaixa(caixa1, 1);

estante1.visualizarPrateleiras();
estante1.visualizarUmaPrateleira(1);
estante1.resgatarCaixa(caixa1.id);
