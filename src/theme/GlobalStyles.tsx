import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    background-color: '#f7f7f7'
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  #root {
    overflow-x: hidden;
  }

`;

export default GlobalStyles;
