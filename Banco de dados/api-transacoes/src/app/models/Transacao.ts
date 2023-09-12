import { Base, Usuario, UsuarioJSON } from '.';

export type TipoTransacao = 'entrada' | 'saida';

type AtualizarTransacaoDTO = {
	valor?: number;
	tipo?: TipoTransacao;
	criadoEm?: Date;
};

export type TransacaoJSON = {
	id: string;
	valor: number;
	tipo: TipoTransacao;
	criadoEm: Date;
	autor: UsuarioJSON;
};

export class Transacao extends Base {
	private _criadoEm: Date;

	constructor(id: string, private _valor: number, private _tipo: TipoTransacao, private _autor: Usuario) {
		super(id);
		this._criadoEm = new Date();
	}

	public toJSON(): TransacaoJSON {
		return {
			id: this._id,
			valor: this._valor,
			tipo: this._tipo,
			criadoEm: this._criadoEm,
			autor: this._autor.toJSON(),
		};
	}

	public atualizarDetalhes(novasInfos: AtualizarTransacaoDTO): boolean {
		if (novasInfos.valor) {
			if (novasInfos.valor < 0) {
				return false;
			}

			this._valor = novasInfos.valor;
		}

		if (novasInfos.tipo) {
			this._tipo = novasInfos.tipo;
		}

		if (novasInfos.criadoEm) {
			this._criadoEm = novasInfos.criadoEm;
		}

		return true;
	}
}

/*

- id
- valor: number
- tipo: 'entrada' | 'saida'
- criadoEm: Date

*/
