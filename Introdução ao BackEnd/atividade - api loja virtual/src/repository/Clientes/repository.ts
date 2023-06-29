import { randomUUID } from "crypto";
import Cliente from "../../classes/clientes.class";
import { clientes } from "../../database";
import { CadastrarClienteDTO } from "../../useCases/Clientes/cadastrar";

export class ClientesRepository {
	public verificaCPFCadastrado(cpf: string): boolean {
		return clientes.some((c) => c.toJSON().cpf === cpf);
	}

	public adicionaNovoCliente(dados: CadastrarClienteDTO): Cliente {
		const novoCliente = new Cliente({
			id: randomUUID(),
			telefone: dados.telefone,
			nome_completo: dados.nome,
			cpf: dados.cpf,
			email: dados.email,
			senha: dados.senha,
		});

		clientes.push(novoCliente);
		return novoCliente;
	}
}
