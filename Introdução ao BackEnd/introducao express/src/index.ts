import express, { Request, Response } from "express";
import { v4 } from "uuid";
import { usuarios } from "./database";
import { Usuario } from "./types";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log("Servidor iniciado"));

app.get("/", (request: Request, response: Response) => {
	return response.send("OK");
});

app.post("/users", (request: Request, response: Response) => {
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
