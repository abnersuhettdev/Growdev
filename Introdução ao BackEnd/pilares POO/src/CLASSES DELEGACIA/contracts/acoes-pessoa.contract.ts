import Endereco from "../classes/endereco.class";

interface AcoesPessoa {
	atualizarDados: (nome: string, idade: number, endereco: Endereco) => void;
}

export default AcoesPessoa;
