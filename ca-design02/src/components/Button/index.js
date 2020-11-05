import React from 'react';
import {StyledButton, Container} from './StyledButton'

export function Button(props) {

  return (
    <StyledButton {...props}>
        {props.children}
    </StyledButton>
  )
}
function Buttons (props) {
  return (
    <Container id={props.id}>
    <Button primary >Primary</Button>
    <Button secondary >Secondary</Button>
    <Button ghost >Ghost</Button>
    <Button buttonLink >Button Link</Button>
    </Container>
  )
}

export { Buttons };
