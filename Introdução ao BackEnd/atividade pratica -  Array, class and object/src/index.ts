import Pessoa from "./classes/pessoa";

//Atividade 1
const listaNumeros = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

const listaNumerosImpares = listaNumeros.filter((num) => num % 2 !== 0);
console.log("== Atividade 1 ==");
console.log(listaNumerosImpares);
console.log("==============");

//Atividade 2
const somaNumerosLista = listaNumeros.reduce((prev, curr) => prev + curr, 0);
console.log("== Atividade 2 ==");
console.log(somaNumerosLista);
console.log("==============");

//Atividade 3
const pessoa1 = new Pessoa("Roberto", 21, 1027);
const pessoa2 = new Pessoa("Mariana", 18, 1000);
const pessoa3 = new Pessoa("Lucas", 24, 999);
const pessoa4 = new Pessoa("Marcelo", 23, 3000);
const pessoa5 = new Pessoa("Marcelo", 33, 1027);
const pessoa6 = new Pessoa("Marcelo", 30, 1056);
const pessoa7 = new Pessoa("Marcelo", 27, 1300);

const listaPessoas = [
	pessoa1,
	pessoa2,
	pessoa3,
	pessoa4,
	pessoa5,
	pessoa6,
	pessoa7,
];

//Atividade 3
const pessoasSelecionadas = listaPessoas.filter((pessoa) => pessoa.idade < 23);
console.log("== Atividade 3 ==");
console.log(pessoasSelecionadas);
console.log("==============");

//Atividade 4
const pessoasMenorTrinta = listaPessoas.filter((pessoa) => pessoa.idade < 30);
const mediaPessoasMenorTrinta = pessoasMenorTrinta.reduce((prev, curr) => {
	return (prev + curr.idade) / pessoasMenorTrinta.length;
}, 0);

console.log("== Atividade 4 ==");
console.log(mediaPessoasMenorTrinta);
console.log("==============");

//Atividade 5

const filtraSalario = listaPessoas.filter((pessoa) => pessoa.salario < 1027);
const pessoasSalarioBaixo = filtraSalario.map((pessoa) => {
	return { nome: pessoa.nome, idade: pessoa.idade };
});

console.log("== Atividade 5 ==");
console.log(pessoasSalarioBaixo);
console.log("==============");
