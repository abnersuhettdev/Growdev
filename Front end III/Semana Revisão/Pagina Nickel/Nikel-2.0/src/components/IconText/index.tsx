import { Grid, Typography } from '@mui/material';
import React from 'react';

interface IconText {
	icon: any;
	text: string;
}

export const IconText: React.FC<IconText> = ({ icon, text }) => {
	return (
		<Grid container>
			<Grid item>{icon}</Grid>
			<Grid item>
				<Typography>{text}</Typography>
			</Grid>
		</Grid>
	);
};
