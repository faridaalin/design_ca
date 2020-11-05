import React from 'react';
import {StyledLink, Container} from './StyledLink'

function Link(props) {

  return (
    <StyledLink {...props}>
        {props.children}
    </StyledLink>
  )
}
function Links (props) {

  return (
    <Container id={props.id}>
    <Link className="default" default href="" >Link default</Link>
    <Link className="hover" hover href="" >Link hovered</Link>
    <Link className="active" active href="" >Link pressed</Link>
    <Link className="focus" focus href="" >Link focused</Link>
    </Container>
  )
}

export { Links };
