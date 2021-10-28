import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      font-family: 'Open Sans Condensed', sans-serif;
      padding: 20px 40px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      @media (max-width: 768px) {
        padding: 10px;
      }
    }
    
    a {
        text-decoration: none;
        color: #000;
    }
`;
