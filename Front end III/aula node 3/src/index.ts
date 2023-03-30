import estoque from "./database";
import criarProduto from "./features/produtos/criar-produto";
import { Produto } from "./types";

const mouse : Produto = {
    id: '123245',
    nome: 'Mouse',
    preco: 100,
    categoria: {
        nome: 'Periféricos',
        tags:['NOVOS']
    },
    quantidade: 23,
    genero: "ELETRONICOS",
}

const teclado : Produto = {
    id: '123245',
    nome: 'Teclado',
    preco: 99,
    categoria: {
        nome: 'Periféricos',
        tags:['NOVOS', "BLACKFRIDAY"]
    },
    quantidade: 12,
    genero: "ELETRONICOS",
}

const monitor : Produto = {
    id: '123245',
    nome: 'Monitor',
    preco: 200,
    categoria: {
        nome: 'Periféricos',
        tags:['NOVOS', "BLACKFRIDAY"]
    },
    quantidade: 30,
    genero: "ELETRONICOS",
}


criarProduto(mouse)
criarProduto(teclado)
criarProduto(monitor)

console.log(estoque)