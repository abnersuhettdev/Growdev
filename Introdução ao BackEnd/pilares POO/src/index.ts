import Gerente from "./gerente.class";
import Loja from "./loja.class";
import Produto from "./produtos.class";

const gerenteComercial = new Gerente(100, "Pedro", "111", 5000);
const gerenteFinanceiro = new Gerente(200, "Lucas", "222", 6000);

//COMPOSICAO - Uma classe depende da instancia de outras classes para ser construida
const lojaSete = new Loja(
	"Loja Sete",
	gerenteComercial,
	gerenteFinanceiro,
	new Date("2023-06-05")
);

const produtoCamisa = new Produto("1", "Camisa Preta", 50);
const produtoCalca = new Produto("2", "Calca Preta", 100);
const produtoTenis = new Produto("3", "Tenis Preto", 200);

lojaSete.adicionarProduto(produtoCamisa);
lojaSete.adicionarProdutos([produtoCalca, produtoTenis]);

const gerenteLoja1 = new Gerente(500, "João", "123.444.555-66", 5000);

gerenteLoja1.mostrarDados();
// gerenteLoja1.atualizarDados();
// gerenteLoja1.adicionalSalario();

//COMPOSICAO !== HERANCA
