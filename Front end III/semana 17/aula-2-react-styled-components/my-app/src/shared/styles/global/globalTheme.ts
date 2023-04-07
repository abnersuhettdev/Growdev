import { createGlobalStyle } from 'styled-components'

export const DefaultCss =  createGlobalStyle`
    body{
        background: ${props => props.theme.colors.background};
    }

    a{
        text-decoration: none;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

`