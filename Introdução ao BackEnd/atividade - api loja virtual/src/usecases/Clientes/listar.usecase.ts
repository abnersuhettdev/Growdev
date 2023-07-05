import { ClientesRepository } from '../../repository/Clientes';

export type ClienteSemSenha = {
	id: string;
	nome_completo: string;
	cpf: string;
	email: string;
	telefone: string;
};

type RetornoListagem = {
	sucesso: boolean;
	mensagem: string;
	clientes: ClienteSemSenha[];
};

export class ListarClientes {
	public execute(): RetornoListagem {
		// CAMADA DE CONEXÃO COM O BANCO OU ESQUEMA DE DADOS (RAM)
		const repository = new ClientesRepository();
		const listaClientesRetorno = repository.listarClientes();

		if (!listaClientesRetorno.length) {
			return {
				clientes: [],
				mensagem: 'Nenhum cliente cadastrado ainda.',
				sucesso: false,
			};
		}
		return {
			clientes: listaClientesRetorno,
			mensagem: 'Clientes listados com sucessos',
			sucesso: true,
		};
	}
}
