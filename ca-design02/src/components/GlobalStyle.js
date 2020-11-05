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
  }

  img {
    width: 100%;
  }

  h1, h2, h3, h4 {
    font-family: ${theme.fontFamily.header};
    margin-top: ${theme.margin.xs};
    margin-bottom:  ${theme.margin.xs};
  }
  p {
    margin-top:  ${theme.margin.xs};
    margin-bottom:  ${theme.margin.xs};
  }

`;

export default GlobalStyle;
