export default interface TransactionsModel {
	id: string;
	value: number;
	description: string;
	createdAt: string;
	type: 'income' | 'outcome';
	createdBy: string;
}
