// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”

/*
let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir");
} 
*/

// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

// let idade = Number(prompt("Digite sua idade:"));
// let cnh = prompt("Possui CNH? S | N");

// if (idade >= 18 && cnh.toUpperCase() == "S") {
//     document.write("Pode dirigir!");
// } else {
//     document.write("Não pode dirigir");
// }

// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.
// const numDia = Number(prompt("Digite um valor: "));

// if (numDia == 1) {
//     console.log("Domingo");
// } else if (numDia == 2) {
//     console.log("Segunda");
// } else if (numDia == 3) {
//     console.log("Terça");
// } else if (numDia == 4) {
//     console.log("Quarta");
// } else if (numDia == 5) {
//     console.log("Quinta");
// } else if (numDia == 6) {
//     console.log("Sexta");
// } else if (numDia == 7) {
//     console.log("Sábado");
// } else {
//     console.log("Não é um dia da Semana");
// }

// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

// const numDia = Number(prompt("Digite um valor: "));

// switch (numDia) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda");
//         break;
//     case 3:
//         console.log("Terça");
//         break;
//     case 4:
//         console.log("Quarta");
//         break;
//     case 5:
//         console.log("Quinta");
//         break;
//     case 6:
//         console.log("Sexta");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Não é um dia da Semana");
// }

// 5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
// os números pares.

// for (let contador = 1; contador <= 10; contador++) {
//     if (contador % 2 == 0) {
//         console.log(contador);
//     }
// }

// 6. Insira no html 30 ( trinta ) números ímpares.

/*
let trinta = true;
let contador = 0; //contador infinito
let impar = 0; //qtd de numeros impares

while (trinta) {
    if (contador % 2 != 0) {
        impar++;
        document.write(` ${contador},`);
    }
    contador++;

    if (impar == 30) {
        trinta = false;
    }
}
*/
/*
7. Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100.*/

// let contador = 10;
// let soma = 0;

// do {
//     soma += contador;
//     contador++;
// } while (contador <= 100);
// document.write(soma);

/*8. Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
- Caso o salário seja MENOR que R$ 1.903,98, insira no html
"ISENTO DE IR";
- caso contrário insira "TRIBUTADO NO IR".*/

// let salario = 1903.98;
// if (salario < 1903.98) {
//     document.write("ISENTO DE IR");
// } else {
//     document.write("TRIBUTADO NO IR");
// }

/*9. Informe um valor a uma variável e imprima no console se o número
é primo.
let valor = Number(prompt("insira um valor inteiro e positivo"));

let primo = true;

for (let i = 2; i < valor; i++){
    if (valor % i == 0 && valor != 1) {
        primo = false;
        break;
    }
if (primo) {
    console.log(`O ${valor} é primo`);
} else {
    if(valor = 1 ){
        console.log('1 não é primo')
    }
    console.log(`O ${valor} não é primo`);
}
}

*/

/*
10. Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7
 
let altura = Number(prompt("Digite a altura"));
let s = Number(
  prompt("Digite: 1 Pra sexo feminino OU Digite: 2 para sexo masculino")
);
let pesoIdeal;
 
if (s != 1 && s != 2) {
  alert("Digite a informação corretamente");
} else if (s == 1) {
  pesoIdeal = 72.7 * altura - 58;
  alert(`Seu peso ideal é de ${pesoIdeal.toFixed(2)}`);
} else {
  pesoIdeal = 62.1 * altura - 44.77;
  alert(`Seu ideal é de ${pesoIdeal.toFixed(2)}`);
}
 
*/

/*
11. Utilizando Switch, faça um programa que pergunte em que turno
você estuda. Peça para digitar “M” para matutino ou “V” para
vespertino ou “N” para noturno. Mostre um alerta com a mensagem
“Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
conforme o caso.
 
let turno = prompt(
  "Em que turno você estuda? Digite : M para Matutino,  V para Vespertino ou N para Noturno"
);
 
switch (turno.toUpperCase()) {
  case "M":
    alert("Bom dia!");
    break;
  case "V":
    alert("Boa Tarde!");
    break;
  case "N":
    alert("Boa Noite!");
    break;
  default:
    alert(`${turno} Não é um turno válido`);
}
 
*/

/*
12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
programa que armazene a idade de uma pessoa e diga se ela pode
doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
(&&).
 
let idade = Number(prompt("Digite sua idade"));
 
if (idade >= 18 && idade <= 67) {
  alert("Você pode doar sangue!");
} else {
    alert("Você não pode doar sangue")
}
*/

/*
13. Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado.
 
let num = 13;
 
for (contador = 0; contador <= num; contador++) {
  if (contador % 2 != 0) {
    let numImpar = contador;
    console.log(numImpar);
  }
}
 
*/

/*
 14. Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor
 
let num = 10;
 
let soma = 0;
 
while (soma < 500) {
  soma += num * 3;
}
 
console.log(`Ultimo valor: ${soma}`);
 
*/

/*
15. Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C);
 
let a = 5,
  b = 7,
  c = 10;
 
if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c && c === a) {
    console.log("Triangulo Equilátero");
  } else if (a != b && b != c && a != c) {
    console.log("Triangulo Escaleno");
  } else if (a === b || a === c || b === c) {
    console.log("Triangulo Isósceles");
  }
} else {
  console.log("Não é um Triângulo");
}
*/

/*
16. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
 
let anoAtual = 2023;
let anoNascimento = 2001;
 
if (anoAtual - anoNascimento >= 16) {
  console.log("Você pode votar");
} else {
  console.log("Você ainda não pode votar");
}
 
*/

/*
17. Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.
*/

let votosBrancos = 2000,
  votosNulos = 800,
  votosValidos = 10000;

let totalEleitores = votosBrancos + votosNulos + votosValidos;
console.log(`Total de Eleitores: ${totalEleitores}`);
console.log(`Votos Brancos: ${(votosBrancos / totalEleitores) * 100}%`);
console.log(`Votos Nulos: ${(votosNulos / totalEleitores) * 100}%`);
console.log(`Votos Válidos: ${(votosValidos / totalEleitores) * 100}%`);

/*
18. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:
 
Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console.
*/
