/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root{
        --highLight:#e20e8d;
        --background: #030518;
        --light:#eeeeee;

        --container: 100rem;
        --small:1.5rem;
        --medium:3rem;
        --large:5rem;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #__next{
        height: 100%;
        background: var(--background);
        color: var(--light);
    }
    html{
        font-size: 62,5%;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    a {
      color: inherit;
      text-decoration: none;
      color: var(--highLight);
    }
    p {
        font-size:1rem;
        line-height: var(--small);
    }
`;

export default GlobalStyles;
