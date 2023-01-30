/*
1- Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo.
*/

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
document.write("<h2>Exercício 1:</h2>");
document.write(`<p> O total de alunos é: ${numAlunos} </p>`);
document.write(`A média de idade da turma é ${somaIdades / numAlunos} `);

/*
2. Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

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
document.write("<h2>Exercicio 2:</h2>");
document.write(`<p>O total de funcionários é ${funcionario}</p>`);
document.write(
  `<p>O total de Salário pago as Mulheres é ${totalSalarioFem}</p>`
);
document.write(
  `<p>O total de Salário pago aos Homens é ${totalSalarioMasc}</p>`
);

/*
3.Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!
*/

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
document.write("<h2>Exercício 3:</h2>");
document.write(`Contagem: ${str} Acabou!`);

/*
4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto
b. Mulheres ganham 13% de desconto
*/

let nome = prompt("Digite o nome");
let s = prompt("Digite o sexo F | M");
let valorCompras = Number(prompt("Digite o Valor total das compras"));
let precoDesconto;

document.write("<h2> Exercicio 4: </h2>");
if (s === "f" || s === "F") {
  precoDesconto = valorCompras * (13 / 100);
  let valorFinal = valorCompras - precoDesconto;
  document.write("Valor com desconto ", valorFinal.toFixed(2));
} else {
  precoDesconto = valorCompras * (05 / 100);
  valorFinal = valorCompras - precoDesconto;
  document.write("Valor com desconto ", valorFinal.toFixed(2));
}

/*
5. Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas.
*/

let passagem = 0;
let cont = 0;
let numKM = Number(prompt("Quantos KM deseja percorrer?"));
while (cont <= numKM) {
  if (numKM <= 200) {
    passagem = cont * 0.5;
  } else {
    passagem = cont * 0.45;
  }
  cont++;
}
document.write("<h2>Exercício 5:</h2>");
document.write("O preço da Passagem é: ", passagem);

/*
6. Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP

*/
let largura = Number(prompt("Digite a largura do terreno"));
let comprimento = Number(prompt("Digite o comprimento do terreno"));
let area = largura * comprimento;

document.write("<h2>Exercicio 6: </h2>");
if (area < 100) {
  document.write(`A área do terreno é de ${area}m2</br>`);
  document.write(`CLASSIFICAÇÃO:TERRENO POPULAR>`);
} else if (area > 100 && area < 500) {
  document.write(`A área do terreno é de ${area}m2</br>`);
  document.write(`CLASSIFICAÇÃO:TERRENO MASTER`);
} else {
  document.write(`A área do terreno é de ${area}m2</br>`);
  document.write(`CLASSIFICAÇÃO:TERRENO VIP`);
}
