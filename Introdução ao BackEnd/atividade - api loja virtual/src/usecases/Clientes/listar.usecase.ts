import { Cliente } from "../../classes/";
import { ClientesRepository } from "../../repository/Clientes";

type RetornoListagem = {
	sucesso: boolean;
	mensagem: string;
	clientes: Cliente[];
};

export class ListarCliente {
	public execute(): RetornoListagem {
		const repository = new ClientesRepository();

		const listaClientes = repository.listarClientes();

		if (!listaClientes.length) {
			return {
				sucesso: false,
				mensagem: "Nenhum cliente cadastrado",
				clientes: [],
			};
		}

		return {
			sucesso: true,
			mensagem: "clientes retornados com sucesso",
			clientes: repository.listarClientes(),
		};
	}
}

export class ListarClientePeloID {
	public execute(): RetornoListagem {
		const repository = new ClientesRepository();

		const listaClientes = repository.listarClientes();

		return {
			sucesso: true,
			mensagem: "clientes retornados com sucesso",
			clientes: repository.listarClientes(),
		};
	}
}
