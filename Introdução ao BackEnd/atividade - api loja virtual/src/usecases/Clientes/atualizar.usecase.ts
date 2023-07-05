import { ClientesRepository } from "../../repository/Clientes";
import { CadastrarClienteDTO, ClienteSemSenha } from "./";

export type AtualizarClienteDTO = Partial<
	Omit<CadastrarClienteDTO, "cpf" | "senha">
> & { idCliente: string };

type RetornoAtualizacao = {
	sucesso: boolean;
	mensagem: string;
	dadoAtualizado?: ClienteSemSenha;
};

export class AtualizarCliente {
	private dados: AtualizarClienteDTO;

	constructor(dadosConst: AtualizarClienteDTO) {
		this.dados = dadosConst;
	}

	public execute(): RetornoAtualizacao {
		// PRECISA EXISTIR O REGISTRO NA LISTA

		const repository = new ClientesRepository();

		// BUSCA POR ID
		const indice = repository.buscarClientePorID(this.dados.idCliente);

		if (indice < 0) {
			return {
				sucesso: false,
				mensagem: "O ID informado não existe na base de dados",
				dadoAtualizado: undefined,
			};
		}

		// ATUALIZACAO
		const dadoAtualizado = repository.atualizarCliente(indice, this.dados);

		return {
			sucesso: true,
			mensagem: "Registro atualizado com sucesso",
			dadoAtualizado,
		};
	}
}
