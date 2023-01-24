// // Desenvolva um algoritmo que armazene o valor 10 em uma variável

// A e o valor 20 em uma variável B. A seguir (utilizando apenas
//     atribuições entre variáveis) troque os seus conteúdos fazendo com
//     que o valor que está em A passe para B e vice-versa. Ao final,
//     escrever os valores que ficaram armazenados nas variáveis.

/*
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

console.log("O valor de A é igual a: ", a);
console.log("O valor de B é igual a: ", b);

document.write(
  `
    <h1> Exercicio 1 </h1>
  <p>O valor de A é : ${a} </p>
  <p>O valor de B é igual : ${b} </p>
  <p>Outra parte no console</p>
  `
);

let aux;
aux = a;

console.log("O valor da auxiliar é igual a: ", aux);
a = b;
console.log("O valor de a é igual a: ", a);
b = aux;
console.log("O valor de b é igual a: ", b);
console.log("O valor da auxiliar é igual a: ", aux);

/*
Desenvolva um algoritmo para ler o número total de eleitores de um
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
        <p> O Percentual de Votos Validos é: <mark>${xVotoValido}%</mark> </p>
        <p>
            O Percentual de Votos Brancos é de : <mark>${xVotoBranco}%</mark>
        </p>
        <p>
            O Percentual de Votos Nulos é de : <mark>${xVotoNulo}%</mark>
        </p>
`);

/* 
O custo de um carro novo ao consumidor é a soma do custo de
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
    Uma revendedora de carros usados paga a seus funcionários
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
    Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.

    --variaveis
    temperatura em celcius

    --acao
    mudar par fahreinheit
    Fórmula	
    (  x °C × 9/5) + 32 = x ° F
*/

let temperatura = 40;

let fahreinheit = (temperatura * 9) / 5 + 32;

document.write(`<h2>Exercicio 5</h2>
                <p> ${temperatura}º C é ${fahreinheit}º F em Fahrenheit </p>

`);
