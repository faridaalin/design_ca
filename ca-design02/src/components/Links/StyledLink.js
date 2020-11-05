import styled, {css} from "styled-components/macro";


const LinkStyles = css`
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid transparent;
`;
const HoveredLink = css`
  color: ${({ theme }) => theme.colors.blue["200"]};
  border-color: ${({ theme }) => theme.colors.blue["200"]};
`;

const ActiveLink = css`
  color: ${({ theme }) => theme.colors.blue["500"]};
  border-color: ${({ theme }) => theme.colors.blue["500"]};
`;

const FocusedLink = css`
  outline: none;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue["500"]},
    0 0 0 6px ${({ theme }) => theme.colors.grey["400"]};
`;

const getLinkStyles = (props) => {
  return props.hover ? HoveredLink
      : props.active ? ActiveLink
      : props.focus ? FocusedLink
      : LinkStyles

}


export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid transparent;
  text-decoration: none;
  margin-bottom: 1rem;
  margin-right: 1rem;
  white-space: nowrap;
  align-self: center;

  ${getLinkStyles}

`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
