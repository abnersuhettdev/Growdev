import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	selectUserLogged,
	setUserLogged,
} from '../../store/modules/users/userLoggedState';

const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	const usuarioLogado = useAppSelector(selectUserLogged);

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		console.log(ev.currentTarget.email.value);
		console.log(ev.currentTarget.password.value);
		dispatch(
			setUserLogged({
				email: ev.currentTarget.email.value,
				password: ev.currentTarget.password.value,
			}),
		);
	};
	return (
		<div>
			{usuarioLogado.isLogged && (
				<p>Bem vindo {usuarioLogado.password}</p>
			)}

			<form onSubmit={handleSubmit}>
				<input type="text" name="email" />
				<input type="text" name="password" />
				<input type="submit" name="email" />
			</form>
		</div>
	);
};

export default Home;
