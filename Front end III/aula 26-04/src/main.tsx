import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { themeDark } from './config/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={themeDark}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
