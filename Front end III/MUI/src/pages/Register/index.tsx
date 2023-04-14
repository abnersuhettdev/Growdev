import { Button, Grid, TextField } from '@mui/material';

import { Title } from '../../components/Title';

export const Register = () => {
	return (
		<>
			<Grid container spacing={3} direction={'column'}>
				<Grid item xs={12}>
					<Title variant={'h1'} align="center">
						Registre-se
					</Title>
				</Grid>

				<Grid
					item
					xs={12}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<TextField variant="outlined" />
				</Grid>

				<Grid
					item
					xs={12}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<TextField variant="outlined" />
				</Grid>

				<Grid
					item
					xs={12}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<TextField variant="outlined" />
				</Grid>

				<Grid
					item
					sm={12}
					md={12}
					lg={12}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<Button variant="contained" color="primary">
						Cadastre-se
					</Button>
				</Grid>
			</Grid>
		</>
	);
};
