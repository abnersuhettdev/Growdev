import { Container, Grid } from '@mui/material';

import { FormLogin } from './components/FormLogin';
import { LoginImage } from './components/LoginImage';
import LoginPhrases from './components/LoginPhrases';
import { PhrasesProps } from './types/PhrasesProps';

import codaiLogo from '/assets/images/codai-logo.png';
import growdevLogo from '/assets/images/growdev-logo.png';
import nikelLogo from '/assets/images/nikel-logo.png';
import pocket from '/assets/images/pocket.png';

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
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100vh',
					}}
					gap={2}
				>
					<LoginImage src={nikelLogo} margin="16px" />
					<FormLogin />

					<LoginImage src={codaiLogo} />
					<LoginImage src={growdevLogo} />
				</Grid>
			</Grid>
		</Container>
	);
};
