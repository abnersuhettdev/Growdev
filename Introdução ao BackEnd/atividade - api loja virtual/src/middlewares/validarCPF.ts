import { NextFunction, Request, Response } from 'express';

export function validarCPF(req: Request, res: Response, nxt: NextFunction) {
	const dados = req.body;

	const cpf = dados.cpf.replaceAll('.', '').replace('-', '');

	if (cpf.length !== 11) {
		return res.status(400).json({
			sucesso: false,
			motivo: 'CPF inválido.',
		});
	}

	// dá pra modificar os dados do json enviado
	req.body.cpf = cpf;

	// e também dá pra inserir novos dados no json
	req.body.NovoDado = 'Teste novo';

	// tudo antes de chamar a proxima funcao para que a mesma possa acessar esses dados adicionais e/ou o json modelado
	nxt();
}
