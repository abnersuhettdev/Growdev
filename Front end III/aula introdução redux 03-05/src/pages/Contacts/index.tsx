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

const Contacts: React.FC = () => {
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
			<Grid paddingX={2} container spacing={2} marginY={2}>
				{contatos
					.filter((contato) => contato.criadoPor === user.email)
					.map((item) => (
						<Grid key={item.email} item xs={10} sm={6} md={3}>
							<MyCard contato={item} />
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
				aberto={open}
				contexto="create"
				fecharModal={() => setOpen(false)}
			/>
		</>
	);
};

export default Contacts;
