import { v4 as gerarID } from "uuid";

export type TransactionType = "income" | "outcome";

export interface EditedTransaction {
	title?: string;
	value?: number;
	type?: TransactionType;
}

export class Transaction {
	protected _id: string;
	protected title: string;
	protected value: number;
	protected type: TransactionType;

	constructor(title: string, value: number, type: TransactionType) {
		this._id = gerarID();
		this.title = title;
		this.value = value;
		this.type = type;
	}

	public get id(): string {
		return this._id;
	}

	editTransaction(transaction: EditedTransaction) {
		if (transaction.title) {
			this.title = transaction.title;
		}

		if (transaction.type) {
			this.type = transaction.type;
		}

		if (transaction.value) {
			this.value = transaction.value;
		}
	}
}
