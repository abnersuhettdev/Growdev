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

export const LoginForm = () => {
	return (
		<Box component={'form'}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						label={'Email'}
						helperText={'Utilize seu email para realizar o login'}
						fullWidth
					></TextField>
				</Grid>
				<Grid item xs={12}>
					<TextField label={'Senha'} fullWidth></TextField>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox />}
						label={'Permacer logado'}
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
		</Box>
	);
};
