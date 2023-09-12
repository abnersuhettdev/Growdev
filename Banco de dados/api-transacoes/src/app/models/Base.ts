export abstract class Base {
	constructor(protected _id: string) {}

	public toJSON() {
		// a lógica de execução vai ficar nas subclasses
	}
}
