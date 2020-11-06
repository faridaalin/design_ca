import React from "react";
import { StyledInlineLink, StyledIndepLink, Container } from "./StyledLink";
import Description from "../Description/Description";

function InlineLink(props) {
  return <StyledInlineLink {...props}>{props.children}</StyledInlineLink>;
}
function IndependentLink(props) {
  return <StyledIndepLink {...props}>{props.children}</StyledIndepLink>;
}
function Links(props) {
  return (
    <Container id={props.id}>
      <Description>
       There are two main links in JURK´s design system. Inline links and independent links. The inline links is to used wihtin lenghty text, a sentence or paragraph.
       Independent links are deault link type, that are can stand alone and should be used as navigation and only with short descriptive text. They can be paired with an icon.
      </Description>
      <div>
        <InlineLink className="default" default href="">
          Inline link
        </InlineLink>
        <InlineLink className="hover" hover href="">
          Inline link hovered
        </InlineLink>
        <InlineLink className="active" active href="">
          Inline link pressed
        </InlineLink>
        <InlineLink className="focus" focus href="">
          Inline link focused
        </InlineLink>
      </div>
      <div>
        <IndependentLink className="" default href="">
          Independent link
        </IndependentLink>
        <IndependentLink className="" hover href="">
          Independent link hovered
        </IndependentLink>
        <IndependentLink className="" active href="">
          Independent link pressed
        </IndependentLink>
        <IndependentLink className="" focus href="">
          Independent link focused
        </IndependentLink>
      </div>
    </Container>
  );
}

export { Links };
