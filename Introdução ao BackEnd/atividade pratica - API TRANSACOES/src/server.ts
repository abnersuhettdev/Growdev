import express from "express";
import { User } from "./classes/user.class";

const app = express();
const database: Array<User> = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/users", (req, res) => {
	const { name, email, cpf } = req.query;

	let filteredList = database;

	if (name) {
		filteredList = filteredList.filter((user) => user.toJson().name === name);
	}

	if (email) {
		filteredList = filteredList.filter((user) => user.toJson().email === email);
	}

	if (cpf) {
		filteredList = filteredList.filter((user) => user.toJson().cpf === cpf);
	}

	res.send(
		filteredList.map((element) => ({
			...element.toJson(),
			transactions: undefined,
		}))
	);
});

app.post("/users", (req, res) => {
	const { name, cpf, email, age } = req.body;

	const cpfExists = database.some((users) => users.toJson().cpf === cpf);

	if (cpfExists) {
		return res.status(400).send({ message: "Usuario Já existente" });
	}

	const newUser = new User({ age, cpf, email, name });
	database.push(newUser);

	return res.send(database.map((element) => element.toJson()));
});

app.get("/users/:id", (req, res) => {
	const id = req.params.id;

	const user = database.find((user) => user.toJson().id === id);

	const returnUser = { ...user?.toJson(), transactions: undefined };

	return res.send(returnUser);
});

app.put("/users/:id", (req, res) => {
	const id = req.params.id;
	const { name, email, age } = req.body;

	const userEdited = database.find((user) => user.toJson().id === id);

	if (!userEdited) {
		return res.status(404).send({ message: "usuario não encontrado" });
	}

	userEdited.editUser({ name, email, age });

	return res.send(userEdited.toJson());
});

app.delete("/users/:id", (req, res) => {
	const id = req.params.id;

	const indiceUsuario = database.findIndex((user) => user.toJson().id === id);

	if (indiceUsuario === -1) {
		return res.status(404).send({ message: "usuario não encontrado" });
	}

	database.splice(indiceUsuario, 1);
	return res.send(database.map((element) => element));
});

app.listen(3000, () => console.log("Servidor iniciado"));
