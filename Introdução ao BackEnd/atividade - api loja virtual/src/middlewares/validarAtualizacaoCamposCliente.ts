import { NextFunction, Request, Response } from 'express';

export function validarAtualizacaoCamposCliente(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const { nome_completo, telefone, email } = request.body;

	if (!nome_completo && !telefone && !email) {
		return response.status(400).json({
			sucesso: false,
			mensagem:
				'É preciso informar ao menos uma propriedade a ser atualizada do Cliente.',
			dados: null,
		});
	}

	next();
}
