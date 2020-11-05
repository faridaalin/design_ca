import "./App.css";
import { ColorBoxes, Article, Pattern, Typography, Buttons, Links, Images, Metatags, Navigation } from "./components";



function App() {
  return (
    <main className="App">
      <Metatags />
      <Navigation />
      <Article title="Color scheme" id="colors" >
        <ColorBoxes />
      </Article>

      <Article title="Pattern" id="pattern" >
        <Pattern />
      </Article>

      <Article title="Typography" id="typography" >
        <Typography />
      </Article>

      <Article title="Buttons" id="buttons">
        <Buttons />
      </Article>

      <Article title="Links" id="links">
        <Links />
      </Article>


      <Article title="Images" id="images" >
        <Images />
      </Article>
    </main>
  );
}

export default App;
