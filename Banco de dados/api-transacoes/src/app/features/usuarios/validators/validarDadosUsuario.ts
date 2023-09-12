import { NextFunction, Request, Response } from 'express';

export function validarDadosUsuario(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { email, senha } = req.body;

	if (!email || typeof email !== 'string') {
		return res.status(400).json({
			sucesso: false,
			mensagem: 'É preciso informar o e-mail do tipo String.',
		});
	}

	if (!email.includes('@') || !email.includes('.com')) {
		return res.status(400).json({
			sucesso: false,
			mensagem: 'É preciso informar um e-mail válido.',
		});
	}

	if (!senha || typeof senha !== 'string') {
		return res.status(400).json({
			sucesso: false,
			mensagem: 'É preciso informar a senha do tipo String.',
		});
	}

	if (senha.length < 6) {
		return res.status(400).json({
			sucesso: false,
			mensagem: 'A senha deve conter ao menos 6 caracteres.',
		});
	}

	next();
}
