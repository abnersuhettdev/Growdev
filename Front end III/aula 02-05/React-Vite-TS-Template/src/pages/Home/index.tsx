import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CardList } from '../../components/CardList';
import { listaRecados as database } from '../../database';
import { IRecados } from '../../models/Recado';

const Home: React.FC = () => {
	const [titulo, setTitulo] = useState<string>('');
	const [conteudo, setConteudo] = useState<string>('');
	const [notas, setNotas] = useState<string>('');

	const [recados, setRecados] = useState<IRecados[]>([]);

	useEffect(() => {
		setRecados(JSON.parse(localStorage.getItem('lista') as string) ?? []);
	}, []);

	function handleAdd({ titulo, conteudo, notas }: IRecados) {
		const recado = {
			id: uuidv4(),
			titulo,
			conteudo,
			notas,
		};

		setRecados([recado, ...recados]);
		localStorage.setItem('lista', JSON.stringify(database));
	}

	return (
		<>
			<Grid
				container
				spacing={4}
				sx={{ paddingTop: 4 }}
				justifyContent={'center'}
			>
				<Grid item sx={{ display: 'flex' }} gap={1}>
					<TextField
						onChange={(e) => setTitulo(e.target.value)}
						placeholder="Titulo"
						value={titulo}
					/>

					<TextField
						onChange={(e) => setConteudo(e.target.value)}
						placeholder="Conteúdo"
						value={conteudo}
					/>

					<TextField
						onChange={(e) => setNotas(e.target.value)}
						placeholder="Notas"
						value={notas}
					/>
				</Grid>
				<Grid
					item
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Button
						onClick={() => handleAdd({ titulo, conteudo, notas })}
						variant="contained"
						sx={{ padding: 2 }}
					>
						Registrar
					</Button>
				</Grid>
			</Grid>
			<CardList recados={recados} />
		</>
	);
};

export default Home;
