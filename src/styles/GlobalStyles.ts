import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--white);
    }
    
    html, body, #root {
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        overflow-x: hidden;
    }

    *, button, input {
        border: none;
        background: none;
        font-family: --apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    html {
        background-color: var(--primary);
    }

    :root {
        --z-index-high: 3;
        --z-index-mid: 2;
        --z-index-low: 1;
        --primary: #000;
        --secondary: #15181C;
        --search: #202327;
        --white: #D9D9D9;
        --gray: #7A7A7A;
        --outline: #2F3336;
        --retweet: #00C06B;
        --like: #E8265E;
        --twitter: #33A1F2;
        --twitter-dark-hover: #011017;
        --twitter-light-hover: #2C8ED6;
    }
`;
export default GlobalStyles;