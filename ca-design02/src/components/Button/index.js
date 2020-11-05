import React from 'react';
import {StyledButton, Container} from './StyledButton'

function Button(props) {

  return (
    <StyledButton {...props}>
        {props.children}
    </StyledButton>
  )
}
function Buttons (props) {
console.log(props)
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
