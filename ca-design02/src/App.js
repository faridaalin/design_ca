import "./App.css";
import { ColorBoxes, Layout, Pattern, Typography, Buttons, Links, Images, Metatags } from "./components";

function App() {
  return (
    <main className="App">
      <Metatags />
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


      <Layout title="Images">
        <Images />
      </Layout>
    </main>
  );
}

export default App;
