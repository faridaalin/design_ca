import styled from "styled-components/macro";
import theme from "./../../theme";

const Container = styled.div`
  height: 100%;
  box-shadow: 0px 1px 4px #b1b1b1;
  .color-info {
    padding: 1rem;
    font-size: 0.8rem;
  }
`;

const StyledSquare = styled.div`
  background: ${(props) => props.theme.colors[props.colorName][props.shade]};
  height: 100px;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: ${theme.margin.xs};
  margin-bottom:  ${theme.margin.l};
  padding-bottom:  ${theme.padding.p4};
`;



export {Container, StyledSquare, Grid}
