import React from 'react'
import { ColorBoxes, Layout, Pattern, Typography, Buttons, Links, Images, Metatags } from "../components";


function Home() {
  return (
    <div>
         <Metatags />
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
    </div>
  )
}

export default Home
