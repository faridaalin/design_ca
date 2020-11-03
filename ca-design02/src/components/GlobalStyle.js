import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
    padding: 0;
}
  body {
    font-family: ${({ theme: { fontFamily } }) => fontFamily.text};
    color: ${({ theme: { colors } }) => colors.black[400]};
    background: ${({ theme: { colors } }) => colors.grey['100']};
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme: { fontFamily } }) => fontFamily.header};
    margin-top: ${({ theme: { margin } }) => margin.xs};
    margin-bottom: ${({ theme: { margin } }) => margin.xs};
  }
  p {
    margin-top: ${({theme: {margin}}) => margin.xs};
margin-bottom: ${({theme: {margin}}) => margin.xs};
  }

`;

export default GlobalStyle;
