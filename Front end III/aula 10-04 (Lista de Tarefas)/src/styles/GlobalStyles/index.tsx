import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background-color: ${(props) => props.theme.bgColor};
       font-family: 'Roboto', sans-serif;
    }

`;

export default GlobalStyles;
