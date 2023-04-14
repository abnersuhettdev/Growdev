import React from 'react';

import { Title } from '../../components/Title';

const Home: React.FC = () => {
	return (
		<>
			<Title variant={'h1'} align="center" color="red" isBlue={false}>
				Hello World
			</Title>
		</>
	);
};

export default Home;
