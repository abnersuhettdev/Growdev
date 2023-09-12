import { NextFunction, Request, Response } from 'express';

export function validarTipoTransacao(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { tipo } = req.query;

	if (tipo && tipo !== 'entrada' && tipo !== 'saida') {
		return res.status(400).json({
			sucesso: false,
			mensagem: 'Filtro de tipo inválido',
		});
	}

	next();
}
