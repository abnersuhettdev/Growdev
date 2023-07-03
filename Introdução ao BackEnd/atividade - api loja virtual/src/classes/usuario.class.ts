// DTO - MODELO PARA GERAR UMA CLASSE
// MODELO DOS DADOS QUE SERÃO UTILIZADOS NO CONSTRUCTOR
export type UsuarioDTO = {
	id: string;
	nome_completo: string;
	telefone: string;
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
		this.nome_completo = dados.nome_completo;
		this.telefone = dados.telefone;
		this.cpf = dados.cpf;
		this.email = dados.email;
		this.senha = dados.senha;
	}

	public toJSON(): any {
		const objUsuario = {
			id: this.id,
			nome: this.nome_completo,
			telefone: this.telefone,
			cpf: this.cpf,
			email: this.email,
			senha: this.senha,
		};

		return objUsuario;
	}
}
export default Usuario;
