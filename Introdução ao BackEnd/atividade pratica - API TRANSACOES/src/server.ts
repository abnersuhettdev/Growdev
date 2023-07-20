import express from "express";
import { Transaction } from "./classes/transaction.class";
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

app.post("/user/:userId/transactions", (req, res) => {
	const { userId } = req.params;
	const { title, value, type } = req.body;

	const foundUser = database.find((user) => user.toJson().id === userId);

	if (!foundUser) {
		return res.status(404).send({ message: "Usuário não encontrado" });
	}

	if (!title || !value || !type) {
		return res
			.status(400)
			.send({ message: "Insira os dados da transação para cadastra-la" });
	}

	if (typeof value !== "number") {
		return res.status(400).send({ message: "Insira um valor válido" });
	}

	if (type !== "income" && type !== "outcome") {
		return res
			.status(400)
			.send({ message: "Insira um tipo de transação válida" });
	}

	const transaction = new Transaction(title, value, type);

	foundUser.toJson().transactions.push(transaction);

	return res.status(200).json({
		message: "Transação criada com sucesso",
	});
});

app.get("/user/:userId/transactions/:id", (req, res) => {
	const { userId, id } = req.params;

	const foundUser = database.find((user) => user.toJson().id === userId);

	if (!foundUser) {
		return res.status(404).send({ message: "Usuário não encontrado" });
	}

	const foundTransaction = foundUser
		.toJson()
		.transactions.find((t) => t.id == id);

	if (!foundTransaction) {
		return res.status(404).send({ message: "Transação não encontrada" });
	}

	return res.status(200).json({
		message: "Transação encontrada com sucesso",
		transação: foundTransaction,
	});
});

app.get("/user/:userId/transactions", (req, res) => {
	const { userId } = req.params;

	const foundUser = database.find((user) => user.toJson().id === userId);

	if (!foundUser) {
		return res.status(404).send({ message: "Usuário não encontrado" });
	}

	return res.status(200).json({
		message: "Transações encontrada com sucesso",
		transacoes: foundUser.toJson().transactions,
	});
});

app.put("/user/:userId/transactions/:id", (req, res) => {
	const { userId, id } = req.params;
	const { title, value, type } = req.body;

	const foundUser = database.find((user) => user.toJson().id === userId);

	if (!foundUser) {
		return res.status(404).send({ message: "Usuário não encontrado" });
	}

	const foundTransaction = foundUser
		.toJson()
		.transactions.find((t) => t.id == id);

	if (!foundTransaction) {
		return res.status(404).send({ message: "Transação não encontrada" });
	}

	if (!title || !value || !type) {
		return res
			.status(400)
			.send({ message: "Insira os dados da transação para cadastra-la" });
	}

	if (typeof value !== "number") {
		return res.status(400).send({ message: "Insira um valor válido" });
	}

	if (type !== "income" && type !== "outcome") {
		return res
			.status(400)
			.send({ message: "Insira um tipo de transação válida" });
	}

	foundTransaction.editTransaction({ title, type, value });

	return res.status(200).json({
		message: "Transação editada com sucesso",
		transação: foundTransaction,
	});
});

app.delete("/users/:userId/transactions/:id", (req, res) => {
	const { userId, id } = req.params;

	const foundUser = database.find((user) => user.toJson().id === userId);

	if (!foundUser) {
		return res.status(404).send({ message: "Usuário não encontrado" });
	}

	try {
		foundUser.deleteTransaction(id);
		return res.status(200).send({ message: "Transação deletada com sucesso" });
	} catch (error) {
		return res.status(404).send({ message: "Transação não encontrada" });
	}
});

app.listen(3000, () => console.log("Servidor iniciado"));
