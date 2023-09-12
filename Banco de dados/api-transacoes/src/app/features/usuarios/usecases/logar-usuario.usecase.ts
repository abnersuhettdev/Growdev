import { CadastrarLogarUsuarioDTO, RetornoCadastroLoginUsuario } from '.';
import { UsuariosRepository } from '../repositories';

export class LogarUsuario {
	public async execute(dadosUsuario: CadastrarLogarUsuarioDTO): Promise<RetornoCadastroLoginUsuario> {
		// 1 - email e senha devem corresponder a um registro dentro da lista de usuarios
		const repository = new UsuariosRepository();
		const usuarioEncontrado = await repository.autenticacaoLogin(dadosUsuario);

		if (!usuarioEncontrado) {
			return {
				sucesso: false,
				mensagem: 'Usuário não autorizado.',
			};
		}

		return {
			sucesso: true,
			mensagem: 'Usuário autorizado.',
			dados: usuarioEncontrado.toJSON(),
		};
	}
}
