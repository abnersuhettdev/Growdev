import { NextFunction, Request, Response } from 'express';

export function validarIdCliente(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const { idCliente } = request.params;

	// falsy =: null, undefined, '', 0, false
	if (!idCliente) {
		return response.status(400).json({
			sucesso: false,
			mensagem: 'É obrigatório informar o ID do Cliente.',
			dados: null,
		});
	}

	next();
}
