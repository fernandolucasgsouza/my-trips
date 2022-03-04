/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #__next{
        height: 100%;
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
    }
`;

export default GlobalStyles;
