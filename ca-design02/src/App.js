import "./App.css";
import { ColorBoxes, Layout, Pattern, Typography, Buttons, Links } from "./components";

function App() {
  return (
    <main className="App">
      <p>Menu</p>
      <Layout title="Color scheme">
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
      <Layout title="Links">
        <Links />
      </Layout>


      <p> image section</p>
      <p> Sharing card and lazy loading with fallbacks</p>
    </main>
  );
}

export default App;
