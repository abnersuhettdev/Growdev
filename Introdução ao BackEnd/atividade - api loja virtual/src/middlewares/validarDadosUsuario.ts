import { NextFunction, Request, Response } from 'express';

export function validarDadosUsuario(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const dados = request.body;

	if (!dados.nome_completo) {
		return response.status(400).json({
			sucesso: false,
			motivo: 'É obrigatório informar o Nome Completo do cliente.',
		});
	}

	if (!dados.telefone) {
		return response.status(400).json({
			sucesso: false,
			motivo: 'É obrigatório informar o Telefone do cliente.',
		});
	}

	if (!dados.cpf) {
		return response.status(400).json({
			sucesso: false,
			motivo: 'É obrigatório informar o CPF do cliente.',
		});
	}

	if (!dados.email) {
		return response.status(400).json({
			sucesso: false,
			motivo: 'É obrigatório informar o E-mail do cliente.',
		});
	}

	if (!dados.senha) {
		return response.status(400).json({
			sucesso: false,
			motivo: 'É obrigatório informar o Senha do cliente.',
		});
	}

	next();
}
