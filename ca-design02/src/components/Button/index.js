import React from 'react';
import {StyledButton} from './StyledButton'

function Button(props) {
// console.log(props)
  return (
    <StyledButton {...props}>
        {props.children}
    </StyledButton>
  )
}
function Buttons () {

  return (
    <>
    <Button primary >Primary</Button>
    <Button secondary >Secondary</Button>
    <Button ghost >Ghost</Button>
    </>
  )
}

export { Buttons };
