import { TipoTransacao } from '../../../models';
import { UsuariosRepository } from '../../usuarios/repositories';
import { TransacoesRepository } from '../repositories';
import { RetornoTransacoes } from './cadastrar-transacao.usecase';

type ListarTransacoesDTO = {
	idUsuario: string;
	tipo?: TipoTransacao;
};

export class ListarTransacoes {
	public async execute(dados: ListarTransacoesDTO): Promise<RetornoTransacoes> {
		const { idUsuario, tipo } = dados;

		const repositoryUsuario = new UsuariosRepository();
		const repositoryTransacoes = new TransacoesRepository();

		const usuarioEncontrado = await repositoryUsuario.buscaUsuarioPorID(idUsuario);

		if (!usuarioEncontrado) {
			return {
				sucesso: false,
				mensagem: 'Usuário não encontrado. Não foi possível listar as transações.',
				dados: {
					saldo: 0,
				},
			};
		}

		const transacoes = await repositoryTransacoes.listarTransacoesDeUmUsuario(idUsuario, {
			tipo,
		});

		const saldo = await repositoryTransacoes.calcularSaldo(idUsuario);

		return {
			sucesso: true,
			mensagem: 'Transações do usuário listadas com sucesso',
			dados: {
				saldo,
				transacoes: transacoes.map((t) => t.toJSON()),
			},
		};
	}
}
