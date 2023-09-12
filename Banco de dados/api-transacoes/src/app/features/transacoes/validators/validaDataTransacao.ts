import { NextFunction, Request, Response } from 'express';

export function validarDataTransacao(req: Request, res: Response, next: NextFunction) {
	const { criadoEm } = req.body;

	if (criadoEm) {
		const [ano, mes, dia] = criadoEm.split('-');

		if (!dia || !mes || !ano) {
			return res.status(400).json({
				sucesso: false,
				mensagem: 'Formato de data inválido. É necessário que esteja no formato aaaa-MM-dd',
			});
		}

		if (dia.length != 2 || mes.length != 2 || ano.length != 4) {
			return res.status(400).json({
				sucesso: false,
				mensagem: 'Formato de data inválido. É necessário que esteja no formato aaaa-MM-dd',
			});
		}

		req.body.criadoEm = new Date(`${ano}-${mes}-${dia}`);
	}

	next();
}
