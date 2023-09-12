import { Request, Response } from 'express';
import { TipoTransacao } from '../../../models';
import { AtualizarTransacao, CadastrarTransacao, DeletarTransacao, ListarPorID, ListarTransacoes } from '../usecases';

export class TransacaoController {
	public static async cadastrar(req: Request, res: Response) {
		const { valor, tipo, idUsuario } = req.body;

		// chamar as regras de negocio
		const usecase = new CadastrarTransacao();
		const resultado = await usecase.execute({ idUsuario, tipo, valor });

		if (!resultado.sucesso) {
			return res.status(401).json(resultado);
		}

		return res.status(200).json(resultado);
	}

	public static async listarTodas(req: Request, res: Response) {
		const { tipo } = req.query;
		const { idUsuario } = req.body;

		// regra de negocio
		const usecase = new ListarTransacoes();
		const resultado = await usecase.execute({
			idUsuario,
			tipo: tipo as TipoTransacao | undefined,
		});

		if (!resultado.sucesso) {
			return res.status(401).json(resultado);
		}

		return res.status(200).json(resultado);
	}

	public static async listarPorID(req: Request, res: Response) {
		const { idUsuario } = req.body;
		const { idTransacao } = req.params;

		// regra de negocio
		const usecase = new ListarPorID();
		const resultado = await usecase.execute({
			idUsuario,
			idTransacao,
		});

		if (!resultado.sucesso) {
			return res.status(404).json(resultado);
		}

		return res.status(200).json(resultado);
	}

	public static async atualizar(req: Request, res: Response) {
		const { idTransacao } = req.params;
		const { tipo, valor, criadoEm, idUsuario } = req.body;

		// regra de negocio
		const usecase = new AtualizarTransacao();
		const resultado = await usecase.execute({
			idUsuario,
			idTransacao,
			novosDados: { tipo, valor, criadoEm },
		});

		if (!resultado.sucesso) {
			return res.status(404).json(resultado);
		}

		return res.status(200).json(resultado);
	}

	public static async deletar(req: Request, res: Response) {
		const { idUsuario } = req.body;
		const { idTransacao } = req.params;

		// regra de negocio
		const usecase = new DeletarTransacao();
		const resultado = await usecase.execute({
			idUsuario,
			idTransacao,
		});

		if (!resultado.sucesso) {
			return res.status(404).json(resultado);
		}

		return res.status(200).json(resultado);
	}
}
