import {
	Bola,
	BombaCombustivel,
	Calculadora,
	Carro,
	ContaCorrente,
	Contador,
} from "./classes";

const contador = new Contador(1);

// contador.zerar();
// contador.incrementar();
// contador.retornarContador();

const bola = new Bola("Azul", 2.5, "plastico");
//
// bola.mostraCor();
// bola.trocarCor("Amarelo");
// bola.mostraCor();

const contaCorrente = new ContaCorrente(2502, "Luan");

// contaCorrente.alterarNome("José Silva");
// contaCorrente.depositar(20);
// contaCorrente.sacar(23);
// contaCorrente.sacar(10);

const calculadora = new Calculadora();

// calculadora.adicao(1, 1);
// calculadora.dividisao(6, 2);
// calculadora.multiplicacao(3, 5);
// calculadora.subtracao(3, 2);
// calculadora.mostraHistorico();

const bombaCombustivel = new BombaCombustivel();

// bombaCombustivel.abastecerPorLitro(20);
// bombaCombustivel.abastecerPorValor(10);
// bombaCombustivel.alterarCombustivel("Alcool");
// bombaCombustivel.alterarQuantidadeCombustivel(10000);
// bombaCombustivel.alterarValor(3.9);
// bombaCombustivel.abastecerPorLitro(10);

const carro = new Carro(0.1);

carro.andar(10);
carro.obterCombustivel();
carro.adicionarGasolina(20);
carro.andar(500);
