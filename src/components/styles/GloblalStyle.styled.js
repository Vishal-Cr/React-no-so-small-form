import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
     box-sizing:border-box;
     display:flex;
     justify-content:center;
     
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;