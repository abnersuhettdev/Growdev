import { DefaultTheme } from 'styled-components';

// 2A ETAPA CRIAR OS TEMAS

const light: DefaultTheme = {
	name: 'light',
	bgColor: '#FFFF',
	borderRadius: {
		sm: '5px',
		md: '10px',
		lg: '15px',
	},
	fontSizes: {
		sm: '14px',
		md: '16px',
		lg: '36px',
	},
	colors: {
		primary: '#0d6efd',
		secondary: '#f8f9fa',
		error: '#dc3545',
		info: '#0dcaf0',
		success: '#198754',
	},
};

const dark: DefaultTheme = {
	name: 'dark',
	bgColor: '#3a3a3a',
	borderRadius: {
		sm: '5px',
		md: '10px',
		lg: '15px',
	},
	fontSizes: {
		sm: '14px',
		md: '16px',
		lg: '36px',
	},
	colors: {
		primary: '#e16e0e',
		secondary: '#212529',
		error: '#dc3545',
		info: '#0dcaf0',
		success: '#198754',
	},
};

export { light, dark };
