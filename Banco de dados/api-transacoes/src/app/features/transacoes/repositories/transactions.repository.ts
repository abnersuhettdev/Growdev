import { Between, FindOptionsWhere, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { TipoTransacao, Transacao, Usuario } from '../../../models';

import { DatabaseConnection } from '../../../../main/database';
import { TransacaoEntity } from '../../../shared/database/entities';
type CadastrarDTO = {
	idUsuario: string;
	valor: number;
	tipo: TipoTransacao;
};

type Filtros = {
	tipo?: TipoTransacao;
	valorMin?: number;
	valorMax?: number;
};

type AtualizarDTO = {
	idTransacao: string;
	valor: number;
	tipo: number;
	criadoem: Date;
};

export enum ETipo {
	'entrada' = 1,
	'saida' = 2,
}
type KeyEnumTipo = keyof typeof ETipo;

interface DadosDBTransacao {
	id: string;
	valor: number;
	tipo: number;
	criadoem: Date;
	id_usuario: string;
	email: string;
	senha: string;
}

export class TransacoesRepository {
	private _manager = DatabaseConnection.connection.manager;

	public async cadastrar(dados: CadastrarDTO): Promise<Transacao> {
		const { valor, tipo, idUsuario } = dados;

		const transacaoEntity = this._manager.create(TransacaoEntity, {
			idUsuario,
			tipo: ETipo[tipo],
			valor,
		});

		const novaTransacao = await this._manager.save(transacaoEntity);

		return (await this.buscarPorID(idUsuario, novaTransacao.id)) as Transacao;
	}

	public async calcularSaldo(idUsuario: string): Promise<number> {
		const transacoesUsuario = await this._manager.find(TransacaoEntity, {
			where: {
				idUsuario,
			},
		});

		if (!transacoesUsuario.length) return 0;

		const soma = transacoesUsuario.reduce((result, transacao) => {
			if (ETipo[transacao.tipo] === 'entrada') {
				return result + transacao.valor;
			} else {
				return result - transacao.valor;
			}
		}, 0);

		return soma;
	}

	public async listarTransacoesDeUmUsuario(idUsuario: string, filtros?: Filtros): Promise<Transacao[]> {
		const clausula: FindOptionsWhere<TransacaoEntity> = {
			idUsuario,
		};

		if (filtros) {
			if (filtros.tipo) {
				clausula.tipo = ETipo[filtros.tipo];
			}

			if (filtros.valorMin) {
				clausula.valor = MoreThanOrEqual(filtros.valorMin);
			}

			if (filtros.valorMax) {
				clausula.valor = LessThanOrEqual(filtros.valorMax);
			}

			if (filtros.valorMin && filtros.valorMax) {
				clausula.valor = Between(filtros.valorMin, filtros.valorMax);
			}
		}

		const listaFiltrada = await this._manager.find(TransacaoEntity, {
			where: clausula,
			relations: {
				usuario: true,
			},
		});

		return listaFiltrada.map((row) => this.entityToModel(row));
	}

	public async buscarPorID(idUsuario: string, idTransacao: string): Promise<Transacao | undefined> {
		const transacaoEncontrada = await this._manager.findOne(TransacaoEntity, {
			where: {
				id: idTransacao,
				idUsuario,
			},
			relations: {
				usuario: true,
			},
		});

		if (!transacaoEncontrada) return undefined;

		return this.entityToModel(transacaoEncontrada);
	}

	public async atualizarTransacao(dados: AtualizarDTO): Promise<void> {
		const { criadoem, valor, tipo, idTransacao } = dados;
		await this._manager.update(TransacaoEntity, { id: idTransacao }, { valor, tipo, criadoEm: criadoem });
	}

	public async deletarTransacao(idTransacao: string): Promise<void> {
		await this._manager.delete(TransacaoEntity, { id: idTransacao });
	}

	// TRANSFORMA RESULTADO DA BUSCA EM UMA INSTANCIA DA MODEL
	private entityToModel(dadosDB: TransacaoEntity): Transacao {
		const usuario = new Usuario(dadosDB.usuario.id, dadosDB.usuario.email, dadosDB.usuario.senha);

		const transacao = new Transacao(dadosDB.id, dadosDB.valor, ETipo[dadosDB.tipo] as KeyEnumTipo, usuario);

		return transacao;
	}
}
