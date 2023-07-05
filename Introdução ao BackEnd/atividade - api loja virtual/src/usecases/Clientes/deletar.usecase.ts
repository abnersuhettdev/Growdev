import { Cliente } from '../../classes';
import { ClientesRepository } from '../../repository/Clientes';

type RetornoExclusao = {
	sucesso: boolean;
	mensagem: string;
	clienteExcluido?: Cliente;
};

export class DeletarCliente {
	private id: string;

	constructor(idCliente: string) {
		this.id = idCliente;
	}

	public execute(): RetornoExclusao {
		const repository = new ClientesRepository();

		const indice = repository.buscarClientePorID(this.id);

		if (indice === -1) {
			return {
				sucesso: false,
				mensagem: 'Registro não encontrado pelo ID informado',
				clienteExcluido: undefined,
			};
		}

		const clienteDeletado = repository.deletarCliente(indice);
		return {
			sucesso: true,
			mensagem: 'Cliente removido do sistema',
			clienteExcluido: clienteDeletado,
		};
	}
}
