import React from "react";
import {
  Container,
  H1,
  H2,
  H3,
  H4,
  Subtitle,
  Body,
  SmallText,
  ButtonText,
  Table
} from "./StyledTypography";

const Typography = () => {
  return (
    <Container>
      <Table>

      <tr>
          <th>WCAG Ratio</th>
          <th>Typography hierarchy</th>
        </tr>
      <tr>
          <td className="wcag-desc"><p>AA 17.13</p></td>
          <td>
            <H1>Title/Header 1</H1></td>
        </tr>
      <tr>
          <td><p>AA 17.13</p></td>
          <td><H2>Header 2</H2></td>
        </tr>
      <tr>
          <td><p>AA 14.13</p></td>
          <td><H3>Header 3</H3></td>
        </tr>
      <tr>
          <td><p>AA 17.13</p></td>
          <td><H4>Header 4</H4></td>
        </tr>
      <tr>
          <td><p>AA 17.13</p></td>
          <td><Subtitle>Subtitle/Body Large</Subtitle></td>
        </tr>
      <tr>
          <td><p>AA 17.13</p></td>
          <td><Body>Body</Body></td>
        </tr>
      <tr>
          <td><p>AA 17.13</p></td>
          <td><SmallText>Small text</SmallText></td>
        </tr>
      <tr>
          <td><p>AA 17.13</p></td>
          <td><ButtonText>Button Text</ButtonText></td>
        </tr>

      </Table>
      {/* <Container >
        <H1>Title/Header 1</H1>
        <p>AA 17.13</p>
        <H2>Header 2</H2>
        <H3>Header 3</H3>
        <H4>Header 4</H4>
        <Subtitle>Subtitle/Body Large</Subtitle>
        <Body>Body</Body>
        <SmallText>Smaller text</SmallText>
        <ButtonText>Button Text</ButtonText>
      </Container> */}

      <Container>
        <h3>Type Pairing</h3>

        <H2> With the WCAG approved contrast ratio displayed.</H2>
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
    </Container>
  );
};

export { Typography };
