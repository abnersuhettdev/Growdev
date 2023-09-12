import cors from 'cors';
import express from 'express';
import { rotasApp } from '.';

// config de middlewares
export function criaServidor() {
	const app = express();
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cors());

	rotasApp(app);

	return app;
}
