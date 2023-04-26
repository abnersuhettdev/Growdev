import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { database } from '../../database';

export interface RecadoTypes {
	titulo: string;
	recado: string;
	dia: string;
}

const Home: React.FC = () => {
	const [recado, setRecado] = useState<string>('');
	const [titulo, setTitulo] = useState<string>('');
	const [dia, setDia] = useState<string>('');
	const [data, setData] = useState<RecadoTypes[]>(database);

	const handleAddRecado = () => {
		const novoRecado: RecadoTypes = {
			titulo,
			recado,
			dia,
		};

		setData([...data, novoRecado]);

		console.log(data);
	};

	return (
		<>
			<Grid
				container
				spacing={4}
				marginTop={2}
				alignItems={'center'}
				justifyContent={'center'}
				xs={12}
			>
				<Grid item xs={12}>
					<TextField
						onChange={(e) => setRecado(e.currentTarget.value)}
						placeholder="Recado"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						onChange={(e) => setTitulo(e.currentTarget.value)}
						placeholder="Titulo do recado"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						onChange={(e) => setDia(e.currentTarget.value)}
						placeholder="dias"
					/>
				</Grid>
				<Grid item xs={12}>
					<Button onClick={handleAddRecado} variant="contained">
						Concluir
					</Button>
				</Grid>
				<Grid item xs={12}>
					{data.map((recado) => (
						<Box key={recado.titulo}>
							<Typography>{recado.titulo}</Typography>
							<Typography>{recado.recado}</Typography>
							<Typography>{recado.dia}</Typography>
						</Box>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
