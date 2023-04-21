import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Grid, IconButton, Typography } from '@mui/material';

interface ICard {
	nome: string;
	sala: string;
	handleDelete: (id: string) => void;
	id: string;
}

export const Card: React.FC<ICard> = ({ id, nome, sala, handleDelete }) => {
	return (
		<>
			<Grid
				item
				sx={{
					display: 'flex',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						maxWidth: '400px',
						border: '2px solid #f1f1f1',
						borderRadius: '8px',
						alignItems: 'center',
						padding: '10px',
					}}
				>
					<Typography variant="h4" fontSize={16} letterSpacing={1}>
						{nome}
					</Typography>
					<Typography
						variant="body1"
						letterSpacing={2}
						sx={{ marginLeft: '10px' }}
					>
						{sala}
					</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<IconButton
						onClick={() => handleDelete(id)}
						sx={{ marginLeft: '10px' }}
					>
						<ClearIcon />
					</IconButton>
					<IconButton sx={{ marginLeft: '10px' }}>
						<EditIcon />
					</IconButton>
				</Box>
			</Grid>
		</>
	);
};
