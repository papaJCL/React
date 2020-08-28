import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    //overflow-x: hidden;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }


  body{
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.primaryDark};
    text-rendering: optimizeLegibility;
    background: 	rgb(173, 208, 236);
    
  }
  

  h1 {
    font-size: 5.9vw;
  }
  h2 {
    font-size: 3.0vh;
  }
  p {
    font-size: 2vmin;
  }
  `