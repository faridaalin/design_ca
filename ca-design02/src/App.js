import "./App.css";
import { ColorBoxes, Layout, Pattern, Typography, Buttons, Links, Images, Metatags, Navigation } from "./components";

function App() {
  return (
    <main className="App">
      <Metatags />
      <Navigation />
      <Layout title="Color scheme"  >
        <ColorBoxes id="colors" />
      </Layout>

      <Layout title="Pattern">
        <Pattern  id="pattern"/>
      </Layout>

      <Layout title="Typography">
        <Typography id="typography" />
      </Layout>

      <Layout title="Buttons" >
        <Buttons id="buttons" />
      </Layout>

      <Layout title="Links" >
        <Links id="links" />
      </Layout>


      <Layout title="Images">
        <Images id="images" />
      </Layout>
    </main>
  );
}

export default App;
