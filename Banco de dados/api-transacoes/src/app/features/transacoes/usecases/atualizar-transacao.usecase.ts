import { TipoTransacao } from '../../../models';
import { UsuariosRepository } from '../../usuarios/repositories';
import { ETipo, TransacoesRepository } from '../repositories';
import { RetornoTransacoes } from './cadastrar-transacao.usecase';

type AtualizarTransacaoDTO = {
	idUsuario: string;
	idTransacao: string;
	novosDados: {
		valor?: number;
		tipo?: TipoTransacao;
		criadoEm?: Date;
	};
};

export class AtualizarTransacao {
	public async execute(dados: AtualizarTransacaoDTO): Promise<RetornoTransacoes> {
		const { idUsuario, idTransacao, novosDados } = dados;

		const repositoryUsuario = new UsuariosRepository();
		const repositoryTransacao = new TransacoesRepository();

		const usuarioEncontrado = await repositoryUsuario.buscaUsuarioPorID(idUsuario);

		if (!usuarioEncontrado) {
			return {
				sucesso: false,
				mensagem: 'Usuário não encontrado. Não foi possível atualizar a transação.',
				dados: {
					saldo: 0,
				},
			};
		}

		const transacao = await repositoryTransacao.buscarPorID(idUsuario, idTransacao);

		if (!transacao) {
			return {
				sucesso: false,
				mensagem: 'Transação não encontrada.',
				dados: {
					saldo: 0,
				},
			};
		}

		const atualizada = transacao.atualizarDetalhes({
			valor: novosDados.valor,
			tipo: novosDados.tipo,
			criadoEm: novosDados.criadoEm,
		});

		if (!atualizada) {
			return {
				sucesso: false,
				mensagem: 'Transação não pode ser atualizada. Valor para transação não pode ser menor que zero.',
				dados: {
					saldo: 0,
				},
			};
		}
		const transacaoJSON = transacao.toJSON();

		repositoryTransacao.atualizarTransacao({
			idTransacao,
			criadoem: transacaoJSON.criadoEm,
			tipo: ETipo[transacaoJSON.tipo],
			valor: transacaoJSON.valor,
		});

		const saldo = await repositoryTransacao.calcularSaldo(idUsuario);

		return {
			sucesso: true,
			mensagem: 'Transação atualizada com sucesso',
			dados: {
				saldo,
				transacao: transacaoJSON,
			},
		};
	}
}
