import { TipoTransacao, TransacaoJSON } from '../../../models';
import { UsuariosRepository } from '../../usuarios/repositories';
import { TransacoesRepository } from '../repositories';

type CadastrarTransacaoDTO = {
	idUsuario: string;
	valor: number;
	tipo: TipoTransacao;
};

export type RetornoTransacoes = {
	sucesso: boolean;
	mensagem: string;
	dados: {
		saldo: number;
		transacao?: TransacaoJSON;
		transacoes?: Array<TransacaoJSON>;
	};
};

export class CadastrarTransacao {
	public async execute(dados: CadastrarTransacaoDTO): Promise<RetornoTransacoes> {
		// para criar uma transação precisa ter um usuario válido
		const repositoryUsuario = new UsuariosRepository();
		const usuarioEncontrado = await repositoryUsuario.buscaUsuarioPorID(dados.idUsuario);

		if (!usuarioEncontrado) {
			return {
				sucesso: false,
				mensagem: 'Usuário não encontrado. Não foi possível cadastrar a transação.',
				dados: {
					saldo: 0,
				},
			};
		}

		const repositoryTransacoes = new TransacoesRepository();
		const transacaoCriada = await repositoryTransacoes.cadastrar({
			idUsuario: dados.idUsuario,
			tipo: dados.tipo,
			valor: dados.valor,
		});

		const somaTransacoes = await repositoryTransacoes.calcularSaldo(dados.idUsuario);
		console.log(somaTransacoes);
		const transacoesUsuario = await repositoryTransacoes.listarTransacoesDeUmUsuario(dados.idUsuario);

		return {
			sucesso: true,
			mensagem: 'Transação cadastrada com sucesso',
			dados: {
				saldo: somaTransacoes,
				transacao: transacaoCriada.toJSON(),
				transacoes: transacoesUsuario.map((t) => t.toJSON()),
			},
		};
	}
}
