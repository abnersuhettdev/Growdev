import { Typography } from '@mui/material';
import React from 'react';

interface SectionTextProps {
	icon: React.ReactNode;
	text: string;
}

export const SectionText: React.FC<SectionTextProps> = ({ icon, text }) => {
	return (
		<>
			{icon}
			<Typography>{text}</Typography>
		</>
	);
};
