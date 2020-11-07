import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import styled from 'styled-components'

export const Container = styled.div`
max-height: 50vh;
overflow: scroll;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`


export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Container>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </Container>
  );
}
