/*
  1-   Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis.


    variaveis : 3
    aux = a
    a = 10
    b= 20

    escreva : os valores armazenados

    objetivo: inverter os valores

    receber o valor das variaveis
    depois receber o auxiliar
    depois entrar e verificar os valores entre elas e trocar


*/

let a = 80;
let b = 90;

document.write(
  `
  <h2> Exercicio 1 </h1>
  <p>O valor de A é : ${a} </p>
  <p>O valor de B é igual : ${b} </p>
  `
);

let aux;
aux = a;
a = b;
b = aux;

document.write(
  `
    <p>O valor da auxiliar é igual a: ${aux} </p>
    <p>O valor de a agora é igual a: ${a}  </p>
    <p>O valor de b agora é igual a: ${b}</p>
    <p>O valor da auxiliar agora é igual a: ${aux} </p>
    `
);

/*
2- Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.

    voto branco 
    nulo
    valido
    total de eleitores 

    Calcular
    percentual de validos = validos/total*100
    percentual de nulos = nulos/total*100
    percentual de brancos = brancos/total*100
    
    Escrever
    resultados

 */

let votoBranco = 5849;
let votoNulo = 4560;
let votoValido = 15500;

let totalEleitores = votoBranco + votoNulo + votoValido;

let xVotoBranco = ((votoBranco / totalEleitores) * 100).toFixed(2);
let xVotoNulo = ((votoNulo / totalEleitores) * 100).toFixed(2);
let xVotoValido = ((votoValido / totalEleitores) * 100).toFixed(2);

document.write(`<h2> Exercicio 2</h2>
        <p> O Percentual de Votos Validos é: ${xVotoValido}% </p>
        <p>
            O Percentual de Votos Brancos é de : ${xVotoBranco}%
        </p>
        <p>
            O Percentual de Votos Nulos é de : ${xVotoNulo}%
        </p>
`);

/* 
3- O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.


    custo de fabrica = 45000
    porcentagem distribuidor = 28%
    impostos = 45% 

    preco final = fabrica * ( 1 + 0.28 + 0.45)


    --passos

    Definir variaveis
    ler variaveis


*/

let custoFabrica = 45000;
let imposto = custoFabrica * 0.45;
let distribuidor = custoFabrica * 0.28;
let precoFinal = (distribuidor + imposto + custoFabrica).toFixed(2);

document.write(`
        <h2>Exercício 3</h2>
        <p>O imposto é: ${imposto}</p>
        <p>O custo de fábrica é: ${custoFabrica}</p>
        <p>O custo do distribuidor é: ${distribuidor}</p>
        <p>O preco direto ao consumidor é: ${precoFinal}</p>

`);

/*
4- Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, mais uma comissão também
fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.


--variaveis
    salariofixo = 2500
    comissaofixa += 500 por carro
    comissao = 5% de 100000
    carrosVendido = 10
    totalDeVendas = 100000


*/

const salarioFixo = 1500;
let comissaoFixa = 500;
let comissao = 0.05;
let carrosVendidos = 10;
let totalDeVendas = 200000;

let salarioFinal =
  carrosVendidos * comissaoFixa + totalDeVendas * comissao + salarioFixo;

document.write(`
    <h2>Exercicio 4 </h2>
    <p> O Salario Final do Colaborador é de : ${salarioFinal}</p>
`);

/*
5-  Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.

    --variaveis
    temperatura em celcius

    --acao
    mudar par fahreinheit
    Fórmula	
    (  x °C × 9/5) + 32 = x ° F
*/

let celcius = 40;

let fahreinheit = celcius * 1.8 + 32;

document.write(`<h2>Exercicio 5</h2>
                <p> ${celcius}º C é ${fahreinheit}º F em Fahrenheit </p>

`);

/*
6- Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

--variaveis

    num1 
    num2
    frase

--condicao 
    se num1 === num 2 => frase= numeros iguais
    Se num1 > num2 => frase= primeiro é maior
    Se num1 < num2 => frase= Segundo Maior
*/

let num1 = 50;
let num2 = 30;
let frase;

if (num1 === num2) {
  frase = "Números Iguais!";
} else if (num1 > num2) {
  frase = "O Primeiro número é maior!";
} else {
  frase = "O Segundo número é maior!";
}

document.write(`
    <h2>Exercicio 6</h1>
    <p>${frase}</p>
    `);

/* 
7- As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.

--variaveis

  macas compradas = 15
  total da compra

-- condicoes
se macas compradas < 12 => maca = R$0.30
se macas compradas >= 12 => maca = R$0.25


*/

let macasCompradas = 15;
let totalCompra;

if (macasCompradas < 12) {
  totalCompra = macasCompradas * 0.3;
} else {
  totalCompra = macasCompradas * 0.25;
}

document.write(`
  <h2> Exercício 7 </h2>
  <p> Eu comprei ${macasCompradas} maçãs, o valor total da compra foi de R$${totalCompra} </p>
`);

/*
8- Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome e a quantidade de
letras que o nome possui, bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.

--variaveis
Nome
Idade
anoAtual

--passos
imprimir no terminal:
Nome e a quantidade de caracteres 
idade e ano de nascimento



*/
let nome = "Abner";
let idade = 22;
const dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

document.write(`
    <h2> Exercício 8 </h2>
    <p> Clique para ver a resolução no Console </p>
    <button id="ex8">Clique Aqui </button>
`);

let botao8 = document.getElementById("ex8");
botao8.addEventListener("click", function writeOnConsole() {
  console.log(
    `Exercício 8: 
    Nome: ${nome}, ${nome.length} letras. Idade: ${idade}, nasceu em ${
      anoAtual - idade
    }`
  );
});

/*
9- Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;

--variaveis
numero

--condicao

se numero % 2 == 0 => Numero Par
Se numero % 2 != 0 => Numero Impar
*/

document.write(`
    <h2> Exercício 9 </h2>
    <p> Clique para ver a resolução em um Alert </p>
    <button id="ex9">Clique Aqui </button>
`);

let botao = document.getElementById("ex9");
botao.addEventListener("click", function Alertar() {
  let numero = 690734;
  if (numero % 2 === 0) {
    alert(` 
    Exercício 9:
    O Número ${numero} é par`);
  } else {
    alert(` 
    Exercício 9:
    O Número ${numero} é impar`);
  }
});

/*
10- Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).

--variaveis
anoAtual10 
anoNascimento
idade

--acoes
anoAtual - anoNascimento = idade
idade > 16 => Pode Votar
idade < 16 => Não Pode votar

*/

let anoAtual10 = dataAtual.getFullYear();
let anoNascimento = 2001;
let idade10 = anoAtual10 - anoNascimento;

document.write(`
    <h2> Exercício 10 </h2>
    <p> Clique para ver a resolução no console </p>
    <button id="ex10">Clique Aqui </button>
`);

let botao10 = document.getElementById("ex10");
botao10.addEventListener("click", function logOnConsole() {
  console.log("Exercício 10:");
  if (idade10 >= 16) {
    console.log("Você pode votar!");
  } else {
    console.log("Você ainda não pode votar!");
  }
});
