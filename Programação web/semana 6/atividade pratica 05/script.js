/*
Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo.

let contador = 0;
let somaIdades = 0;
let numAlunos = 0;

while (contador == 0) {
  let idade = Number(prompt("Digite uma idade"));
  if (idade !== 999) {
    somaIdades += idade;
    numAlunos += 1;
  } else {
    contador = 1;
  }
}
console.log("O total de alunos é: ", numAlunos);
console.log(`A média de idade da turma é ${somaIdades / numAlunos} `);

*/

/*
2. Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.


let funcionario;

let totalSalarioFem = 0;
let totalSalarioMasc = 0;
let continuar = true;

do {
  let salario = Number(prompt("Digite o Salário"));
  let sexo = prompt("Digite o Sexo:  F | M");

  if (sexo === "F" || sexo === "f") {
    totalSalarioFem += salario;
  }

  if (sexo === "M" || sexo === "m") {
    totalSalarioMasc += salario;
  }

  funcionario = 0 + 1;

  let prosseguir = prompt("Deseja prosseguir? S | N");

  if (prosseguir === "N" || prosseguir === "n") {
    continuar = false;
  }
} while (continuar);

console.log(`O total de funcionários é ${funcionario}`);
console.log(`O total de Salário pago as Mulheres é ${totalSalarioFem}`);
console.log(`O total de Salário pago aos Homens é ${totalSalarioMasc}`);

*/

/*
Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!

let valorInicial = Number(prompt("Digite o primeiro Valor"));
let valorFinal = Number(prompt("Digite o  último Valor "));
let incremento = Number(prompt("Digite o incremento "));
let str = " ";

for (
  let contador = valorInicial;
  contador < valorFinal;
  contador += incremento
) {
  str += contador + ",";
}

console.log(`Contagem: ${str} Acabou!`);

*/
