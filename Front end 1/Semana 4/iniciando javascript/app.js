let idade = 25; // tipo de dado: inteiro

let altura = 1.67; // tipo de dado: float

let nome = "Abner"; // tipo de dado: String

let nota1 = 7;
let nota2 = 2;

function Soma(a, b) {
  resultado = a + b;
  return resultado;
}

let frase = `A minha nota no primeiro semestre foi ${nota1} e no segundo ${nota2}`;
console.log(frase, " e a soma entre elas é : ", Soma(nota1, nota2));
