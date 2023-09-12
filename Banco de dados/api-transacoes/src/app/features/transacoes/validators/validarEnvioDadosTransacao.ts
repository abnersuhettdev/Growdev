import { NextFunction, Request, Response } from 'express';

export function validarEnvioDadosTransacao(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { valor, tipo } = req.body;

	if (!valor || !tipo) {
		return res.status(400).json({
			sucesso: false,
			mensagem: 'É preciso informar valor e tipo para a transação.',
		});
	}

	next();
}
