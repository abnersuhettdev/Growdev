import express from "express";
import { ClientesController } from "./controllers";
import { validarCPF, validarDadosUsuario } from "./middlewares";

const app = express();

// torna desnecessario a utilizacao do JSON.parse() e JSON.stringify()
app.use(express.json());

// converte os codigos unicode enviados na rota para o respectivo caracter
// Ex: %20 => ' '
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => {
	console.log("Servidor rodando na porta 8080");
});

// AS DEFINIÇÕES DAS ROTAS
app.get("/", (request, response) => {
	return response.json("API LOJA VIRTUAL NO AR 🚀");
});

// ===============================================
// CLIENTES
const controllerClientes = new ClientesController();
// POST - CADASTRAR CLIENTE
app.post(
	"/clientes",
	validarDadosUsuario,
	validarCPF,
	controllerClientes.cadastrar
);

// GET - LISTAR CLIENTES
app.get("/listar", controllerClientes.listar);

// PUT - ATUALIZAR CLIENTES
app.put("/clientes/:idCliente", controllerClientes.atualizar);

// DELETE - EXCLUIR CLIENTES

// ===============================================
// ENDEREÇOS

// ===============================================
// PAGAMENTOS

// ===============================================
// PRODUTOS

// ===============================================
// CARRINHO
