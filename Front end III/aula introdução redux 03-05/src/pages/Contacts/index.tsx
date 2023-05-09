import { Add } from '@mui/icons-material';
import { Fab, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ResponsiveAppBar from '../../components/Appbar';
import { MyCard } from '../../components/Card';
import { MyModal } from '../../components/Modal';
import { useAppSelector } from '../../store/hooks';
import { selectAllContacts } from '../../store/modules/Contacts/contatosSlice';
import { selectUser } from '../../store/modules/User/userSlice';
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

const Contacts: React.FC = () => {
	const [listaContato, setListaContatos] = useState<IContato[]>(dataMock);
	const [open, setOpen] = useState(false);

	const user = useAppSelector(selectUser);
	const contatos = useAppSelector(selectAllContacts);
	const navigate = useNavigate();
	useEffect(() => {
		if (!user.isLogged) {
			navigate('/');
		}
	}, [navigate, user]);

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

export default Contacts;
