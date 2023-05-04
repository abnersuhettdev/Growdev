import { Delete, Edit, FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { IContato } from '../../types';
import { MyModal } from '../Modal';

interface MyCardProps {
	contato: IContato;
	setListaContatos: React.Dispatch<React.SetStateAction<IContato[]>>;
}

export const MyCard: React.FC<MyCardProps> = ({
	contato,
	setListaContatos,
}) => {
	const [open, setOpen] = useState(false);
	const [contexto, setContexto] = useState<'update' | 'delete'>('delete');

	const handleFavorite = () => {
		setListaContatos((prev) => {
			// const listaAntigaAux = [...prev];
			// listaAntigaAux.forEach((item) => {
			// 	if (item.email === contato.email) {
			// 		item.favorito = !item.favorito;
			// 	}
			// });
			// return listaAntigaAux;
			const copiaLista = prev.map((item) => {
				if (item.email === contato.email) {
					return {
						...item,
						favorito: !item.favorito,
					};
				}
				return item;
			});

			return copiaLista;
		});
	};

	const handleDelete = () => {
		alert(`Deletar  ${contato.nome}`);
	};

	const handleUpdate = () => {
		alert(`Deletar  ${contato.nome}`);
	};

	return (
		<>
			<Card>
				<CardHeader title={contato.nome} subheader={contato.criadoEm} />
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Email - {contato.email}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Telefone - {contato.telefone}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton
						aria-label="toggle favorite"
						onClick={handleFavorite}
					>
						{contato.favorito === true ? (
							<FavoriteIcon color="error" />
						) : (
							<FavoriteBorder />
						)}
					</IconButton>
					<IconButton onClick={handleDelete} aria-label="delete data">
						<Delete />
					</IconButton>
					<IconButton onClick={handleUpdate} aria-label="update data">
						<Edit />
					</IconButton>
				</CardActions>
			</Card>

			<MyModal
				aberto
				contexto=""
				fecharModal={() => setOpen(true)}
				funcaoModificadora={}
			/>
		</>
	);
};
