import React from "react";
import { Container } from "./StyledPattern";
import svgPattern from "./polka-dots.svg";
import {Button} from '../Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pattern = () => {
  return (
    <Container style={{ backgroundImage: `url(${svgPattern})` }}>
      <div className="empty"></div>
      <div>
        <div className="pattern-description">
          <h3>How to use</h3>
          <p>
            The pattern is to be with used with significant amount of whitespace and only for section with little text and where it is room for decoration.
             The pattern especially great for areas less that needs playfulness or a modern
            twist. Can be used with text, where the text has solid background
            color or  with an image. All content should must have and title and link or CTA.
          </p>
          <Button buttonLink >Button Link <FontAwesomeIcon icon={faArrowRight} /> </Button>
        </div>
      </div>
    </Container>
  );
};

export { Pattern };
