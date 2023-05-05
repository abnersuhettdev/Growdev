/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
const petterson =
	'https://github.com/Gsurica/nextflix-clone/blob/master/src/assets/images/netflix.jpg?raw=true';

export interface IBackground {
	children?: React.ReactNode;
}

const Background: React.FC<IBackground> = ({ children }) => {
	return (
		<Box
			sx={{
				height: '700px',
				width: '1903px',
				backgroundImage: `url(${petterson})`,
				zIndex: -1,
				boxShadow: '10px 10px 1000px 68px rgba(0,0,0,1) inset',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{children}
		</Box>
	);
};

export { Background };
