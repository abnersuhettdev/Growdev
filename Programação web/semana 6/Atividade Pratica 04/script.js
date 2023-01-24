/*
    1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;

*/

const alturas = [
  1.73, 1.63, 1.84, 1.55, 1.63, 1.82, 1.67, 1.76, 1.68, 1.91, 1.82, 1.71, 1.54,
  1.65, 1.92,
];

let i = 0;
let maiorAltura = alturas[i];
let menorAltura = alturas[i];

while (i < alturas.length) {
  if (alturas[i] > maiorAltura) {
    maiorAltura = alturas[i];
  } else if (alturas[i] < menorAltura) {
    menorAltura = alturas[i];
  } else {
    i++;
  }
}
console.log("Exercicio 1:");
console.log("Maior Altura: ", maiorAltura);
console.log("Menor Altura:  ", menorAltura);
console.log("------------------------------");
/* 
2- Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão necessários para que:

a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/
let alturaPedro = 1.5;
let alturaLucas = 1.1;
let anos = 0;

while (alturaLucas.toFixed(2) < alturaPedro.toFixed(2)) {
  alturaLucas += 0.03;
  alturaPedro += 0.02;
  anos++;
}

console.log("Exercicio 2:");

console.log(`Demorou ${anos} anos para Lucas ter a mesma altura de Pedro.`);

anos = anos + 1;

console.log(`Demorou ${anos} anos para Lucas ser maior que Pedro.`);

console.log("------------------------------");

/*
3. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
...
 */

let resultado = 0;
const numero = 5;
const iterador = 11;
let contador = 0;

console.log("Exercicio 3:");
while (contador < iterador) {
  contador++;
  resultado = contador * numero;
  console.log(`${numero} * ${contador} = ${resultado}`);
}
console.log("------------------------------");

/*
4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.
*/

let multiplo3 = []; // % 3 = 0
let multiplo5 = []; // % 5 = 0
let count = 0;

while (count < 250) {
  count++;

  if (count % 3 == 0) {
    multiplo3.push(count);
  }

  if (count % 5 == 0) {
    multiplo5.push(count);
  }
}

console.log("Exercicio 4:");
console.log("Multiplos de 3: ", multiplo3);
console.log("Multiplos de 5: ", multiplo5);
console.log("------------------------------");

/*
5. Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
*/

let valorDigitado = 9;
let valor = "";

for (let contador = 0; contador <= valorDigitado; contador++) {
  valor = valor + contador + ", ";
}
console.log("Exercicio 5:");
console.log(`Contagem: ${valor} Fim!`);
console.log("------------------------------");

/*
6. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...
*/

let contagem;

console.log("Exercicio 6:");

for (let index = 30; index >= 1; index--) {
  for (let isPrimo = 30; isPrimo >= 1; isPrimo--) {
    if (index % isPrimo === 0) {
      contagem++;
    }
  }
  if (contagem == 2) {
    console.log(`[${index}]`);
  } else {
    console.log(index);
    contagem = 0;
  }
}

console.log("------------------------------");

/* 
Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.
*/

let tenNumbers = [7.6, 8, -6.2, 9.2, 9, 7.8, 5.4, 6, -5, -8];
let media,
  soma = 0,
  cont = 0,
  numPositivo = 0,
  numNegativo = 0,
  percentPostv,
  percentNegtv;

console.log("Exercicio 7:");

for (let e of tenNumbers) {
  soma = soma + e;
  cont++;

  if (e > 0) {
    numPositivo++;
  } else {
    numNegativo++;
  }
}

media = (soma / cont).toFixed(2);

percentPostv = ((numPositivo / cont) * 100).toFixed(2);

percentNegtv = ((numNegativo / cont) * 100).toFixed(2);

console.log(`Conjunto de Valores :${tenNumbers}`);
console.log(`Média: ${media}`);

console.log(`Quantidade de valores positivos ${numPositivo}`);
console.log(`Quantidade de valores Negativos ${numNegativo}`);

console.log(`Percentual de valores positivos ${percentPostv}`);
console.log(`Percentual de valores negativos ${percentNegtv}`);
