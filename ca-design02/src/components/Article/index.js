import React from 'react';
import styled from 'styled-components';
import theme from '../../theme'

const StyledArticle = styled.article`
max-width: 1000px;
margin: 0 auto;
padding: 2rem;
min-height: 100vh;

h2 {
  color: ${theme.colors.black['500']};
  font-family:  ${theme.fontFamily.header1}
}
`

function Article({title, children, id}) {

  return (
    <StyledArticle id={id} >
      <h2>{title}</h2>
      {children}
    </StyledArticle>
  )
}

export {Article}
