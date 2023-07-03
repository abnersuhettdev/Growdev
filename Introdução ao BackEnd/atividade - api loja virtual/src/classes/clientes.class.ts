import Usuario, { UsuarioDTO } from './usuario.class';

type ClienteDTO = UsuarioDTO & { endereco?: Array<any> };

export class Cliente extends Usuario {
	endereco?: Array<any>;

	constructor(dados: ClienteDTO) {
		super({
			id: dados.id,
			nome_completo: dados.nome_completo,
			telefone: dados.telefone,
			cpf: dados.cpf,
			email: dados.email,
			senha: dados.senha,
		});
		this.endereco = dados.endereco;
	}

	public toJSON() {
		const objCliente = {
			id: this.id,
			nome_completo: this.nome_completo,
			telefone: this.telefone,
			email: this.email,
			senha: this.senha,
			cpf: this.cpf,
			endereco: this.endereco,
		};

		return objCliente;
	}
}
