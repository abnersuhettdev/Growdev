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
import { useState } from 'react';

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
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogged, setIsLogged] = useState(false);

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

	const save = () => {
		emailValidator(email);
		passwordValidator(password);

		const user: IUser = {
			id: new Date().getTime().toString(),
			email,
			password,
		};

		console.log(user);
	};

	return (
		<Box
			component={'form'}
			sx={{ maxWidth: '80%' }}
			onSubmit={(ev) => {
				ev.preventDefault();
				save();
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						label={'Email'}
						helperText={'Utilize seu email para realizar o login'}
						onChange={(ev) => setEmail(ev.currentTarget.value)}
						fullWidth
					></TextField>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label={'Senha'}
						fullWidth
						type="password"
						onChange={(ev) => setPassword(ev.currentTarget.value)}
					></TextField>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox />}
						label={'Permacer logado'}
						onChange={loggedUser}
						value={isLogged}
					></FormControlLabel>
				</Grid>
				<Grid item xs={12}>
					<Button
						sx={{
							display: 'block',
							margin: '0 auto',
							width: '135px',
							'&:hover': {
								backgroundColor: '#4c79c3',
							},
						}}
						color="primary"
						variant="contained"
						type="submit"
						size="large"
					>
						Entrar
					</Button>
				</Grid>
				<Grid item xs={12} textAlign={'center'}>
					<Typography variant="caption" textAlign={'center'}>
						Ainda não tem uma conta?{' '}
						<Link
							sx={{
								textDecoration: 'none',
							}}
						>
							Criar conta
						</Link>
					</Typography>
				</Grid>
			</Grid>

			<SnackBarComp message="message teste" isError={true} />
		</Box>
	);
};
