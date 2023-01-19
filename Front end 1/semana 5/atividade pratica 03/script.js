/*
 1. Desenvolva um algoritmo que faça o cálculo do índice de massa corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.

--variaveis
    altura
    peso
    status

--passos

   if (imc < 18.5) {
  status = "Você está abaixo da faixa de peso ideal";
} else if (imc >= 18.5 && imc <= 24.99) {
  status = "Você está dentro da faixa de peso ideal";
} else {
  status = "Você está acima da faixa de peso ideal";
}

*/

const peso = 72;
const altura = 1.7;
let frase;
const imc = peso / (altura * altura);

if (imc < 18.5) {
  frase = "Você está abaixo da faixa de peso ideal";
} else if (imc >= 18.5 && imc <= 24.99) {
  frase = "Você está dentro da faixa de peso ideal";
} else {
  frase = "Você está acima da faixa de peso ideal";
}

console.log("Exercicio 1:");
console.log(imc);
console.log(frase);
console.log("-------------------------");

/*
 2. Escreva um algoritmo que solicite 2 números e uma operação matemática. O algoritmo deve realizar o cálculo com os 2 números digitados conforme a operação informada.

 --variaveis
 num1
 num2

 --passos
 operacao

*/

let num1 = 2;
let num2 = 3;
let operacao = "*";

if (operacao == "+") {
  operacao = num1 + num2;
} else if (operacao == "-") {
  operacao = num1 - num2;
} else if (operacao == "*") {
  operacao = num1 * num2;
} else if (operacao == "/") {
  operacao = num1 / num2;
} else {
  console.log("Operação inválida");
}

console.log("Exercicio 2:");
console.log(operacao);
console.log("-------------------------");

/*
3. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. O
usuário precisa informar a quantidade de dinheiro que deseja
retirar, esse valor deve ser um número positivo, múltiplo de 5 e
menor do que o saldo. Cada saque eletrônico cobra uma taxa de
R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
certo com o saque, e se o usuário informar um valor maior que o saldo deve ser informado ao usuário que o mesmo não tem dinheiro
suficiente em conta para realizar o saque.
OBS: Na verificação se o valor do saque é maior que o saldo deve
ser considerado e também contabilizado o valor da taxa a ser
cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
da taxa do saque não pode ser maior que o saldo disponível.


--variaveis
saldoConta
valorSaque = 50
-- deve ser um num positivo,
multiplo de 5 e menor que o saldo
taxaSaque = 4.50


-passos

if (
  valorSaque > 0 &&
  (valorSaque % 5 == 0 ||
    valorSaque % 5 == 1 ||
    valorSaque % 5 == 0.5 ) &&
  valorSaque + taxaSaque <= saldoConta
) {
  valorSaque += taxaSaque;
  saldoConta = saldoConta - valorSaque;
  console.log("O seu Saldo atual é de:" ,saldoConta);
} else if (valorSaque %5 !== 0 ){
  console.log("Valor do saque indisponível, tente um número múltiplo de 5");
}


*/

let saldoConta = 1500;
const taxaSaque = 4.5;
let valorSaque = 100;

console.log("Exercício 3 : ");
if (
  valorSaque > 0 &&
  (valorSaque % 5 == 0 || valorSaque % 5 == 0.5) &&
  valorSaque + taxaSaque <= saldoConta
) {
  valorSaque += taxaSaque;
  saldoConta = saldoConta - valorSaque;
  console.log("O seu saldo atual é de:", saldoConta);
} else if (valorSaque % 5 !== 0) {
  console.log("Valor do saque indisponível, tente um número múltiplo de 5");
} else {
  console.log("Saldo Insuficiente");
}
console.log("------------------");

/*
 4. Faça um algoritmo que leia a idade e peso de um atleta e imprima a sua categoria, de acordo com a seguinte tabela:

Idade Peso Categoria
Até 12 anos - Infantil
13 a 16 anos Até 40kg Juvenil leve
Acima de 40kg Juvenil pesado
17 a 24 anos Até 45kg Sênior leve
Acima de 45kg até 60kg Sênior médio
Acima de 60kg Sênior pesado
Acima de 24 anos - Veterano


--variaveis
idade
peso
categoria

--passos

if(idade <= 12){
    categoria = "Infantil"
} else if(idade <= 16){
    if(peso <= 40){
        categoria = "Juvenil Leve"
    } else{
        categoria = "Juvenil Pleno"
    }
} else if(idade <= 24){
    if(peso <= 45){
        categoria = "Senior Leve"
    } else if(peso <= 60){
        categoria = "Senior Médio "
    } else {
        categoria = "Senior Pesado"
    }
} else {
    categoria = "Veterano"
}

*/

let age = 21;
let weight = 61;
let categoria;

if (age <= 12) {
  categoria = "Infantil";
} else if (age <= 16) {
  if (weight <= 40) {
    categoria = "Juvenil Leve";
  } else {
    categoria = "Juvenil Pleno";
  }
} else if (age <= 24) {
  if (weight <= 45) {
    categoria = "Senior Leve";
  } else if (weight <= 60) {
    categoria = "Senior Médio ";
  } else {
    categoria = "Senior Pesado";
  }
} else {
  categoria = "Veterano";
}

console.log("Exercício 4:");
console.log("Categoria: ",categoria);
console.log("--------------------");

/*
5-  Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada km acima da velocidade permitida.

    --variaveis
    velocidadeCarro 
    limiteVelocidade = 80


    valorMulta =(velocidadeCarro - limiteVelocidade) * 5

    --passos
    if (velocidadeCarro > limiteVelocidade) {
  valorMulta = (velocidadeCarro - limiteVelocidade) * 5;
  console.log("O valor da multa é de ", valorMulta);
} else {
  console.log("Você não foi Multado");
}

 */

let velocidadeCarro = 150;
const limiteVelocidade = 80;
let valorMulta;

console.log("Exercício 5:");
if (velocidadeCarro > limiteVelocidade) {
  valorMulta = (velocidadeCarro - limiteVelocidade) * 5;
  console.log("O valor da multa é de ", valorMulta);
} else {
  console.log("Você não foi Multado");
}
console.log("--------------------");
