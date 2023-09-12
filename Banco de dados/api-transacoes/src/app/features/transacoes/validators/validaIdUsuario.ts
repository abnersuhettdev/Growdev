import { NextFunction, Request, Response } from 'express';

export function validarIdUsuario(req: Request, res: Response, next: NextFunction) {
	const { idUsuario } = req.body;

	if (!idUsuario) {
		return res.status(400).json({
			sucesso: false,
			mensagem: 'Precisa informar o id do usuario',
		});
	}

	next();
}
