import React from "react";
import {
  StyledInlineLink,
  StyledIndepLink,
  Container,
  LinkContaincer,
} from "./StyledLink";
import Description from "../Description/Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    <Container id={props.id}>
      <Description>
        There are two main links in JURK´s design system. Inline links and
        independent links. The inline links is to used wihtin lenghty text, a
        sentence or paragraph. Independent links are deault link type, that are
        can stand alone and should be used as navigation and only with short
        descriptive text. They can be paired with an icon.
      </Description>
      <LinkContaincer>
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
      </LinkContaincer>
      <LinkContaincer>
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
      </LinkContaincer>
    </Container>
  );
}

export { Links };
