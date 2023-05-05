import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { themeLight } from './config/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={themeLight}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
