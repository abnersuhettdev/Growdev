import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material';

interface ICardProps {
	titulo: string;
	conteudo: string;
	notas: string;
}

export const MyCard: React.FC<ICardProps> = ({ titulo, conteudo, notas }) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color="text.secondary"
					gutterBottom
				>
					{titulo}
				</Typography>
				<Typography variant="h5" component="div">
					{conteudo}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{notas}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Apagar</Button>
				<Button size="small">Editar</Button>
			</CardActions>
		</Card>
	);
};
