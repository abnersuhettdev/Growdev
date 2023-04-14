import { Button, Grid, TextField, Typography } from '@mui/material';

import { Title } from '../../components/Title';

export const Login = () => {
	return (
		<>
			<Grid container justifyContent={'center'} spacing={4}>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={3}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<Title variant={'h3'} align="center">
						Login
					</Title>
				</Grid>

				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={3}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
				</Grid>

				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					lg={3}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
				</Grid>

				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					lg={3}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<Button variant="contained" color="secondary">
						Login!
					</Button>
				</Grid>

				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					lg={3}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<Typography variant={'subtitle1'} sx={{ color: 'red' }}>
						Não possui conta? Registre-se
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};
