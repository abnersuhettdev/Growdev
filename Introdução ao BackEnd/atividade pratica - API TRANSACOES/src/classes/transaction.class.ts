import { v4 as gerarID } from "uuid";

export class Transaction {
	protected id: string;
	protected title: string;
	protected value: number;
	protected type: string;

	constructor(title: string, value: number, type: string) {
		this.id = gerarID();
		this.title = title;
		this.value = value;
		this.type = type;
	}
}
