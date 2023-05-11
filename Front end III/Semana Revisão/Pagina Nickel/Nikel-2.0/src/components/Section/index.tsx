/* eslint-disable react/prop-types */
import { LocalAtm, Paid } from '@mui/icons-material';
import { Box, Container, Grid } from '@mui/material';

import coins from '../../../public/assets/images/coins.png';
import { IconText } from '../IconText';

interface SectionProps {
	contexto: 'home' | 'transactions';
}

export const Section: React.FC<SectionProps> = ({ contexto }) => {
	return (
		<Container component={'section'}>
			<Grid container>
				<Grid
					item
					xs={6}
					sx={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
					}}
				>
					{contexto === 'home' && (
						<IconText icon={<LocalAtm />} text="R$1000,00" />
					)}

					{contexto === 'transactions' && (
						<IconText icon={<Paid />} text="Lançamentos" />
					)}
				</Grid>
				<Grid
					item
					xs={6}
					sx={{ display: 'flex', justifyContent: 'flex-end' }}
				>
					<Box component={'img'} src={coins}></Box>
				</Grid>
			</Grid>
		</Container>
	);
};
