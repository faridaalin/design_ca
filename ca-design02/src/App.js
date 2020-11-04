import "./App.css";
import { ColorBoxes, Layout, Pattern, Typography, Buttons, Links, Images, ReactHelmet } from "./components";

function App() {
  return (
    <main className="App">
      <ReactHelmet />
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
      <p> Sharing card</p>
    </main>
  );
}

export default App;
