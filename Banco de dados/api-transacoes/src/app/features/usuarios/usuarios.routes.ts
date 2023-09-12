import express from 'express';
import { UsuariosController } from './controllers';
import { validarDadosUsuario } from './validators';

const routerUsuario = express.Router();

routerUsuario.post('/cadastro', validarDadosUsuario, UsuariosController.cadastrar);
routerUsuario.post('/login', validarDadosUsuario, UsuariosController.logar);

export default routerUsuario;
