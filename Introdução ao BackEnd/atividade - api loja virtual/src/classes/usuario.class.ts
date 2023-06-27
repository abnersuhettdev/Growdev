export type UsuarioDTO = {
	id: string;
	nome: string;
	tel: string;
	cpf: string;
	email: string;
	senha: string;
};

abstract class Usuario {
	protected id: string;
	protected nome_completo: string;
	protected telefone: string;
	protected cpf: string;
	protected email: string;
	protected senha: string;

	constructor(dados: UsuarioDTO) {
		this.id = dados.id;
		this.nome_completo = dados.nome;
		this.telefone = dados.tel;
		this.cpf = dados.cpf;
		this.email = dados.email;
		this.senha = dados.senha;
	}

	public toJSON() {
		return {
			id: this.id,
			nome_completo: this.nome_completo,
			email: this.email,
			senha: this.senha,
			telefone: this.telefone,
			cpf: this.cpf,
		};
	}
}

export default Usuario;
