import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

const GrowdevLogo =
	'https://github.com/Gsurica/nextflix-clone/blob/master/src/assets/images/growdev.png?raw=true';
const ButtonAppBar = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: 'flex',
				justifyContent: 'center',
				position: 'relative',
			}}
		>
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: 'transparent',
					width: '1120px',
					zIndex: 999,
					margin: '10px auto',
					left: 0,
					right: 0,
				}}
			>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignContent: 'center',
					}}
				>
					<Box
						sx={{
							width: '500px',
							backgroundImage: `url(${GrowdevLogo})`,
							backgroundRepeat: 'no-repeat',
							height: '80px',
						}}
					></Box>
					<Box
						sx={{
							display: 'flex',
						}}
					>
						<Box>
							<Button color="error" variant="contained">
								Sair
							</Button>
						</Box>
						<Box
							sx={{
								marginLeft: '10px',
							}}
						>
							<Button color="error" variant="contained">
								Entrar
							</Button>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export { ButtonAppBar };
