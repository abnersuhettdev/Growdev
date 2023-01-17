// 1

let idade = 21;

document.write(`<h3>1. Minha idade é ${idade}.</h3> </br> `);

//2

let num1 = 20;
let num2 = 40;
let soma = num1 + num2;

document.write(
  `<h3>2. O resultado da soma entre ${num1} e ${num2} é ${soma}.</h3> </br> `
);

//3

let valorCompra = 349.5;
let parcelas = 3;
let valorParcela = valorCompra / parcelas;

document.write(`<h3>3.</h3>
                <p> O valor total da compra foi R$${valorCompra};</p>
                <p> Forma de pagamento: ${parcelas} de R$${valorParcela};</p>
                </br>
`);

//4

let minutos = 240;
let segundos = minutos * 60;

document.write(`<h3>4. ${minutos} minutos equivale à ${segundos}</h3> </br>`);

//5

let aluno = "John";
let nota1 = 8;
let nota2 = 7;
let nota3 = 6;
let media = (nota1 + nota2 + nota3) / 3;

document.write(`<h3>5. O aluno ${aluno} ficou com média ${media}`);
