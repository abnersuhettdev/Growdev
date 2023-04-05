import { criarProduto, deleteProduct, editProduct } from './features/products';
import { Produto } from './types';
import listaProdutos from './database';

const teclado: Produto = {
	id: '1234567',
	nome: 'Teclado Red Dragon',
	preco: 189.9,
	categoria: {
		nome: 'Periféricos',
		tags: ['NOVOS'],
	},
	quantidade: 23,
	genero: 'ELETRONICOS',
};

const monitor: Produto = {
	id: '123456789',
	nome: 'Monitor Acer',
	preco: 500.0,
	categoria: {
		nome: 'Periféricos',
		tags: ['USADOS'],
	},
	quantidade: 3,
	genero: 'GAMER',
};

const mouse: Produto = {
	id: '123',
	nome: 'Mouse Logitech',
	preco: 70.0,
	categoria: {
		nome: 'Periféricos',
		tags: ['BLACKFRIDAY'],
	},
	quantidade: 40,
	genero: 'GAMER',
};

criarProduto(teclado);
criarProduto(mouse);
criarProduto(monitor);

// console.log(deleteProduct('123'))
console.log(editProduct('123', 'Rato Logitech', 100, 20 ))
// console.log(listaProdutos);
