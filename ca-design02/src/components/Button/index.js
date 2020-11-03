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

export { Button };
