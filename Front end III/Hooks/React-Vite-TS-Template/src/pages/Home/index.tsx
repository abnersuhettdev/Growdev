import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Alunos } from '../../components/Alunos';

export interface IAlunos {
	id: string;
	nome: string;
	sala: string;
}

const Home: React.FC = () => {
	const [nome, setNome] = useState('');

	const [sala, setSala] = useState('');

	const [alunos, setAlunos] = useState<IAlunos[]>([]);

	useEffect(() => {
		console.log(`Alunos => ${alunos}`);
	}, [alunos]);

	return (
		<>
			<Grid
				container
				justifyContent={'center'}
				alignItems={'center'}
				spacing={3}
			>
				<Grid item>
					<TextField
						onChange={(e) => setNome(e.target.value)}
						placeholder="Nome"
						value={nome}
					/>
				</Grid>
				<Grid item>
					<TextField
						onChange={(e) => setSala(e.target.value)}
						placeholder="Sala"
						value={sala}
					/>
				</Grid>
				<Grid item>
					<Button
						variant="contained"
						onClick={() => {
							const aluno: IAlunos = {
								id: (Math.random() * 1000).toString(),
								nome: nome,
								sala: sala,
							};
							setAlunos([...alunos, aluno]);
						}}
					>
						Postar
					</Button>
				</Grid>
				<Alunos setAlunos={setAlunos} alunos={alunos} />
			</Grid>
		</>
	);
};

export default Home;
