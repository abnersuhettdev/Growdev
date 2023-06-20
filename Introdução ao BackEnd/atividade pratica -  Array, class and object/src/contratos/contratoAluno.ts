export default interface ContratoAluno {
	realizarProva: () => void;
	calcularNota: (respostasProva: string[]) => void;
	aprovarOuReprovar: () => void;
}
