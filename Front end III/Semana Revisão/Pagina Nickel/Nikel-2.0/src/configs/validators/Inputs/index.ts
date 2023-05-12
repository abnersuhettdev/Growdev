export const emailValidator = (email: string) => {
	if (!email.includes('@' || '.com')) {
		throw new Error('Email Inválido');
	}
};

export const passwordValidator = (password: string) => {
	if (!password || password.length < 8) {
		throw new Error('Senha Inválida');
	}
};
