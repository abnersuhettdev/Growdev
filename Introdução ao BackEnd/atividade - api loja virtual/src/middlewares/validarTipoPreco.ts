import { NextFunction, Request, Response } from "express";

export function validarTipoPreco(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { preco } = req.body;

	if (typeof preco === "string") {
		req.body.preco = Number(preco.replaceAll(".", "").replaceAll(",", "."));
	}

	if (isNaN(req.body.preco)) {
		return {
			mensagem: "O dado informado para o preco deve ser um numero válido",
			sucesso: false,
		};
	}

	if (typeof req.body.preco !== "number") {
		return {
			mensagem: "O dado informado para o preco deve ser um numero válido",
			sucesso: false,
		};
	}

	next();
}
