import styled, {css} from "styled-components/macro";



export const StyledButton = styled.button`
padding: ${({ theme: { padding } }) => `${padding.p2} ${padding.p4}`};
border: none;
border-radius: 100px;
border: 1px solid transparent;

${(props) => props.primary && css`
  background: ${({ theme}) => theme.colors.primary};
  color: ${({ theme}) => theme.colors.grey['300']};
`};

${(props) => props.secondary && css`
  background: ${({ theme}) => theme.colors.secondary};
  color: ${({ theme}) => theme.colors.grey['300']};
`}
`;
