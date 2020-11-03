import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 100%;
  box-shadow: 0px 1px 4px #b1b1b1;
  .color-info {
    padding: 1rem;
    font-size: 0.8rem;
  }
`;

const StyledSquare = styled.div`
    background: ${props => props.theme.colors[props.colorName][props.shade]};
  height: 100px;
  width: 100%;

`;

const Square = (props) => {
  const {colorName, shade} = props;

  return (
    <Container>
      <StyledSquare shade={shade} colorName={colorName} />
      <div className="color-info">
        <p>{props.name}</p>
        <p>Hex #{props.hex}</p>
        <p>HSL {props.hsla}</p>
      </div>
    </Container>
  );
};

export { Square };
