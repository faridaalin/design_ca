import "./App.css";
import { ColorBoxes, Layout, Pattern, Typography, Buttons } from "./components";

function App() {
  return (
    <main className="App">
      <p>Menu</p>
      <Layout title="Color scheme">
        <h3>Primary</h3>
        <ColorBoxes />
      </Layout>

      <Layout title="Pattern">
        <Pattern />
      </Layout>

      <Layout title="Typography">
        <Typography />
      </Layout>
      <Layout title="Buttons">
        <Buttons />
      </Layout>

      <p>Buttons & Links</p>
      <p> image section</p>
      <p> Sharing card and lazy loading with fallbacks</p>
    </main>
  );
}

export default App;
