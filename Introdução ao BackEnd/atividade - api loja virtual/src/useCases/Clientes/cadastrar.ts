import Cliente from "../../classes/clientes.class";
import { ClientesRepository } from "../../repository/Clientes/repository";

export type CadastrarClienteDTO = {
	nome: string;
	cpf: string;
	telefone: string;
	email: string;
	senha: string;
};

type RetornoCadastro = {
	sucesso: boolean;
	mensagem: string;
	dadoCadastrado?: Cliente;
};

export class CadastrarCliente {
	dados: CadastrarClienteDTO;

	constructor(dados: CadastrarClienteDTO) {
		this.dados = dados;
	}

	public execute(): RetornoCadastro {
		const repository = new ClientesRepository();

		if (repository.verificaCPFCadastrado(this.dados.cpf)) {
			return {
				sucesso: false,
				mensagem: "Esse CPF ja está cadastrado",
			};
		}

		const novo = repository.adicionaNovoCliente(this.dados);

		return {
			sucesso: true,
			mensagem: "Cliente cadastrado com sucesso",
			dadoCadastrado: novo,
		};
	}
}
