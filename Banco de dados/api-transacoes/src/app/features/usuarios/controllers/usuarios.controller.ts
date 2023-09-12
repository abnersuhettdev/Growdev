import { Request, Response } from 'express';
import { CadastrarUsuario, LogarUsuario } from '../usecases';

export class UsuariosController {
	public static async cadastrar(req: Request, res: Response) {
		const { email, senha } = req.body;

		// chamar as regras de negócio
		const usecase = new CadastrarUsuario();
		const resposta = await usecase.execute({ email, senha });

		if (!resposta.sucesso) {
			return res.status(400).json(resposta);
		}

		return res.status(201).json(resposta);
	}

	public static async logar(req: Request, res: Response) {
		const { email, senha } = req.body;

		// chamar as regras de negócio
		const usecase = new LogarUsuario();
		const resultado = await usecase.execute({ email, senha });

		if (!resultado.sucesso) {
			return res.status(401).json(resultado);
		}

		return res.status(200).json(resultado);
	}
}
