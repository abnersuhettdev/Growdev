import { AccountCircle } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<>
			<Grid container justifyContent={'space-between'} padding="30px">
				<Grid item>
					<Button
						variant="contained"
						onClick={() => {
							navigate('/register');
						}}
					>
						Cadastrar
					</Button>
					<Button
						variant="contained"
						onClick={() => {
							navigate('/register');
						}}
					>
						Login
					</Button>
					<Button
						variant="contained"
						onClick={() => {
							navigate('/');
						}}
					>
						Home
					</Button>
				</Grid>
				<Grid item>
					<AccountCircle fontSize="large"></AccountCircle>
				</Grid>
			</Grid>
		</>
	);
};
