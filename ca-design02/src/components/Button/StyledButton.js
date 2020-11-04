import styled, {css} from "styled-components/macro";


const secondaryButtonStyles = css`
  background: ${({ theme}) => theme.colors.secondary};
  color: ${({ theme}) => theme.colors.grey['300']};

  &:hover {
    background: ${({ theme}) => theme.colors.black['200']};
    color: ${({ theme}) => theme.colors.grey['100']};
  }

  &:active {
    background: ${({ theme}) => theme.colors.black['300']};
  }
  &:focus {
    background: ${({ theme}) => theme.colors.black['500']};
    outline: none;
    color: ${({ theme}) => theme.colors.grey['100']};
    box-shadow: 0 0 0 2px white,
    0 0 0 4px ${({ theme}) => theme.colors.black['100']};
  }
`
const primaryButtonStyles = css`
  background: ${({ theme}) => theme.colors.primary};
  color: ${({ theme}) => theme.colors.grey['300']};

  &:hover {
    background: ${({ theme}) => theme.colors.purple['300']};
    color: ${({ theme}) => theme.colors.grey['100']};
  }

  &:active {
    background: ${({ theme}) => theme.colors.purple['500']};
  }
  &:focus {
    background: ${({ theme}) => theme.colors.purple['500']};
    outline: none;
    color: ${({ theme}) => theme.colors.grey['100']};
    box-shadow: 0 0 0 2px white,
    0 0 0 4px ${({ theme}) => theme.colors.purple['100']};
  }
`

const ghostButtonStyles = css`
border-color: ${({ theme}) => theme.colors.primary};
background: transparent;
color: ${({ theme}) => theme.colors.purple['400']};

&:hover {
    background: ${({ theme}) => theme.colors.purple['400']};
    color: ${({ theme}) => theme.colors.grey['100']};
  }

  &:active {
    background: ${({ theme}) => theme.colors.purple['500']};
    color: ${({ theme}) => theme.colors.grey['100']};
  }
  &:focus {
    background: ${({ theme}) => theme.colors.purple['500']};
    outline: none;
    color: ${({ theme}) => theme.colors.grey['100']};
    box-shadow: 0 0 0 2px white,
    0 0 0 4px ${({ theme}) => theme.colors.purple['100']};
  }
`

const getButtonStyles = (props) => {
  if(props.primary) {
    return primaryButtonStyles;
  }

  return props.ghost ? ghostButtonStyles : secondaryButtonStyles;
}




export const StyledButton = styled.button`
padding: ${({ theme: { padding } }) => `${padding.p2} ${padding.p5}`};
font-size: 12px;
font-weight: ${({theme: {fontWeight}}) => fontWeight.bold};
text-transform: uppercase;
letter-spacing: 0.5px;
border: none;
border-radius: 100px;
border: 1px solid transparent;
margin-bottom: 1rem;

${getButtonStyles}

`;
