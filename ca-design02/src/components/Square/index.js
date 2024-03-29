import React from "react";
import { Container, StyledSquare, Grid } from "./StyledColors";
import Description from "../Description/Description";
import {code} from './code'
import Code from "../code";

const Square = (props) => {
  const { colorName, shade } = props;

  return (
    <Container>
      <StyledSquare shade={shade} colorName={colorName} />
      <div className="color-info">
        <p>{props.name}</p>
        <p>Hex {props.hex}</p>
        <p>HSL {props.hsla}</p>
      </div>
    </Container>
  );
};

const ColorBoxes = (props) => {
  return (
    <div id={props.id}>
      <Description>
        JURK's design system includes three main colors. Modest blue as
        primary color, black and cloud as both secondary and complementary
        colors. Black and cloud are mainly used and is therefore more
        prominent.
      </Description>
      <h3>Modest Blue</h3>
      <Description>
        Modest blue is JURK's primary color and is used for areas where attention
        and differentiation is important.
      </Description>
      <Grid>
        <Square
          shade="500"
          name="Modest Blue"
          colorName="blue"
          hex="#2f42a5"
          hsla="(230, 56%, 42%"
        />
        <Square
          shade="400"
          name="Modest Blue"
          colorName="blue"
          hex="#364DBF'"
          hsla="(230, 56%, 48%)"
        />
        <Square
          shade="300"
          name="Modest Blue"
          colorName="blue"
          hex="#4057C9"
          hsla="(230, 56%, 52%)"
        />
        <Square
          shade="200"
          name="Modest Blue"
          colorName="blue"
          hex="#5065CE"
          hsla="(230, 56%, 56%)"
        />
        <Square
          shade="100"
          name="Modest Blue"
          colorName="blue"
          hex="#6073D2"
          hsla="(230, 56%, 60%)"
        />
      </Grid>

      <h3>Black</h3>
      <Description className="description">
        Black is modern and edgy color and also a color that represents
        strength, formality, and intelligence. Black is mainly to be used as
        color on text, on secondary button and independent links.
      </Description>
      <Grid>
        <Square
          shade="500"
          name="Black"
          colorName="black"
          hex="#111313"
          hsla="(180, 6%, 7%)"
        />
        <Square
          shade="400"
          name="Black"
          colorName="black"
          hex="#181b1b"
          hsla="(180, 6%, 10%)"
        />
        <Square
          shade="300"
          name="Black"
          colorName="black"
          hex="#1f2222"
          hsla="(180, 5%, 13%)"
        />
        <Square
          shade="200"
          name="Black"
          colorName="black"
          hex="#262a2a"
          hsla="(180, 5%, 16%)"
        />
        <Square
          shade="100"
          name="Black"
          colorName="black"
          hex="#2d3232"
          hsla="(180, 5%, 19%)"
        />
      </Grid>
      <h3>Cloud</h3>
      <Description className="description">
        Cloud has range of seveal tints and works well in combination with Black
        and Modest Blue. Use cloud on areas that needs to be toned down
        or balance out other colors. Cloud works well used as a background
        color. The tints of Cloud is great for differentiating sections.
      </Description>
      <Grid>
        <Square
          shade="500"
          name="Cloud"
          colorName="grey"
          hex="#b6b6cb"
          hsla="(240, 17%, 75%)"
        />
        <Square
          shade="400"
          name="Cloud"
          colorName="grey"
          hex="#c5c5d6"
          hsla="(240, 17%, 81%)"
        />
        <Square
          shade="300"
          name="Cloud"
          colorName="grey"
          hex="#dddde7"
          hsla="(240, 17%, 89%)"
        />
        <Square
          shade="200"
          name="Cloud"
          colorName="grey"
          hex="#ececf1"
          hsla="(240, 15%, 94%)"
        />
        <Square
          shade="100"
          name="Cloud"
          colorName="grey"
          hex="#f5f5f8"
          hsla="(240, 18%, 97%)"
        />
      </Grid>
      <Code code={code} language="javascript" />
    </div>
  );
};

export { ColorBoxes };
