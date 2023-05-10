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

import { useAppDispatch } from '../../store/hooks';
import { atualizar } from '../../store/modules/Contacts/contatosSlice';
import { Contexto, IContato } from '../../types';
import { MyModal } from '../Modal';

interface MyCardProps {
	contato: IContato;
}

export const MyCard: React.FC<MyCardProps> = ({ contato }) => {
	const [open, setOpen] = useState(false);
	const [contexto, setContexto] = useState<Contexto>('create');

	const dispatch = useAppDispatch();

	const handleFavorite = () => {
		dispatch(
			atualizar({
				id: contato.email,
				changes: { favorito: !contato.favorito },
			}),
		);
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
				contato={contato}
			/>
		</>
	);
};
