import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PaidIcon from '@mui/icons-material/Paid';
import { Box, Grid } from '@mui/material';
import React from 'react';

import { SectionText } from '../SectionText';

interface SectionProps {
	context: 'home' | 'transactions';
}

export const Section: React.FC<SectionProps> = ({ context }) => {
	return (
		<Grid container>
			<Grid
				item
				xs={6}
				display={'flex'}
				justifyContent={'flex-start'}
				alignItems={'center'}
			>
				{context === 'home' && (
					<SectionText
						text="R$ 1.000,00"
						icon={<LocalAtmIcon color="primary" fontSize="large" />}
					/>
				)}
				{context === 'transactions' && (
					<SectionText
						text="Lançamentos"
						icon={<PaidIcon color="primary" fontSize="large" />}
					/>
				)}
			</Grid>
			<Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
				<Box
					component={'img'}
					src="/public/assets/images/coins-small.png"
				></Box>
			</Grid>
		</Grid>
	);
};
