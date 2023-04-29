import { Box, Grid, Typography } from '@mui/material';

export const Container2 = () => {
	return (
		<>
			<Grid
				container
				sx={{
					height: '80vh',
					bgcolor: 'lightblue',
					// display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				gap={1}
			>
				<Typography variant="h2">Bem Vindo</Typography>
				<Box>
					<img
						height={250}
						src="https://assets.stickpng.com/images/6002f9d851c2ec00048c6c78.png"
						alt=""
					/>
				</Box>
			</Grid>
		</>
	);
};
