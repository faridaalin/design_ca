import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`

.info {

}

`;

const StyledPattern = styled.div`
    background: ${props => props.theme.colors.grey[100]};
  height: 100px;
  width: 100%;

`;

const Pattern = (props) => {


  return (
    <Container>
      <StyledPattern />
      <div className="info">
        <p>Description</p>
      </div>
    </Container>
  );
};

export { Pattern };

