import Usuario, { UsuarioDTO } from "./usuario.class";

type ClienteDTO = UsuarioDTO & { endereco: Array<any> };

class Cliente extends Usuario {
	endereco: Array<any>;

	constructor(dados: ClienteDTO) {
		super({
			cpf: dados.cpf,
			email: dados.email,
			id: dados.id,
			nome: dados.nome,
			senha: dados.senha,
			tel: dados.tel,
		});
		this.endereco = dados.endereco;
	}

	public toJSON() {
		return {
			id: this.id,
			nome_completo: this.nome_completo,
			email: this.email,
			senha: this.senha,
			telefone: this.telefone,
			cpf: this.cpf,
			endereco: this.endereco,
		};
	}
}

export default Cliente;
