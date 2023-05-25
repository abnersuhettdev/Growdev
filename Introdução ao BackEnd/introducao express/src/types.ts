interface Usuario {
	id: string;
	email: string;
	password: string;
}

interface Transacao {
	id: string;
	type: "income" | "outcome";
	description: string;
	value: number;
	createdAt: string;
	createdBy: string;
}

export { Usuario, Transacao };
