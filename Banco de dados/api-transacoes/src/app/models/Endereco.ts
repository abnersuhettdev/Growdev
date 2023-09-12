import { Base } from './Base';

export type EnderecoJSON = {
	id: string;
	logradouro: string;
	numero?: string;
	cidade: string;
	uf: string;
};

export class Endereco extends Base {
	constructor(
		id: string,
		private _logradouro: string,
		private _cidade: string,
		private _uf: string,
		private _criadoEm: Date,
		private _numero?: string
	) {
		super(id);
	}

	public toJSON(): EnderecoJSON {
		return {
			id: this._id,
			logradouro: this._logradouro,
			numero: this._numero,
			cidade: this._cidade,
			uf: this._uf,
		};
	}
}

/*

*/
