import React from "react";
import Code from "../code";
import { Container } from "./StyledPattern";
import svgPattern from "./polka-dots.svg";
import { IndependentLink } from "../Links";
import theme from '../../theme'




const code = `
background: ${theme.colors.grey[100]};
background-size: auto;
`;

const Pattern = () => {
  return (
    <>
    <Container style={{ backgroundImage: `url(${svgPattern})` }}>
      <div className="empty"></div>

        <div className="pattern-description">
          <h3>How to use</h3>
          <p>
            The pattern is to be with used with significant amount of whitespace
            and only for section with little text and where it is room for
            decoration. The pattern especially great for areas less that needs
            playfulness or a modern twist. Can be used with text, where the text
            has solid background color or with an image.
          </p>
          <IndependentLink indepDefault>Independent link </IndependentLink>
        </div>
    </Container>
    <Code code={code} language="javascript" />
    </>
  );
};

export { Pattern };
