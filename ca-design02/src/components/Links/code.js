import theme from '../../theme'

export const code = `
sharedStyles = css
  border-bottom: 1px solid transparent;
  text-decoration: none;
  margin-bottom: 1rem;
  margin-right: 1rem;
  white-space: nowrap;
  align-self: center;
  cursor: pointer;
  transition: ${theme.transition[0]}s all;

  const LinkStyles = css
  color: ${theme.colors.primary};
  border-color: transparent;
;
const HoveredLink = css
  color: ${theme.colors.blue["200"]};
  border-color: ${theme.colors.blue["200"]};
;

const ActiveLink = css
  color: ${theme.colors.blue["500"]};
  border-color: ${theme.colors.blue["500"]};
;

const FocusedLink = css
  outline: none;
  box-shadow: 0 0 0 2px ${theme.colors.blue["500"]},
    0 0 0 6px ${theme.colors.grey["400"]};
;

const IndepLinkStyles = css
  color: ${theme.colors.black[400]};
  border-color: transparent;
;
const IndepHoveredLink = css
  opacity: 0.7;
  border-color: ${theme.colors.black[400]};
;

const IndepActiveLink = css
  color: ${theme.colors.black[500]};
  border-color: ${theme.colors.black[500]};
;

const IndepFocusedLink = css
  outline: none;
  box-shadow: 0 0 0 2px ${theme.colors.black["500"]},
    0 0 0 6px ${theme.colors.grey["400"]};
;
`;
