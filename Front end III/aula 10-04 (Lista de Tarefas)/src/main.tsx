import React from 'react'; // biblioteca
import ReactDOM from 'react-dom/client'; // biblioteca
import App from './App'; // componente
import { ThemeProvider } from 'styled-components';
import { dark, light } from './configs/theme';
import GlobalStyles from './styles/GlobalStyles';

// 3A ETAPA - UTILIZAR O THEME PROVIDER
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={dark}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
