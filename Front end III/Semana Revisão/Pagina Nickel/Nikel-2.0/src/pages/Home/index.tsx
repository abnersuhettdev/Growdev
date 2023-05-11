import { Box } from '@mui/material';

import { Appbar } from '../../components/Appbar';
import { Section } from '../../components/Section';

export const Home = () => {
	return (
		<>
			<Appbar page="home" />
			<Box sx={{ width: '80%', marginY: 3, marginX: ' auto' }}>
				<Section contexto="home" />
			</Box>
		</>
	);
};
