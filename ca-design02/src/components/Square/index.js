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
  background: ${(props) => props.theme.colors[props.colorName][props.shade]};
  height: 100px;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
`;

const Square = (props) => {
  const { colorName, shade } = props;

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

const ColorBoxes = (props) => {
  return (
    <div id={props.id}>
       <h3>Primary</h3>
    <Grid>
      <Square
        shade="500"
        name="purple"
        colorName="purple"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="400"
        name="purple"
        colorName="purple"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="300"
        name="purple"
        colorName="purple"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="200"
        name="purple"
        colorName="purple"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="100"
        name="purple"
        colorName="purple"
        hex="0000"
        hsla="000 000 000"
      />
    </Grid>
    <h3>Black</h3>
    <Grid>
      <Square
        shade="500"
        name="black"
        colorName="black"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="400"
        name="black"
        colorName="black"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="300"
        name="black"
        colorName="black"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="200"
        name="black"
        colorName="black"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="100"
        name="black"
        colorName="black"
        hex="0000"
        hsla="000 000 000"
      />
    </Grid>
    <h3>Cloud</h3>
    <Grid>
      <Square
        shade="500"
        name="grey"
        colorName="grey"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="400"
        name="grey"
        colorName="grey"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="300"
        name="grey"
        colorName="grey"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="200"
        name="grey"
        colorName="grey"
        hex="0000"
        hsla="000 000 000"
      />
      <Square
        shade="100"
        name="grey"
        colorName="grey"
        hex="0000"
        hsla="000 000 000"
      />
    </Grid>
    </div>
  );
};

export { ColorBoxes };
