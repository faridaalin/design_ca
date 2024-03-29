import React from "react";
import {
  StyledInlineLink,
  StyledIndepLink,
  Container,
} from "./StyledLink";
import Description from "../Description/Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {code} from './code'
import Code from "../code";



function InlineLink(props) {
  return <StyledInlineLink {...props}>{props.children}</StyledInlineLink>;
}
export function IndependentLink(props) {
  return (
    <StyledIndepLink {...props}>
      {props.children} <FontAwesomeIcon icon={faArrowRight} />{" "}
    </StyledIndepLink>
  );
}
function Links(props) {
  return (
    <>
    <Container id={props.id}>
      <Description>
        There are two main links in JURK´s design system. Inline links and
        independent links. The inline links is to used wihtin lenghty text, a
        sentence or paragraph. Independent links
        can stand alone and should be used as navigation and only with short
        descriptive text. They can be paired with an icon.
      </Description>
      <Container>
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
      </Container>
      <Container>
        <IndependentLink className="indep-default" indepDefault>
          Independent link
        </IndependentLink>
        <IndependentLink className="indep-hover" indepHover>
          Independent link hovered
        </IndependentLink>
        <IndependentLink className="indep-pressed" indepPressed>
          Independent link pressed
        </IndependentLink>
        <IndependentLink className="indep-focus" indepFocus>
          Independent link focused
        </IndependentLink>
      </Container>
    </Container>
    <Code code={code} language="css" />
    </>
  );
}

export { Links };
