import styled from "styled-components/macro";
import { up } from "styled-breakpoints";
import theme from "../../theme";

export const Container = styled.div`
  min-height: 100vh;
`;
export const ContainerFPairing = styled.div`
  min-height: 100vh;
  h2 {
    margin-bottom: ${theme.margin.xs};
  }
`;
export const H1 = styled.h1`
  font-size: 34px;
  font-weight: ${theme.fontWeight.bold};

  ${up("sm")} {
    font-size: 40px;
  }
  ${up("md")} {
    font-size: 48px;
  }
`;

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: ${theme.fontWeight.bold};

  ${up("sm")} {
    font-size: 31px;
  }
  ${up("md")} {
    font-size: 38px;
  }
`;

export const H3 = styled.h3`
  font-size: 22px;
  font-weight: ${theme.fontWeight.bold};

  ${up("sm")} {
    font-size: 25px;
  }
  ${up("md")} {
    font-size: 28px;
  }
`;
export const H4 = styled.h4`
  font-size: 18px;
  font-weight: ${theme.fontWeight.bold};

  ${up("sm")} {
    font-size: 20px;
  }
  ${up("md")} {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  font-size: 17px;
  font-weight: ${theme.fontWeight.medium};

  ${up("sm")} {
    font-size: 18px;
  }
`;

export const Body = styled.p`
  font-size: 14px;
  font-weight: ${theme.fontWeight.regular};
  max-width: 75ch;

  ${up("sm")} {
    font-size: 16px;
  }
`;

export const SmallText = styled.p`
  font-size: 12px;
  font-weight: ${theme.fontWeight.medium};

  ${up("sm")} {
    font-size: 14px;
  }
  ${up("md")} {
    font-size: 16px;
  }
`;

export const ButtonText = styled.p`
  font-size: 10px;
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${up("sm")} {
    font-size: 14px;
  }
  ${up("md")} {
    font-size: 16px;
  }
`;
export const TableContainer = styled.div`
  overflow: scroll;
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: ${theme.padding.p4};
  }
  margin-bottom: ${theme.margin.l};

  th {
    padding: ${theme.padding.p4} ${theme.padding.p2};
    color: ${theme.colors.black[200]};
    background-color: ${theme.colors.grey[300]};
  }

  td {
    text-align: left;
    padding: 8px;
  }

  td p {
    font-size: calc(${theme.fontSizes[1]}rem + 0.2vw);

  }

  tr:nth-child(even) {
    background-color: ${theme.colors.grey[200]};
  }
`;
