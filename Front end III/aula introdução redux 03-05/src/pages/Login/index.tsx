import { ArrowForwardIos } from '@mui/icons-material';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectUser, setUser } from '../../store/modules/User/userSlice';

export const Login: React.FC = () => {
	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (user.isLogged) {
			navigate('/contacts');
		}
	}, [navigate, user]);

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		console.log(ev.currentTarget.email.value);

		if (!ev.currentTarget.email.value.includes('.com')) {
			alert('digite um email válido');
			return;
		}
		dispatch(setUser({ email: ev.currentTarget.email.value }));
		setTimeout(() => {
			navigate('/contacts');
		}, 2000);
	};

	return (
		<Container
			sx={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			component={'main'}
		>
			<Box component={'section'}>
				<Typography component={'h1'} variant="h4">
					Bem vindo Faça login!
				</Typography>
				<Box component={'form'} onSubmit={handleSubmit} marginY={4}>
					<TextField
						id="email"
						name="email"
						type="email"
						variant="outlined"
						sx={{
							display: 'block',
						}}
						fullWidth
						placeholder="email"
						required
					/>
					<Button
						variant="contained"
						type="submit"
						size="large"
						startIcon={<ArrowForwardIos />}
						sx={{
							marginTop: 2,
							height: '56px',
						}}
						fullWidth
					>
						Acessar
					</Button>
				</Box>
			</Box>
		</Container>
	);
};
