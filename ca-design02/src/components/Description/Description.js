import React from "react";
import StyledDescription from "./styledDescription";


function Description({ children }) {
  return (
    <StyledDescription>
      <p>{children}</p>
    </StyledDescription>
  );
}

export default Description;
