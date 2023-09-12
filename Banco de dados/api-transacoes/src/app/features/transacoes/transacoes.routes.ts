import express from 'express';
import { TransacaoController } from './controllers';
import {
	validarDataTransacao,
	validarEnvioDadosTransacao,
	validarIdUsuario,
	validarTipoTransacao,
	validarValorETipoTransacao,
} from './validators';

const routerTransacao = express.Router();

routerTransacao.post(
	'/',
	validarIdUsuario,
	validarEnvioDadosTransacao,
	validarValorETipoTransacao,
	TransacaoController.cadastrar
);

routerTransacao.get('/', validarIdUsuario, validarTipoTransacao, TransacaoController.listarTodas);

routerTransacao.get('/:idTransacao', validarIdUsuario, TransacaoController.listarPorID);

routerTransacao.put(
	'/:idTransacao',
	validarIdUsuario,
	validarValorETipoTransacao,
	validarDataTransacao,
	TransacaoController.atualizar
);

routerTransacao.delete('/:idTransacao', validarIdUsuario, TransacaoController.deletar);

export default routerTransacao;
