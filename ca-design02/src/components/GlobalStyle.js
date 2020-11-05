import { createGlobalStyle } from "styled-components";
import theme from "./../theme";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


  body {
    font-family: ${theme.fontFamily.text};
    color: ${theme.colors.black[500]};
    overflow-x: hidden;
    background-color: ${theme.colors.grey[100]};
    line-height: 1.5;
  }

  img {
    width: 100%;
  }

  h1, h2, h3, h4 {
   font-family:  ${theme.fontFamily.header};
  }

  h2 {
    margin-top: ${theme.margin.md};
    margin-bottom:  ${theme.margin.l};
  }

  h3 {
    color: ${theme.colors.black[300]};
    margin-top: ${theme.margin.xs};
    margin-bottom:  ${theme.margin.md};
  }
  p {
    margin-top:  ${theme.margin.xs};
    margin-bottom:  ${theme.margin.xs};
  }

`;

export default GlobalStyle;
