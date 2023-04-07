import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { dark } from './shared/styles/themes/dark'
import { light } from './shared/styles/themes/light'
import { DefaultCss } from './shared/styles/global/globalTheme'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={light()}>
    <DefaultCss/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
