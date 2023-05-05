import { deepPurple, grey, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const themeLight = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#E85D04',
			light: '#F48C06',
		},
		secondary: {
			main: '#235789',
			light: '#235789',
		},
		background: {
			paper: '#235789',
			default: '#020100',
		},
		text: { primary: '#FDFFFC', secondary: '#FDFFFC' },
	},
});

export const themeDark = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: deepPurple[500],
			dark: deepPurple[500],
		},
		secondary: {
			main: pink[500],
			dark: pink[500],
		},
		background: {
			paper: grey[800],
		},
	},
});
