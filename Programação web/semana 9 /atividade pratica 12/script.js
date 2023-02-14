const pessoas = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
];

/*
1. Imprima no console a quantidade de pessoas Total.
*/
function ex01() {
  console.log("EX 1 - Quantidade total de pessoas: ", pessoas.length);
}

/*
2. Imprima no console a quantidade de pessoas pessoas do sexo
Feminino.
*/
function ex02() {
  const feminino = pessoas.filter((pessoa) => {
    if (pessoa.sexo === "F") {
      return pessoa;
    }
  });
  console.log(
    "EX 2- Quantidade de Pessoas do sexo Feminino: ",
    feminino.length
  );
}

/*
3. Imprima no console a soma do salário de todas as pessoas.
*/
function ex03() {
  const salarios = [];

  pessoas.forEach((pessoa) => {
    salarios.push(pessoa.salario);
  });

  const sum = salarios.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  });

  console.log("EX 3- Soma do salário de todas as pessoas: ", sum);
}

/*
4. Imprima no console a média do salário de todas as pessoas.
*/
function ex04() {
  let media;
  let soma = 0;
  pessoas.forEach((pessoa) => {
    soma += pessoa.salario;
    return (media = soma / pessoas.length);
  });

  console.log("EX 4- Média do salário de todas as pessoas: ", media.toFixed(2));
}

/*
5. Imprima no console a soma do salário de todos as pessoas do sexo
Masculino 
*/
function ex05() {
  let soma = 0;
  pessoas.forEach((pessoa) => {
    if (pessoa.sexo === "M") {
      soma += pessoa.salario;
    }
  });
  console.log(
    "EX 5- Soma do salário de todas as pessoas do sexo masculino",
    soma
  );
}
/*
6. Imprima no console a média do salário de todas as pessoas do sexo
Masculino 
*/
function ex06() {
  let media;
  let soma = 0;
  const salariosMasculino = [];

  pessoas.forEach((pessoa) => {
    if (pessoa.sexo === "M") {
      salariosMasculino.push(pessoa.salario);
      soma += pessoa.salario;
    }
    media = soma / salariosMasculino.length;
  });

  console.log(
    "EX 6- Média do salário de todas as pessoas do sexo masculino: ",
    media.toFixed(2)
  );
}

/*
7. Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso.
*/

function ex07() {
  console.log(
    "EX 7- Existe algum salário maior que 7000? \n",
    pessoas.some((pessoa) => pessoa.salario > 7000)
  );
}

/*
8. Utilize a função findIndex, para descobrir a posição da pessoa de
nome 'Eva Trindade'.
*/

function ex08() {
  console.log(
    "EX 8- A posição da pessoa Eva Trindade na lista é: \n",
    pessoas.findIndex((pessoa) => pessoa.nome === "Eva Trindade")
  );
}

/*
9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
sobrenome "Silva".
*/
function ex09() {
  console.log(
    "EX 9- Pessoas com sobrenome Silva: ",
    pessoas.filter((pessoa) => {
      if (pessoa.nome.includes("Silva")) {
        return pessoa;
      }
    })
  );
}

/*
10. Imprima os nomes utilizando o MAP
*/

function ex10() {
  console.log(
    "EX 10- Nome de todas as pessoas:",
    pessoas.map((pessoa) => pessoa.nome)
  );
}
