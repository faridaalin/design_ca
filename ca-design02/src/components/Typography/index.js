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
  Table,
  ContainerFPairing,
} from "./StyledTypography";
import Description from "../Description/Description";

const Typography = () => {
  return (
    <Container>
      <Description>
        JURK uses two typefases, Josefin Sans, for headings/titles and Work Sans
        for main text. The typography can be applied in either black or white,
        unsless it is a inline link, then use primary color.
      </Description>

      <Table>
        <tr className="tr-head">
          <th>WCAG Ratio</th>
          <th>Typography hierarchy</th>
        </tr>
        <tr>
          <td className="wcag-desc">
            <p>AA 17.13</p>
          </td>
          <td>
            <H1>Title/Header 1</H1>
          </td>
        </tr>
        <tr>
          <td>
            <p>AA 17.13</p>
          </td>
          <td>
            <H2>Header 2</H2>
          </td>
        </tr>
        <tr>
          <td>
            <p>AA 14.13</p>
          </td>
          <td>
            <H3>Header 3</H3>
          </td>
        </tr>
        <tr>
          <td>
            <p>AA 17.13</p>
          </td>
          <td>
            <H4>Header 4</H4>
          </td>
        </tr>
        <tr>
          <td>
            <p>AA 17.13</p>
          </td>
          <td>
            <Subtitle>Subtitle/Body Large</Subtitle>
          </td>
        </tr>
        <tr>
          <td>
            <p>AA 17.13</p>
          </td>
          <td>
            <Body>Body</Body>
          </td>
        </tr>
        <tr>
          <td>
            <p>AA 17.13</p>
          </td>
          <td>
            <SmallText>Small text</SmallText>
          </td>
        </tr>
        <tr>
          <td>
            <p>AA 17.13</p>
          </td>
          <td>
            <ButtonText>Button Text</ButtonText>
          </td>
        </tr>
      </Table>

      <ContainerFPairing>
        <h3>Type Pairing</h3>
        <Description>
          These example articles demonsrates how to pair headings, subheadings and
          body text. Content should be limited to 75ch, line-height 1.54 and always left aligned.
        </Description>
        <H2>Article Heading</H2>
        <Subtitle>Article Subheading goes here</Subtitle>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Body>
        <H2>Article Heading</H2>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Body>
      </ContainerFPairing>
    </Container>
  );
};

export { Typography };
