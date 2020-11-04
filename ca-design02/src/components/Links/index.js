import React from 'react';
import {StyledLink, Container} from './StyledLink'

function Link(props) {

  return (
    <StyledLink {...props}>
        {props.children}
    </StyledLink>
  )
}
function Links () {

  return (
    <Container>
    <Link>Link</Link>

    </Container>
  )
}

export { Links };
