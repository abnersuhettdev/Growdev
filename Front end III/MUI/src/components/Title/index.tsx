import { Typography } from '@mui/material';

interface ITitle {
	variant: any;
	align: 'center' | 'inherit' | 'justify' | 'left' | 'right';
	children: React.ReactNode;
	color?: string;
	isBlue?: boolean;
}

export const Title: React.FC<ITitle> = ({
	variant,
	align,
	children,
	color,
	isBlue,
}) => {
	return (
		<Typography
			variant={variant}
			align={align}
			sx={{ color: `${isBlue ? 'blue' : 'red'} ` }}
		>
			{children}
		</Typography>
	);
};
