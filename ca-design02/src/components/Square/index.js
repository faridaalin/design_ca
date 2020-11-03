import React from "react";
import styled from "styled-components/macro";
import { themeGet } from '@styled-system/theme-get'


const StyledSquare = styled.div`
background-color: ${({theme}) => console.log(theme)};

height: 100%;
width: 100%;

`




const Square = () => {
  return <StyledSquare />

}

export { Square };
