import { NextFunction, Request, Response } from "express";

export function validarCamposDeProduto(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { nome, preco, descricao, numeroSerie } = req.body;

	if (!nome || !preco || !descricao || !numeroSerie) {
		return res.status(400).json({
			sucesso: false,
			mensagem:
				"É preciso informar todas as propriedades para a acriação do Produto.",
			dados: null,
		});
	}
	next();
}
