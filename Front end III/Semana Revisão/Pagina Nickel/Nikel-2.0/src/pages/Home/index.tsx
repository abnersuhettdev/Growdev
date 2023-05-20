import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MyAppBar from '../../shared-components/AppBar';
import Card from '../../shared-components/CardTransactions';
import { Section } from '../../shared-components/Section';

const Home = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (
			!localStorage.getItem('userLogged') &&
			!sessionStorage.getItem('userLogged')
		) {
			navigate('/');
		}
	}, [navigate]);

	return (
		<>
			<MyAppBar context="home" />
			<Box
				component={'main'}
				sx={{
					width: { xs: '100%', sm: '80%' },
					marginY: 3,
					marginX: 'auto',
				}}
			>
				<Section context="home" />
				<Card />
			</Box>
		</>
	);
};

export default Home;
