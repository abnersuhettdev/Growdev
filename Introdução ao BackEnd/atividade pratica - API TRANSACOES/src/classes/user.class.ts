import { v4 as gerarID } from "uuid";
import { Transaction } from "./transaction.class";

export interface ICreateUser {
	name: string;
	cpf: string;
	email: string;
	age: string;
}

interface IUser {
	id: string;
	name: string;
	cpf: string;
	email: string;
	age: string;
	transactions: Array<Transaction>;
}

interface IEditedUser {
	name?: string;
	email?: string;
	age?: string;
}

export class User {
	#id: string;
	#name: string;
	#cpf: string;
	#email: string;
	#age: string;
	#transactions: Array<Transaction> = [];

	constructor(user: ICreateUser) {
		this.#id = gerarID();
		this.#name = user.name;
		this.#age = user.age;
		this.#cpf = user.cpf;
		this.#email = user.email;
	}

	toJson(): IUser {
		return {
			id: this.#id,
			name: this.#name,
			cpf: this.#cpf,
			email: this.#email,
			age: this.#age,
			transactions: this.#transactions,
		};
	}

	editUser(editedUser: IEditedUser) {
		this.#name = editedUser.name ?? this.#name;
		this.#email = editedUser.email ?? this.#email;
		this.#age = editedUser.age ?? this.#age;
	}
}
