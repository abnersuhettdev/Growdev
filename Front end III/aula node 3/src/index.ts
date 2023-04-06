import {
	createProduct,
	deleteProduct,
	editProduct,
	listByPrice,
	listByTag,
	listProducts,
	listByCategory,
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
  
  createProduct(teclado);
  createProduct(mouse);
  createProduct(jogo);
  editProduct("123", "Rato Logitech", 100, 20);
  // listByCategory({
  //   nome: "Jogos",
  // });
  // console.log(listByPrice(50, 200));
  console.log(listByTag("NOVOS"));
  // listProducts();
  addTag('123', 'NOVOS')
  