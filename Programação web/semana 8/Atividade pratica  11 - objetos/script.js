/*
1. Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos.
*/

function ex1() {
  const produto = {
    preco: 90,
    descricao: "Mouse",
  };

  console.log(
    `Preço: ${produto.preco}
Descrição: ${produto.descricao}`
  );
}

/*
2. Crie um objeto em JavaScript para colocar 5 atributos de um
notebook. Atribua os seguintes atributos:
Processador = i7
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, mostre o nome e valor de cada atributo no console,
exatamente como está na atividade.
*/

function ex2() {
  const notebook = {
    processador: "i7",
    memoria: 5000,
    hd: "1TB",
    ssd: "256GB",
  };

  console.log(
    `Processador = ${notebook.processador}
Memória = ${notebook.memoria}
Preço = ${notebook.preco}
HD = ${notebook.hd}
SSD = ${notebook.ssd}`
  );
}

/*
3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.
*/

function ex3() {
  const aluno1 = {
    nome: "Abner",
    nota1: 8,
    nota2: 9,
  };
  const aluno2 = {
    nome: "Pedro",
    nota1: 7,
    nota2: 6,
  };

  let mediaTurma =
    (aluno1.nota1 + aluno1.nota2 + aluno2.nota1 + aluno1.nota2) / 2;

  console.log(
    `Aluno 1: 
Nome: ${aluno1.nome}
Nota 1: ${aluno1.nota1}
Nota 2: ${aluno1.nota2}

Aluno 2:
Nome: ${aluno2.nome}
Nota 1: ${aluno2.nota1}
Nota 2: ${aluno2.nota2} 
`
  );
  console.log(`Média do primeiro aluno: ${aluno1.nota1 + aluno1.nota2 / 2}`);
  console.log(`Média do segundo aluno: ${aluno2.nota1 + aluno1.nota2 / 2}`);
  console.log(`Média da turma: ${mediaTurma}`);
}

/*
4. Crie cinco objetos JavaScript dentro de um Array contendo
nome(texto), idade(número), skills (array), ou seja um total de cinco

alunos. Agora crie uma função que receba estes cinco objetos e
mais um parâmetro skill. Dependendo da skill enviada mostrar no
console.log(), quais alunos têm a skill enviada por parâmetro,
mostrar todo o objeto.
Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
Pedro e qual mais se encaixa nessa skill.
 */

function ex4() {
  const alunos = [
    {
      nome: "João",
      idade: 18,
      skills: ["HTML", "CSS", "Javascript"],
    },
    {
      nome: "Pedro",
      idade: 24,
      skills: ["Python", "SQL", "Django"],
    },
    {
      nome: "Lucas",
      idade: 23,
      skills: ["React", "Typescript", "NodeJS"],
    },
    {
      nome: "Julia",
      idade: 22,
      skills: ["UX/UI", "CSS", "Photoshop"],
    },
    {
      nome: "Guilherme",
      idade: 30,
      skills: ["React", "Python", "Javascript"],
    },
  ];

  function filtraSkill(arr, skill) {
    for (let aluno of arr) {
      if (aluno.skills.includes(skill)) {
        console.log(aluno);
      }
    }
  }
  filtraSkill(alunos, "Javascript");
}

/*
5. Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
*/

function ex5() {
  const pessoasDesempregadas = [];
  const empregadosSalarioMenor2500 = [];
  const empregadosSalarioMaior2500 = [];

  function cadastrarPessoa(pessoa) {
    let continuar = true;
    let salario;
    do {
      let nome = prompt("Digite o nome da pessoa");
      let idade = prompt("Digite a idade da pessoa");
      let trabalhando = confirm(
        "A pessoa está empregada? Se sim clique em OK se não clique em Cancelar"
      );

      pessoa = {
        nome: nome,
        idade: idade,
        trabalhando: trabalhando,
        salario: salario,
      };

      if (pessoa.trabalhando === true) {
        salario = Number(prompt("Qual o salário dessa pessoa?"));

        if (salario > 2500) {
          pessoa.salario = salario;
          empregadosSalarioMaior2500.push(pessoa);
        } else {
          pessoa.salario = salario;
          empregadosSalarioMenor2500.push(pessoa);
        }
      } else if (pessoa.trabalhando === false) {
        pessoa.salario = null;
        pessoasDesempregadas.push(pessoa);
      }

      continuar = confirm("Deseja Continuar?");
    } while (continuar);
  }
  cadastrarPessoa();

  console.log(
    pessoasDesempregadas,
    empregadosSalarioMaior2500,
    empregadosSalarioMenor2500
  );
}
