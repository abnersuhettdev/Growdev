import { Add } from '@mui/icons-material';
import { Fab, Grid } from '@mui/material';
import React, { useState } from 'react';

import ResponsiveAppBar from '../../components/Appbar';
import { MyCard } from '../../components/Card';
import { MyModal } from '../../components/Modal';
import { IContato } from '../../types';

const dataMock: IContato[] = [
	{
		nome: 'João',
		email: 'joao@teste.com',
		favorito: false,
		telefone: '24 993129149',
		criadoEm: new Date().toLocaleString('pt-Br', { dateStyle: 'long' }),
	},
	{
		nome: 'Pedro',
		email: 'pedro@teste.com',
		favorito: true,
		telefone: '24 99993180',
		criadoEm: new Date().toLocaleString('pt-Br'),
	},
	{
		nome: 'Gabriel',
		email: 'gabriel@teste.com',
		favorito: true,
		telefone: '24 91536585',
		criadoEm: new Date().toLocaleString('pt-Br'),
	},
];

const Home: React.FC = () => {
	const [listaContato, setListaContatos] = useState<IContato[]>(dataMock);
	const [open, setOpen] = useState(false);

	return (
		<>
			<ResponsiveAppBar />
			<Grid marginX={2} container spacing={2} marginY={2}>
				{listaContato.map((item) => (
					<Grid key={item.email} item xs={10} sm={6} md={3}>
						<MyCard
							setListaContatos={setListaContatos}
							contato={item}
						/>
					</Grid>
				))}
			</Grid>

			<Fab
				color="primary"
				aria-label="add"
				sx={{ position: 'fixed', right: '30px', bottom: '30px' }}
				onClick={() => setOpen(true)}
			>
				<Add />
			</Fab>

			<MyModal
				funcaoModificadora={setListaContatos}
				aberto={open}
				contexto="create"
				fecharModal={() => setOpen(false)}
			/>
		</>
	);
};

export default Home;
