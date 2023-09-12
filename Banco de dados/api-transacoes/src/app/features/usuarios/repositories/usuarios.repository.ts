import { DatabaseConnection } from '../../../../main/database';
import { Endereco, Usuario } from '../../../models';
import { UsuarioEntity } from '../../../shared/database/entities';
import { CadastrarLogarUsuarioDTO } from '../usecases';

export class UsuariosRepository {
	private _manager = DatabaseConnection.connection.manager;

	public async verificarSeExisteUsuarioPorEmail(email: string): Promise<boolean> {
		const usuarioEncontrado = await this._manager.findOne(UsuarioEntity, {
			where: { email },
			relations: {
				endereco: true,
			},
		});

		return !!usuarioEncontrado;
	}

	public async cadastrar(dados: CadastrarLogarUsuarioDTO): Promise<Usuario> {
		const { email, senha } = dados;

		const newUser = this._manager.create(UsuarioEntity, { email, senha });
		const usuarioCriado = await this._manager.save(newUser);

		return this.entityToModel(usuarioCriado);
	}

	public async autenticacaoLogin(dados: CadastrarLogarUsuarioDTO): Promise<Usuario | undefined> {
		const { email, senha } = dados;

		const usuarioEncontrado = await this._manager.findOne(UsuarioEntity, {
			where: { email, senha },
			relations: {
				endereco: true,
			},
		});

		if (!usuarioEncontrado) return undefined;

		return this.entityToModel(usuarioEncontrado);
	}

	public async buscaUsuarioPorID(idUsuario: string): Promise<Usuario | undefined> {
		const usuarioEncontrado = await this._manager.findOne(UsuarioEntity, {
			where: {
				id: idUsuario,
			},
			relations: {
				endereco: true,
			},
		});

		// const usuarios = await usuarioRepo.find(UsuarioEntity, {
		// 	where: {
		// 		email: ILike('leticia'),
		// 	},
		// });

		if (!usuarioEncontrado) return undefined;

		return this.entityToModel(usuarioEncontrado);
	}

	// TRANSFORMA RESULTADO DA BUSCA EM UMA INSTANCIA DA MODEL
	private entityToModel(dadosDB: UsuarioEntity): Usuario {
		const { endereco } = dadosDB;

		if (endereco) {
			const enderecoModel = new Endereco(
				endereco.id,
				endereco.logradouro,
				endereco.cidade,
				endereco.uf,
				endereco.criadoEm,
				endereco.numero
			);

			return new Usuario(dadosDB.id, dadosDB.email, dadosDB.senha, enderecoModel);
		}

		return new Usuario(dadosDB.id, dadosDB.email, dadosDB.senha);
	}
}
