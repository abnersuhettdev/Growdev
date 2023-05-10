/* eslint-disable react/prop-types */
import { Box } from '@mui/material';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Box
			sx={{
				padding: '0px',
				margin: '0px',
				zIndex: '-1',
				background:
					'linear-gradient(300deg, white 0%,  white, 50%, #4c79c3 50%, #4c79c3 100%)',
				height: '100vh',
			}}
		>
			{children}
		</Box>
	);
};
