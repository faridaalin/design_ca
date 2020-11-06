import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


SyntaxHighlighter.registerLanguage('jsx', jsx);

export const codeBlock = () => {
  const codeString = '(num) => num + 1';
  // const codeString = `${children}`;
  return (
    <SyntaxHighlighter language="javascript" style={darcula}>
      {codeString}

    </SyntaxHighlighter>
  );
};
