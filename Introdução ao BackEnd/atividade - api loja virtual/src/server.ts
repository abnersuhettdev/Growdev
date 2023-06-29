import express from "express";
import { cadastrarCliente } from "./controllers";
import { validarCPF, validarDadosUsuario } from "./middlewares/";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => console.log("Servidor iniciado"));

app.get("/", (req, res) => {
	return res.send("ok");
});

app.post("/clientes", validarDadosUsuario, validarCPF, cadastrarCliente);
