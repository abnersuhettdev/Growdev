import { Box } from '@mui/material';

import { background } from '../../utils/constants/colors';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Box
			sx={{
				padding: '0px',
				margin: '0px',
				zIndex: '-1',
				height: 'min-content',
				background: `linear-gradient(120deg, ${background} 44.9%, #ffffff 45%) no-repeat fixed`,
			}}
		>
			{children}
		</Box>
	);
};

export default Layout;
