import { Request, Response } from "express";
import { CadastrarCliente, ListarCliente } from "../../usecases/Clientes";

export class ClientesController {
	// CREATE
	public cadastrar(request: Request, response: Response) {
		const { nome_completo, cpf, telefone, email, senha } = request.body;

		// precisa passar para a camada de regra de negocio
		const usecase = new CadastrarCliente({
			nome: nome_completo,
			telefone: telefone,
			cpf: cpf,
			email: email,
			senha: senha,
		});

		const resposta = usecase.execute();

		if (!resposta.sucesso) {
			return response.status(400).json(resposta);
		}

		return response.status(201).json(resposta);
	}

	// LIST ALL
	public listar(request: Request, response: Response) {
		const usecase = new ListarCliente();

		const resposta = usecase.execute();

		if (!resposta.sucesso) {
			return response.status(404).json(resposta);
		}

		return response.status(200).json(resposta);
	}

	// LIST BY ID

	public listarPeloId(request: Request, response: Response) {}

	// UPDATE
	public atualizar(request: Request, response: Response) {}

	// DELETE
}
