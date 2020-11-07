import theme from '../../theme'

export const code = `
padding: ${`${theme.padding.p2} ${theme.padding.p5}`};
font-weight: ${theme.fontWeight.bold};
text-transform: uppercase;
letter-spacing: 0.5px;
border: none;
border-radius: 100px;
border: 1px solid transparent;
white-space: nowrap;
transition: ${theme.transition[0]}s all;

const primaryButtonStyles = css
background: ${theme.colors.primary};
color: ${theme.colors.grey["300"]};

&:hover {
  background: ${theme.colors.blue["300"]};
  color: ${theme.colors.grey["100"]};
}

&:active {
  background: ${theme.colors.blue["500"]};
}
&:focus {
  background: ${theme.colors.blue["500"]};
  outline: none;
  color: ${theme.colors.grey["100"]};
  box-shadow: 0 0 0 2px white, 0 0 0 4px ${theme.colors.blue["100"]};
}

const secondaryButtonStyles = css
  background: ${theme.colors.secondary};
  color: ${theme.colors.grey["300"]};

  &:hover {
    background: ${theme.colors.black["200"]};
    color: ${theme.colors.grey["100"]};
  }

  &:active {
    background: ${theme.colors.black["300"]};
  }
  &:focus {
    background: ${theme.colors.black["500"]};
    outline: none;
    color: ${theme.colors.grey["100"]};
    box-shadow: 0 0 0 2px ${theme.colors.grey["100"]},
      0 0 0 4px ${theme.colors.black["100"]};
  }

  const ghostButtonStyles = css
  border-color: ${theme.colors.primary};
  background: transparent;
  color: ${theme.colors.blue["400"]};

  &:hover {
    background: ${theme.colors.blue["400"]};
    color: ${theme.colors.grey["100"]};
  }

  &:active {
    background: ${theme.colors.blue["500"]};
    color: ${theme.colors.grey["100"]};
  }
  &:focus {
    background: ${theme.colors.blue["500"]};
    outline: none;
    color: ${theme.colors.grey["100"]};
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${theme.colors.blue["100"]};
  }

  const linkButtonStyles = css
  background: transparent;
  color: ${theme.colors.secondary};
  position: relative;
  padding: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-self: center;
  white-space: nowrap;
  cursor: pointer;

  &::after {
    content: "";
    width: 100%;
    background: ${theme.colors.secondary};
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    z-index: 1;
  }

  &:hover,
  &:hover::after {
    opacity: 0.8;
  }

  &:active {
    color: ${theme.colors.black["200"]};
  }

  &:focus,
  &:focus::after {
    outline-color: ${theme.colors.black["200"]};
  }

`;
