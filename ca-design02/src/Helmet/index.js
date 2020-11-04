import React from "react";
import Helmet from "react-helmet";

const ReactHelmet = () => {
  return (
    <Helmet>
    {/* <!-- HTML Meta Tags --> */}
    <title>Jurk</title>
    <meta
      name="description"
      content="JURK er juridisk rådgivning for kvinner og er et uavhengig rettshjelps- og likestillingstiltak som drives av jusstudenter."
    />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta itemprop="name" content="Jurk" />
    <meta
      itemprop="description"
      content="JURK er juridisk rådgivning for kvinner og er et uavhengig rettshjelps- og likestillingstiltak som drives av jusstudenter."

    />
    <meta
      itemprop="image"
      content="https://res.cloudinary.com/djey7uz4e/image/upload/v1604501755/jurk_g2ax4u.png"
    />

    {/* <!-- Facebook Meta Tags --> */}
    <meta property="og:url" content="https://foreninger.uio.no/jurk" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Jurk" />
    <meta
      property="og:description"
      content="JURK er juridisk rådgivning for kvinner og er et uavhengig rettshjelps- og likestillingstiltak som drives av jusstudenter."
    />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/djey7uz4e/image/upload/v1604501755/jurk_g2ax4u.png
    />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Jurk" />
    <meta
      name="twitter:description"
      content="JURK er juridisk rådgivning for kvinner og er et uavhengig rettshjelps- og likestillingstiltak som drives av jusstudenter."
    />
    <meta
      name="twitter:image"
      content="https://res.cloudinary.com/djey7uz4e/image/upload/v1604501755/jurk_g2ax4u.png"
    />
  </Helmet>
  )
}

export { ReactHelmet };
