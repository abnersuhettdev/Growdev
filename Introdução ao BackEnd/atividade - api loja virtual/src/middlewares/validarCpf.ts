import { NextFunction, Request, Response } from "express";

export function validarCPF(req: Request, res: Response, next: NextFunction) {
	const dados = req.body;

	const cpf = dados.cpf.replaceAll(".", "").replace("-", "");

	if (cpf.length !== 11) {
		return res.status(400).json({
			sucesso: false,
			message: "cpf inválido",
		});
	}

	req.body.cpf = cpf;

	next();
}
