import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    html, body{
        height: 100%;
        width: 100%;
        background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    }
`

export { GlobalStyle }
