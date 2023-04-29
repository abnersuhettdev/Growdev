import { Grid } from '@mui/material';
import React from 'react';

import { AppBar2 } from '../../components/AppBar2';
import { ButtonStyled } from '../../components/ButtonStyled';
import { Container2 } from '../../components/Container2';

const Home: React.FC = () => {
	return (
		<>
			<AppBar2></AppBar2>
			<Container2 />
			<Grid
				sx={{
					display: 'flex',
					bgcolor: 'lightblue',
				}}
				width={'100vw'}
				gap={1}
				paddingLeft={1}
				paddingRight={1}
			>
				<ButtonStyled text="Cadastrar"></ButtonStyled>
				<ButtonStyled text="Login"></ButtonStyled>
			</Grid>
		</>
	);
};

export default Home;
