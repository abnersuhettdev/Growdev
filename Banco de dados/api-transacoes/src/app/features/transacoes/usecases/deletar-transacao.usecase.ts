import { UsuariosRepository } from '../../usuarios/repositories';
import { TransacoesRepository } from '../repositories';
import { RetornoTransacoes } from './cadastrar-transacao.usecase';

type DeletarTransacaoDTO = {
	idUsuario: string;
	idTransacao: string;
};

export class DeletarTransacao {
	public async execute(dados: DeletarTransacaoDTO): Promise<RetornoTransacoes> {
		const { idUsuario, idTransacao } = dados;

		const repositoryUsuario = new UsuariosRepository();
		const repositoryTransacao = new TransacoesRepository();

		const usuarioEncontrado = await repositoryUsuario.buscaUsuarioPorID(idUsuario);

		if (!usuarioEncontrado) {
			return {
				sucesso: false,
				mensagem: 'Usuário não encontrado. Não foi possível deletar a transação.',
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

		await repositoryTransacao.deletarTransacao(idTransacao);

		const saldo = await repositoryTransacao.calcularSaldo(idUsuario);

		return {
			sucesso: true,
			mensagem: 'Transação deletada com sucesso',
			dados: {
				saldo,
				transacao: transacao.toJSON(),
			},
		};
	}
}
