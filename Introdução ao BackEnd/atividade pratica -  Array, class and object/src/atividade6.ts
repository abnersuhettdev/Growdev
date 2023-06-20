import Aluno from "./classes/Aluno";

const provaGabarito = ["A", "B", "C", "A", "B", "C", "C", "A", "A", "B"];

const aluno01 = new Aluno("Roberto", 18);
const aluno02 = new Aluno("Mariana", 17);
const aluno03 = new Aluno("Lucas", 15);
const aluno04 = new Aluno("Carlos", 14);
const aluno05 = new Aluno("Jordana", 16);

aluno01.realizarProva();
aluno03.realizarProva();
aluno04.realizarProva();
aluno05.realizarProva();

console.log(`${aluno01.nome} - ${aluno01.respostas}`);
console.log(`${aluno02.nome} - ${aluno02.respostas}`);
console.log(`${aluno03.nome} - ${aluno03.respostas}`);
console.log(`${aluno04.nome} - ${aluno04.respostas}`);
console.log(`${aluno05.nome} - ${aluno05.respostas}`);

const turma = [aluno01, aluno02, aluno03, aluno04, aluno05];

turma.forEach((aluno) => {
	aluno.calcularNota(provaGabarito);
	aluno.aprovarOuReprovar();
	console.log(`Nome:  ${aluno.nome} - Nota: ${aluno.nota}`);
});

let melhorAluno = turma[0];
let piorAluno = turma[0];
const alunosAprovados: Aluno[] = [];
const alunosReprovados: Aluno[] = [];
const alunosPendentes: Aluno[] = [];
let mediaTurma: number = 0;

turma.forEach((aluno) => {
	switch (aluno.status) {
		case "aprovado":
			alunosAprovados.push(aluno);
			break;
		case "reprovado":
			alunosReprovados.push(aluno);
			break;
		default:
			alunosPendentes.push(aluno);
	}

	if (aluno.nota > melhorAluno.nota && aluno.status) {
		melhorAluno = aluno;
	}

	if (aluno.nota < piorAluno.nota && aluno.status) {
		piorAluno = aluno;
	}

	mediaTurma += aluno.nota / turma.length;
});

console.log("== Alunos Aprovados ==");
alunosAprovados.forEach((aluno) =>
	console.log(`Nome: ${aluno.nome} - Nota: ${aluno.nota} \n`)
);

console.log("\n== Alunos Reprovados ==");
alunosReprovados.forEach((aluno) =>
	console.log(`Nome: ${aluno.nome} - Nota: ${aluno.nota} \n`)
);

console.log("\n== Alunos com notas pendentes ==");
alunosPendentes.forEach((aluno) =>
	console.log(`Nome: ${aluno.nome} - Nota: ${aluno.nota} \n`)
);

console.log("\n== Média da Turma ==");
console.log(`Média: ${mediaTurma} \n`);

console.log("\n== Melhor Aluno ==");
console.log(`Nome: ${melhorAluno.nome} - Nota: ${melhorAluno.nota} \n`);

console.log("\n== Pior Aluno ==");
console.log(`Nome: ${piorAluno.nome} - Nota: ${piorAluno.nota} \n`);
