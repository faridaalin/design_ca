import "./App.css";
import { Square, Layout, Pattern, Typography } from "./components";
import styled from "styled-components/macro";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
`;

function App() {
  return (
      <main className="App">
        <p>Menu</p>
        <Layout title="Color scheme">
          <h3>Primary</h3>
          <Grid>
            <Square
              shade="500"
              name="pink"
              colorName="pink"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="400"
              name="pink"
              colorName="pink"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="300"
              name="pink"
              colorName="pink"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="200"
              name="pink"
              colorName="pink"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="100"
              name="pink"
              colorName="pink"
              hex="0000"
              hsla="000 000 000"
            />
          </Grid>
          <h3>Black</h3>
          <Grid>
            <Square
              shade="500"
              name="Black"
              colorName="black"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="400"
              name="Black"
              colorName="black"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="300"
              name="Black"
              colorName="black"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="200"
              name="Black"
              colorName="black"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="100"
              name="Black"
              colorName="black"
              hex="0000"
              hsla="000 000 000"
            />
          </Grid>

          <h3>Cloud</h3>
          <Grid>
            <Square
              shade="500"
              name="Cloud"
              colorName="grey"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="400"
              name="Cloud"
              colorName="grey"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="300"
              name="Cloud"
              colorName="grey"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="200"
              name="Cloud"
              colorName="grey"
              hex="0000"
              hsla="000 000 000"
            />
            <Square
              shade="100"
              name="Cloud"
              colorName="grey"
              hex="0000"
              hsla="000 000 000"
            />
          </Grid>
        </Layout>

        <Layout title="Pattern">
          <Pattern />
        </Layout>

        <Layout title="Typography">
          <Typography />
        </Layout>

        <p>Buttons & Links</p>
        <p> image section</p>
        <p> Sharing card and lazy loading with fallbacks</p>
      </main>
  );
}

export default App;
