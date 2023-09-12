import { Base } from './Base';
import { Endereco, EnderecoJSON } from './Endereco';

export type UsuarioJSON = {
	id: string;
	email: string;
	endereco?: EnderecoJSON;
};

export class Usuario extends Base {
	constructor(id: string, private _email: string, private _senha: string, private _endereco?: Endereco) {
		super(id);
	}

	public toJSON(): UsuarioJSON {
		return {
			id: this._id,
			email: this._email,
			endereco: this._endereco?.toJSON(),
		};
	}
}

/*

*/
