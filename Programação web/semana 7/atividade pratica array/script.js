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

/*
4- Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
retorne a união dos dois em um novo vetor.
*/
function ex4() {
  let vet1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let vet2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  function unirArrays(v1, v2) {
    let uniao = [v1 + "," + v2];
    return uniao;
  }

  console.log(unirArrays(vet1, vet2));
}

/*
5. Crie uma função que recebe um vetor de inteiros e um número
inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
se não faz parte.
*/

function ex5() {
  let vetInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function isInArray(arr, n) {
    if (arr.indexOf(n) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isInArray(vetInteiros, 11));
}

/*
6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.
*/

function ex6() {
  let nomes = [];
  do {
    let nome = prompt("Digite um nome:");
    nomes.push(nome);
  } while (nomes.length < 5);

  console.log("Entrada: ", nomes);
  console.log("Saída: ", nomes.reverse());
}
