import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';

interface SnackBarProps {
	message: string;
	isError: boolean;
}

export const SnackBarComp: React.FC<SnackBarProps> = ({ message, isError }) => {
	// const [open, setOpen] = React.useState(false);

	// const handleClose = (
	// 	event: React.SyntheticEvent | Event,
	// 	reason?: string,
	// ) => {
	// 	if (reason === 'clickaway') {
	// 		return;
	// 	}

	// 	setOpen(false);
	// };

	return (
		<div>
			<Snackbar
				open={isError}
				autoHideDuration={6000}
				onClose={handleClose}
				message={message}
			/>
		</div>
	);
};
