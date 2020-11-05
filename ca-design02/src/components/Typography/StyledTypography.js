import styled from "styled-components/macro";
import { up } from 'styled-breakpoints';
import theme from '../../theme'

export const Container = styled.div`

`;
export const H1 = styled.h1`
font-size: 34px;
font-weight: ${theme.fontWeight.bold};

${up('sm')} {
  font-size: 40px;
  }
${up('md')} {
  font-size: 48px;
  }
`;

export const H2 = styled.h2`
font-size: 28px;
font-weight: ${theme.fontWeight.bold};


${up('sm')} {
  font-size: 31px;
  }
${up('md')} {
  font-size: 38px;
  }

`;

export const H3 = styled.h3`
font-size: 22px;
font-weight: ${theme.fontWeight.bold};

${up('sm')} {
  font-size: 25px;
  }
${up('md')} {
  font-size: 28px;
  }
`;

export const Subtitle = styled.p`
font-size: 17px;
font-weight: ${theme.fontWeight.medium};

${up('sm')} {
  font-size: 18px;
  }

`;

export const Body = styled.p`
font-size: 14px;
font-weight: ${theme.fontWeight.regular};

${up('sm')} {
  font-size: 16px;
  }
`;


export const SmallText = styled.p`
font-size: 12px;
font-weight: ${theme.fontWeight.medium};

${up('sm')} {
  font-size: 14px;
  }
${up('md')} {
  font-size: 16px;
  }
`;

export const ButtonText = styled.p`
font-size: 10px;
font-weight: ${theme.fontWeight.bold};
text-transform: uppercase;
letter-spacing: 0.5px;

${up('sm')} {
  font-size: 14px;
  }
${up('md')} {
  font-size: 16px;
  }
`;


