import React from "react";
import Code from "../code";
import { StyledButton, Container } from "./StyledButton";
import Description from "../Description/Description";
import {code} from './code'



export function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
function Buttons(props) {
  return (
    <>
      <Description>
        All buttons must communicate clear actions to users and meet their
        expections when clicked. Therefore, text on CTA and where the button is
        leading must match.
      </Description>
      <Description>
        The primary button is the main button should only appear once or twice per
        page. This buttons is mainly for extraodinary actions and shouldbe used
        sparely.
      </Description>
      <Description>
        Use the secondary button for all other actions on each page. The
        secondary button can be used in combonation with other buttons.
      </Description>
      <Description>
        The ghost button is for least pronounced actions and should be used in combonation
        with a primary or secondary button.
      </Description>
      <Container id={props.id}>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button ghost>Ghost</Button>
        <Button buttonLink>Button Link</Button>
      </Container>
      <Code code={code} language="css" />
    </>
  );
}

export { Buttons };
