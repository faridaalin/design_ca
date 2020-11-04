import styled from "styled-components/macro";


export const Container = styled.div`
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  background: ${(props) => props.theme.colors.grey[100]};
  background-size: auto;
  width: 100%;
    height: 100%;

  background-repeat: repeat;
  .empty {
    min-height: 30vh;
  }
`;
