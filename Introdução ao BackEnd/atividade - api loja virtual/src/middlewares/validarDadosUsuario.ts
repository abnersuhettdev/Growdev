import { NextFunction, Request, Response } from "express";

export function validarDadosUsuario(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const dados = req.body;

	if (!dados.nome_completo) {
		return res.status(400).json({
			sucesso: false,
			message: "É obrigatório informar o nome completo do cliente",
		});
	}

	if (!dados.telefone) {
		return res.status(400).json({
			sucesso: false,
			message: "É obrigatório informar o telefone do cliente",
		});
	}

	if (!dados.cpf) {
		return res.status(400).json({
			sucesso: false,
			message: "É obrigatório informar o cpf do cliente",
		});
	}

	if (!dados.email) {
		return res.status(400).json({
			sucesso: false,
			message: "É obrigatório informar o email do cliente",
		});
	}

	if (!dados.senha) {
		return res.status(400).json({
			sucesso: false,
			message: "É obrigatório informar a senha do cliente",
		});
	}

	next();
}
