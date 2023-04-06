import {
	criaProduto,
	deletaProduto,
	editaProduto,
	listaPorPreco,
	listaPorTag,
	listarProdutos,
	listaPorCategoria,
	addTag
  } from "./features/products";

  import { Produto } from "./types";
  import listaProdutos from "./database";

  
  const teclado: Produto = {
	id: "1234567",
	nome: "Teclado Red Dragon",
	preco: 189.9,
	categoria: {
	  nome: "Periféricos",
	  tags: ["NOVOS"],
	},
	quantidade: 23,
	genero: "ELETRONICOS",
  };
  
  const jogo: Produto = {
	id: "123456789",
	nome: "God of War",
	preco: 50.0,
	categoria: {
	  nome: "Jogos",
	  tags: ["NOVOS"],
	},
	quantidade: 3,
	genero: "GAMER",
  };
  
  const mouse: Produto = {
	id: "123",
	nome: "Mouse Logitech",
	preco: 70.0,
	categoria: {
	  nome: "Periféricos",
	  tags: ["BLACKFRIDAY"],
	},
	quantidade: 40,
	genero: "GAMER",
  };
  
  criaProduto(teclado);
  criaProduto(mouse);
  criaProduto(jogo);

  listarProdutos();

  editaProduto("123", "Rato Logitech", 100, 20);
  
  listaPorCategoria({nome: "Jogos"});

  console.log(listaPorPreco(50, 200));
  console.log(listaPorTag("NOVOS"));
  
  addTag('123', 'NOVOS')
  