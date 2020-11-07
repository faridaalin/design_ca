import styled from "styled-components/macro";
import theme from "../../theme";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  padding: 2rem 1rem;
  gap: 0.5rem;
  background: ${theme.colors.grey[100]};
  background-size: auto;
  width: 100vw;
  height: 100%;
  margin: 0 calc(-50vw + 50%);

  background-repeat: repeat;
  .empty {
    min-height: 30vh;
    flex:1;
  }
  .pattern-description {
    background-color: ${theme.colors.grey[200]};
    padding: ${theme.padding.p3} ${theme.padding.p5};
    font-size: ${theme.fontSizes[1]}rem;
    color: ${theme.colors.black[400]};
    flex: 1;
  }

  ${up("md")} {
    display: flex;
  flex-wrap: wrap;
  }
`;
