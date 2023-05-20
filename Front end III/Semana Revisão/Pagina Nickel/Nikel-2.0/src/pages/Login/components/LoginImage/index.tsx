import { Box } from '@mui/material';

interface ImageProps {
	src: string;
	margin?: string;
}

export const LoginImage: React.FC<ImageProps> = ({ src, margin }) => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignSelf: 'center',
					margin: margin,
				}}
			>
				<Box component={'img'} src={src} />
			</Box>
		</>
	);
};
