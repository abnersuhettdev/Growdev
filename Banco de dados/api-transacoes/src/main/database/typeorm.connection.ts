import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { typeorm } from '../config';

export class DatabaseConnection {
	private static _connection: DataSource | null = null;

	public static get connection(): DataSource {
		if (!this._connection) {
			throw new Error('O database não tá inicializado');
		}

		return this._connection;
	}

	public static async connect() {
		if (!this._connection) {
			this._connection = await typeorm.initialize();
			console.log('Banco de dados conectado');
		}
	}
}
