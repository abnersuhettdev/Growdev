import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';

import { Formulario } from '../Formulario';

interface IButtonProps {
	text: string;
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	gap: '5px',
};

export const ButtonStyled: React.FC<IButtonProps> = ({ text }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Box width={'50%'}>
				<Button
					variant="contained"
					onClick={handleOpen}
					sx={{
						padding: 3,
						width: '100%',
					}}
				>
					{text}
				</Button>
			</Box>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
					>
						Cadastro
					</Typography>
					<Formulario />
				</Box>
			</Modal>
		</>
	);
};
