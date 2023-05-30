import express, { Request, Response } from "express";
import { v4 } from "uuid";
import { transacoes, usuarios } from "./database";
import { Transacao, Usuario } from "./types";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log("Servidor iniciado"));

app.get("/", (request: Request, response: Response) => {
	return response.send("OK");
});

app.post("/users/signup", (request: Request, response: Response) => {
	const { email, password } = request.body;

	if (!email) {
		return response.status(400).json({
			message: "é preciso infromar o e-mail",
		});
	}

	if (!email.includes("@" && ".com")) {
		return response.status(400).json({
			message: "É preciso informar um email válido",
		});
	}

	if (!password || password.length < 6) {
		return response.status(400).json({
			message: "É preciso informar a senha",
		});
	}

	if (usuarios.some((usuario) => usuario.email === email)) {
		return response.status(400).json({
			message: "Já existe um usuario cadastrado com esse email",
		});
	}

	const novoUsuario: Usuario = {
		id: v4(),
		email,
		password,
	};

	usuarios.push(novoUsuario);

	return response.json({
		message: "ok, criado com sucesso!",
		dados: novoUsuario,
	});
});

app.get("/users", (request: Request, response: Response) => {
	const parametros = request.query;
	const emailBuscado = parametros.email as string;

	if (!emailBuscado) {
		return response.status(200).json({
			message: "OK, LISTA DE USUARIOS",
			dados: usuarios,
		});
	}

	const listaFiltrada = usuarios.filter((usuario) =>
		usuario.email.includes(emailBuscado)
	);

	return response.status(200).json({
		message: "OK, LISTA DE USUARIOS",
		dados: listaFiltrada,
		parametros: parametros,
	});
});

app.post("/users/login", (request: Request, response: Response) => {
	const { email, senha } = request.body;

	if (!email) {
		return response.status(400).json({
			message: "é preciso informar um email",
		});
	}

	if (!senha) {
		return response.status(400).json({
			message: "É preciso informar a senha",
		});
	}

	const usuarioEncontrado = usuarios.find(
		(usuario) => usuario.email === email && usuario.password === senha
	);

	if (!usuarioEncontrado) {
		return response.status(404).json({
			message: "Email ou senha inválidos. Conta de usuario não encontrada",
		});
	}

	return response.json({
		message: "Ok, login efetuado com sucesso!",
		usuarioAutorizado: usuarioEncontrado.email,
	});
});

//Transações
//Criar
app.post(
	"/users/:emailUsuario/transacoes/criar",
	(request: Request, response: Response) => {
		// ROUTE PARAMS - ELE É OBRIGATORIO
		//TRANSACAO DEVE SER CRIADA PARA O USUARIO QUE POSSUI O EMAIL INFORMADO NA ROTA
		const { emailUsuario } = request.params;
		const { type, description, value } = request.body;

		//validar se o usuario com o email informado existe
		if (!usuarios.some((usuario) => usuario.email === emailUsuario)) {
			return response.status(404).json({
				message: `Nenhum usuario encontrado com o email ${emailUsuario}`,
			});
		}

		// daqui para baixo é validar que os dados enviados para cadastro da transação
		if (!type || (type !== "income" && type !== "outcome")) {
			return response.status(400).json({
				message:
					"É necessario informar o tipo da transação. Envie 'income' para entrada ou 'outcome' para saídas",
			});
		}

		if (!description || !description.length) {
			return response.status(400).json({
				message: "É necessário informar a descrição da transação",
			});
		}

		if (!value || typeof value !== "number") {
			return response.status(400).json({
				message: "É necessário informar o valor da transação em formato numérico",
			});
		}

		// Tudo ok para cadastrar a transação
		const novaTransacao: Transacao = {
			id: v4(),
			description,
			type,
			value,
			createdAt: new Date().toISOString().split("T")[0],
			createdBy: emailUsuario,
		};

		transacoes.push(novaTransacao);

		return response.json({
			ok: true,
			dados: novaTransacao,
		});
	}
);

//Listar
app.get(
	"/users/:emailUsuario/transacoes/listar",
	(request: Request, response: Response) => {
		const { emailUsuario } = request.params;

		//validar se o usuario com o email informado existe
		if (!usuarios.some((usuario) => usuario.email === emailUsuario)) {
			return response.status(404).json({
				message: `Nenhum usuario encontrado com o email ${emailUsuario}`,
			});
		}

		const listaFiltrada = transacoes.filter(
			(transacao) => transacao.createdBy === emailUsuario
		);

		return response.status(200).json({
			message: `Transacoes do usuario ${emailUsuario}`,
			dados: listaFiltrada,
		});
	}
);

//aTUALIZAR

app.put(
	"/users/:emailUsuario/transacoes/atualizar/:idTransacao",
	(request: Request, response: Response) => {
		const { emailUsuario, idTransacao } = request.params;
		const { type, description, value } = request.body;

		//validar se o usuario com o email informado existe
		if (!usuarios.some((usuario) => usuario.email === emailUsuario)) {
			return response.status(404).json({
				message: `Nenhum usuario encontrado com o email ${emailUsuario}`,
			});
		}

		const indiceEncontrado = transacoes.findIndex(
			(transacao) => transacao.id === idTransacao
		);

		if (indiceEncontrado < 0) {
			return response.status(404).json({
				message: `Nenhuma Transacao encontrada com o id Informado ${idTransacao}`,
			});
		}

		if (type && type !== "income" && type !== "outcome") {
			return response.status(400).json({
				message:
					"Formato do tipo da transação inválido. Informe 'income' ou 'outcome'.",
			});
		}

		if (description && !description?.length) {
			return response.status(400).json({
				message:
					"É necessário preencher o campo descrição com ao menos um caracter para atualizar seu valor",
			});
		}

		if (isNaN(Number(value)) || !Number(value)) {
			return response.status(400).json({
				message: "É necessário informar o valor da transação em formato numérico",
			});
		}

		// O QUE VAI SER LIBERADO PARA ATUALIZAÇÃO DA TRANSACAO?
		transacoes[indiceEncontrado] = {
			...transacoes[indiceEncontrado],
			type: type || transacoes[indiceEncontrado].type,
			value: value || transacoes[indiceEncontrado].value,
			description: description || transacoes[indiceEncontrado].description,
		};

		return response.status(200).json({
			message: "Transação atualizada com sucesso",
			dado: transacoes[indiceEncontrado],
		});
	}
);

//Deletar
app.delete(
	"/users/:emailUsuario/transacoes/deletar/:idTransacao",
	(request: Request, response: Response) => {
		const { emailUsuario, idTransacao } = request.params;

		//validar se o usuario com o email informado existe
		if (!usuarios.some((usuario) => usuario.email === emailUsuario)) {
			return response.status(404).json({
				message: `Nenhum usuario encontrado com o email ${emailUsuario}`,
			});
		}

		const indiceEncontrado = transacoes.findIndex(
			(transacao) =>
				transacao.createdBy === emailUsuario && transacao.id === idTransacao
		);

		if (indiceEncontrado < 0) {
			return response.status(404).json({
				message: `Nenhuma Transacao encontrada com o id Informado ${idTransacao}`,
			});
		}

		const [itemDeletado] = transacoes.splice(indiceEncontrado, 1);

		return response.status(200).json({
			message: "Transação excluida com sucesso",
			itemDeletado: itemDeletado,
		});
	}
);
