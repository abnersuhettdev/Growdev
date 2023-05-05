/* eslint-disable react/prop-types */
import { SxProps, Theme, Typography } from '@mui/material';

export interface IText {
	variant:
		| 'body1'
		| 'body2'
		| 'button'
		| 'caption'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'inherit'
		| 'overline'
		| 'subtitle1'
		| 'subtitle2';
	children?: React.ReactNode;
	component?: any;
	sx?: SxProps<Theme> | undefined;
}

const Text: React.FC<IText> = ({ children, variant, component, sx }) => {
	return (
		<Typography
			variant={variant}
			component={component}
			color={'white'}
			sx={sx}
		>
			{children}
		</Typography>
	);
};

export default Text;
