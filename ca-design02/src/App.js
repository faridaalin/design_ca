import "./App.css";
import { Square, Layout } from "./components";
import theme from "./theme";
import { ThemeProvider } from "emotion-theming";
import styled from "styled-components/macro";

const Div = styled.div`
height: 100%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  grid-gap: 1rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <p>Menu</p>
        <Layout title="Color scheme">
          <Grid>
            <Div>
              <Square>Square</Square>
              <div>Coral</div>
              <div>Hex:</div>
              <div>HSL:</div>
            </Div>
            <Div>
              <Square />
              <div>Coral</div>
              <div>Hex:</div>
              <div>HSL:</div>
            </Div>
          </Grid>
        </Layout>

        <p>pattern</p>
        <p>Typography</p>
        <p>Buttons & Links</p>
        <p> image section</p>
        <p> Sharing card and lazy loading with fallbacks</p>
      </main>
    </ThemeProvider>
  );
}

export default App;
