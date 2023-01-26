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

// let trinta = true;
// let contador = 0; //contador infinito
// let impar = 0; //qtd de numeros impares

// while (trinta) {
//     if (contador % 2 != 0) {
//         impar++;
//         document.write(` ${contador},`);
//     }
//     contador++;

//     if (impar == 30) {
//         trinta = false;
//     }
// }

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
    if (valor % i == 0) {
        primo = false;
        break;
    }
if (primo) {
    console.log(`O ${valor} é primo`);
} else {
    console.log(`O ${valor} não é primo`);
}
}

*/
