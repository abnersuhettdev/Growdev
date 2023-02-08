/*
1. Considere o seguinte array:
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
1290.00, 15000.00];

a. Imprima no console o índice do primeiro salário maior que
7.500 utilizando o findIndex
b. Imprima no console a lista de salários em ordem crescente
utilizando o sort
c. Imprima no console a lista de salários em ordem decrescente
utilizando o sort
d. Utilize a função Some, para descobrir se existe algum salário
superior a 10.000, imprima verdadeiro no console caso exista,
caso contrário falso.
e. Crie uma nova lista filtrada com os salários que são maior que
8.000 utilizando o filter

*/

function ex1() {
  const salarios = [
    5000.0, 5460.5, 3452.0, 6900.0, 7590.1, 8012.99, 1290.0, 15000.0,
  ];

  let indice = salarios.findIndex((i) => {
    if (i > 7500) {
      return i;
    }
  });
  console.log("A: ", indice);

  let ordemCrescente = salarios.sort((num1, num2) => num1 - num2);
  console.log("B: ", ordemCrescente);

  let ordemDecrescente = salarios.sort((num1, num2) => num2 - num1);
  console.log("C: ", ordemDecrescente);

  let maiorDezMil = salarios.some((salario) => {
    if (salario > 10000) {
      return true;
    }

    return false;
  });
  console.log("D: ", maiorDezMil);

  let ListaFiltrada = [];
  salarios.filter((salario) => {
    if (salario > 8000) {
      ListaFiltrada.push(salario);
    }
  });
  console.log("E: ", ListaFiltrada);
}

/*
2. James estava criando uma array com as cores do arco-íris, e ele
esqueceu algumas cores. As cores padrão de um arco-íris são
normalmente listadas nesta ordem:
const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
"Roxo"];

mas James tinha isto:
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

Usando somente o método splice insira as cores que faltam na array e
remova a cor "Preto", seguindo estes passos:

a. Remova "Preto"
b. Adicione "Amarelo" e "Verde"
c. Adicione "Roxo"
*/
function ex2() {
  const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

  //A & B
  rainbow.splice(2, 1, "Amarelo", "Verde");
  //C
  rainbow.splice(rainbow.length, 0, "Roxo");

  console.log(rainbow);
}
