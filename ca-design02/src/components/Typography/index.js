import React from "react";
import {
  Container,
  H1,
  H2,
  H3,
  Subtitle,
  Body,
  SmallText,
  ButtonText,
} from "./StyledTypography";

const Typography = () => {
  return (
    <>
      <Container>
        <H1>Title/Header 1</H1>
        <H2>Header 2</H2>
        <H3>Header 3</H3>
        <Subtitle>Subtitle/Body Large</Subtitle>
        <Body>Body</Body>
        <SmallText>Smaller text</SmallText>
        <ButtonText>Button Text</ButtonText>
      </Container>

      <Container>
        <p>Type Pairing</p>

        <H2>Article Heading</H2>
        <Subtitle>Article Subheading goes here</Subtitle>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget
          iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis
          varius faucibus praesent convallis.
        </Body>
        <H2>Article Heading</H2>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget
          iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis
          varius faucibus praesent convallis.
        </Body>
      </Container>
    </>
  );
};

export { Typography };
