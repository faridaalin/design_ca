import React from "react";
import { StyledArticle } from "./StyledArticle";

function Article({ title, children, id }) {
  return (
    <StyledArticle id={id}>
      <h2>{title}</h2>
      {children}
    </StyledArticle>
  );
}

export { Article };
