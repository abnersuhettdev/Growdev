/* eslint-disable react/prop-types */
import { Delete, Edit, FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { Contexto, IContato } from '../../types';
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
	const [contexto, setContexto] = useState<Contexto>('create');

	const handleFavorite = () => {
		setListaContatos((prev) => {
			// const listaAntigaAux = [...prev];
			// listaAntigaAux.forEach((item) => {
			// 	if (item.email === contato.email) {
			// 		item.favorito = !item.favorito;
			// 	}
			// });
			// return listaAntigaAux;
			return prev.map((item) => {
				if (item.email === contato.email) {
					return {
						...item,
						favorito: !item.favorito,
					};
				}
				return item;
			});
		});
	};

	const handleClick = (context: Contexto) => {
		setContexto(context);
		setOpen(true);
	};

	return (
		<>
			<Card>
				<CardHeader title={contato.nome} subheader={contato.criadoEm} />
				<CardContent>
					<Typography variant="body2" color="text.primary">
						Email - {contato.email}
					</Typography>
					<Typography variant="body2" color="text.primary">
						Telefone - {contato.telefone}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton
						aria-label="toggle favorite"
						onClick={handleFavorite}
					>
						{contato.favorito ? (
							<FavoriteIcon color="error" />
						) : (
							<FavoriteBorder />
						)}
					</IconButton>
					<IconButton
						onClick={() => handleClick('delete')}
						aria-label="delete data"
					>
						<Delete />
					</IconButton>
					<IconButton
						onClick={() => handleClick('update')}
						aria-label="update data"
					>
						<Edit />
					</IconButton>
				</CardActions>
			</Card>

			<MyModal
				aberto={open}
				contexto={contexto}
				fecharModal={() => setOpen(false)}
				funcaoModificadora={setListaContatos}
				contato={contato}
			/>
		</>
	);
};
