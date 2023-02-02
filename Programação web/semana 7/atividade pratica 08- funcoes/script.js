/*
1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2).
*/

function exercicio1() {
  function calculaMedia(nota1, nota2, nota3, tipoMedia) {
    let media;
    if (tipoMedia === "a" || tipoMedia === "A") {
      media = (nota1 + nota2 + nota3) / 3;
      return media;
    } else {
      media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
      return media;
    }
  }

  const nota1 = Number(prompt("Digite a primeira nota"));
  const nota2 = Number(prompt("Digite a segunda nota"));
  const nota3 = Number(prompt("Digite a terceira nota"));
  const tipoMedia = prompt("Digite o tipo de média");

  console.log("A média é " + calculaMedia(nota1, nota2, nota3, tipoMedia));
}

/*
2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.
*/

function exercicio2() {
  function parOuImpar(numero) {
    if (numero % 2 !== 0) {
      return true;
    }
  }

  let numero = Number(
    prompt("Digite um número e descubra se ele é par ou impar")
  );
  let resultado = parOuImpar(numero);
  if (resultado) {
    alert("O número é impar");
  } else {
    alert("O número é par");
  }
}

/*
3. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.
 */

function exercicio3() {
  function ePrimo(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  }

  let numero = parseInt(prompt("Digite um número inteiro e postivo"));
  if (ePrimo(numero)) {
    alert("O número é primo");
  } else {
    alert("O número não é primo");
  }
}

/*
4. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.
*/
function exercicio4() {
  function calculaTempo(tempo) {
    let horas = parseInt(tempo / 3600);
    let minutos = parseInt((tempo % 3600) / 60);
    let segundos = tempo - horas * 3600 - minutos * 60;
    alert(`${horas} horas : ${minutos} minutos : ${segundos} segundos`);
  }

  let perguntaNumero = Number(prompt("Digite um numero em segundos"));
  calculaTempo(perguntaNumero);
}

/*
5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.
*/
function exercicio5() {
  function numeroPerfeito(numero) {
    let divisor = 0;
    for (let i = 1; i < numero; i++) {
      if (numero % i == 0) {
        divisor += i;
      }
    }
    if (divisor === numero) {
      return true;
    } else {
      return false;
    }
  }
  let valor = Number(prompt("Insira um valor inteiro"));
  alert(numeroPerfeito(valor));
}
/*
6. Crie uma função chamada acessoAoSite() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
um alerta informando “Bem vindo ao site”.
*/

function exercicio6() {
  function acessoAoSite() {
    alert("Bem vindo ao Site");
  }
  acessoAoSite();
}

/*
7. Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens.
*/

function exercicio7() {
  function mostrarMensagem() {
    let nomeAplicacao = prompt("Digite o seu nome:");
    console.log(`Acesso à aplicação ${nomeAplicacao}`);
    alert(`Bem vindo à aplicação ${nomeAplicacao}`);
  }
  mostrarMensagem();
}

/*
Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”
*/

function exercicio8() {
  function mostrarDobro(n) {
    alert(`O dobro do número ${n} é ${n * 2}`);
  }
  let n = parseInt(prompt("Digite um número inteiro"));
  mostrarDobro(n);
}

/*
9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.
*/
function exercicio9() {
  function calculaMedia(nota1, nota2, nota3, nome) {
    let media = (nota1 + nota2 + nota3) / 3;
    alert(`${nome}, sua média é ${media.toFixed(2)}.`);
  }

  let nome = prompt("Digite seu nome");
  let n1 = Number(prompt("Digite a primeira nota"));
  let n2 = Number(prompt("Digite a segunda nota"));
  let n3 = Number(prompt("Digite a terceira nota"));

  calculaMedia(n1, n2, n2, nome);
}
