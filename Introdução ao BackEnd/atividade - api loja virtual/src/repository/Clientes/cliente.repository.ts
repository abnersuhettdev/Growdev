import { randomUUID } from "crypto";
import { Cliente } from "../../classes";
import { clientes } from "../../database";
import { CadastrarClienteDTO } from "../../usecases/Clientes";

export class ClientesRepository {
	public existeCPFCadastrado(cpf: string): boolean {
		return clientes.some((c) => c.toJSON().cpf === cpf);
	}

	public adicionarNovo(dados: CadastrarClienteDTO): Cliente {
		const novoCliente = new Cliente({
			id: randomUUID(),
			nome_completo: dados.nome,
			cpf: dados.cpf,
			email: dados.email,
			telefone: dados.telefone,
			senha: dados.senha,
		});

		clientes.push(novoCliente);

		return novoCliente;
	}

	public listarClientes(): Cliente[] {
		return clientes.map((cliente) => {
			const client = { ...cliente.toJSON(), senha: undefined };

			return client;
		});
	}
}
