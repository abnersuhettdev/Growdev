import { Cliente } from '../../classes';
import { ClientesRepository } from '../../repository/Clientes';

export type CadastrarClienteDTO = {
	nome: string;
	telefone: string;
	email: string;
	cpf: string;
	senha: string;
};

type RetornoCadastro = {
	sucesso: boolean;
	mensagem: string;
	dadoCadastrado?: Cliente;
};

export class CadastrarCliente {
	private dados: CadastrarClienteDTO;

	constructor(dados: CadastrarClienteDTO) {
		this.dados = dados;
	}

	public execute(): RetornoCadastro {
		// REGRA DE NEGOCIO - não pode existir dois clientes com o mesmo CPF
		const repository = new ClientesRepository();

		if (repository.existeCPFCadastrado(this.dados.cpf)) {
			return {
				sucesso: false,
				mensagem: 'Este CPF já está cadastrado por outro Cliente.',
			};
		}

		const novo = repository.adicionarNovo(this.dados);
		return {
			sucesso: true,
			mensagem: 'Cliente cadastrado com sucesso',
			dadoCadastrado: novo,
		};
	}
}
