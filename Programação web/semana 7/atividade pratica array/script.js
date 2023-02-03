/* 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.
*/

function ex1() {
  let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (element % 2 === 0) {
      console.log(`O número: ${element} é par`);
    }
  }
}

/* 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos. */

function ex2() {
  let elements = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let total = 0;

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    total += element;
  }

  console.log(total);
}

/*
3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.
*/

function ex3() {
  let vetor = [];
  for (let index = 1; vetor.length < 4; index++) {
    let divisor = 0;
    for (let i = 1; i < index; i++) {
      if (index % i === 0) {
        divisor += i;
      }
    }
    if (divisor === index) {
      vetor.push(divisor);
    }
  }

  console.log(vetor);
}

ex3();

