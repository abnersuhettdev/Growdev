import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SnackBarComp } from '../../../../components/SnackBar';
import {
	emailValidator,
	passwordValidator,
} from '../../../../configs/validators/Inputs';

interface IUser {
	id?: string;
	email: string;
	password: string;
}

export const LoginForm = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState('');
	const [isLogged, setIsLogged] = useState<boolean>(false);

	const [isError, setIsError] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');

	const [users, setUsers] = useState<any>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const users = JSON.parse(localStorage.getItem('users') ?? '[]');
		setUsers(users);
		localStorage.setItem('users', JSON.stringify(users));

		const logged = localStorage.getItem('isLogged');

		if (JSON.parse(logged!)) {
			navigate('/home');
		}
	}, []);

	const loggedUser = (
		event: React.SyntheticEvent<Element, Event>,
		checked: boolean,
	) => {
		if (checked) {
			setIsLogged(true);
		} else {
			setIsLogged(false);
		}
	};

	const persistLog = () => {
		if (isLogged) {
			localStorage.setItem('isLogged', JSON.stringify(true));
		}
	};

	const verifySnack = (emailIsValid: boolean, passwordIsValid: boolean) => {
		if (emailIsValid === false) {
			setMessage('Erro ao tentar logar.');
			setIsError(!emailIsValid);
			return;
		}

		if (passwordIsValid === false) {
			setMessage('Erro ao tentar logar.');
			setIsError(!passwordIsValid);
			return;
		}
	};

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setIsError(false);
	};

	const save = () => {
		const emailIsValid = emailValidator(email);
		const passwordIsValid = passwordValidator(password);

		verifySnack(emailIsValid, passwordIsValid);

		const user: IUser = {
			id: (Math.random() * 10).toString(),
			email: email,
			password: password,
		};

		if (emailIsValid && passwordIsValid) {
			users.push(user);
			localStorage.setItem('users', JSON.stringify(users));
			persistLog();

			navigate('/home');
		}
	};

	return (
		<Box
			component={'form'}
			sx={{ maxWidth: '80%' }}
			onSubmit={(event) => {
				event.preventDefault();
				save();
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						label="E-mail"
						helperText="Utilize seu e-mail para realizar o login."
						fullWidth
						onChange={(event) => {
							setEmail(event.currentTarget.value);
						}}
						value={email}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Senha"
						fullWidth
						onChange={(event) => {
							setPassword(event.currentTarget.value);
						}}
						type="password"
						value={password}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox />}
						label="Permanecer logado?"
						onChange={loggedUser}
						value={isLogged}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						type="submit"
						variant="contained"
						sx={{
							display: 'block',
							margin: '0 auto',
							width: '130px',
							'&:hover': {
								backgroundColor: '#4c79c3',
							},
						}}
						size="large"
					>
						Entrar
					</Button>
				</Grid>
				<Grid item xs={12} textAlign={'center'}>
					<Typography variant={'caption'} sx={{ fontSize: '14px' }}>
						Ainda não tem conta?{' '}
						<Link sx={{ textDecoration: 'none' }}>Criar uma!</Link>
					</Typography>
				</Grid>
			</Grid>
			<SnackBarComp
				handleClose={handleClose}
				message={message}
				isError={isError}
			/>
		</Box>
	);
};
