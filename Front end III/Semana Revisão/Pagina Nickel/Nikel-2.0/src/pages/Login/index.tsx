import { Container, Grid } from '@mui/material';

import codaiLogo from '../../../public/assets/images/codai-logo.png';
import growdevLogo from '../../../public/assets/images/growdev-logo.png';
import nickelLogo from '../../../public/assets/images/nikel-logo.png';
import pocket from '../../../public/assets/images/pocket.png';
import { LoginForm } from './components/LoginForm';
import { LoginImage } from './components/LoginImage';
import LoginPhrases from './components/LoginPhrases';
import { PhrasesProps } from './types/PhrasesProps';

export const Login = () => {
	const phrases: PhrasesProps[] = [
		{ phrase: 'Organize suas finâncias de uma forma fácil.' },
		{ phrase: 'Controle seu dinheiro e investimentos.' },
		{ phrase: 'Economize e atinja seus objetivos.' },
	];

	return (
		<Container sx={{ height: '100vh' }}>
			<Grid container>
				<Grid
					xs={6}
					item
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100vh',
					}}
					gap={3}
				>
					<LoginPhrases phrases={phrases} />
					<LoginImage src={pocket} />
				</Grid>
				<Grid
					xs={6}
					item
					gap={2}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						height: '100vh',
						paddingTop: 3,
					}}
				>
					<LoginImage src={nickelLogo} />

					<LoginForm />

					<LoginImage src={codaiLogo} />
					<LoginImage src={growdevLogo} />
				</Grid>
			</Grid>
		</Container>
	);
};
