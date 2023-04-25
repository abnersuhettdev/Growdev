import ReactDOM from "react-dom/client"; // biblioteca
import { ThemeProvider } from "styled-components";
import App from "./App"; // componente
import { dark } from "./configs/theme";
import GlobalStyles from "./styles/GlobalStyles";

// 3A ETAPA - UTILIZAR O THEME PROVIDER
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<ThemeProvider theme={dark}>
		<GlobalStyles />
		<App />
	</ThemeProvider>
);
