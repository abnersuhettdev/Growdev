import { Request, Response } from "express";
import { CadastrarCliente } from "../useCases/Clientes/cadastrar";

export function cadastrarCliente(req: Request, res: Response) {
	const { nome_completo, cpf, telefone, email, senha } = req.body;

	const usecase = new CadastrarCliente({
		nome: nome_completo,
		telefone: telefone,
		cpf: cpf,
		email: email,
		senha: senha,
	});

	const resposta = usecase.execute();

	if (!resposta.sucesso) {
		return res.status(400).json(resposta);
	}

	return res.status(201).json(resposta);
}
