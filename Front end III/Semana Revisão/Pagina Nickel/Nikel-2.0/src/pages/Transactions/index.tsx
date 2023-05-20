import { Box } from '@mui/material';

import MyAppBar from '../../shared-components/AppBar';
import { Section } from '../../shared-components/Section';

const Transactions = () => {
	return (
		<>
			<MyAppBar context="transactions" />
			<Box
				component={'main'}
				sx={{ width: '80%', marginY: 3, marginX: 'auto' }}
			>
				<Section context="transactions" />
			</Box>
		</>
	);
};

export default Transactions;
