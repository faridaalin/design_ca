import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Description from "../Description/Description";
import largeImg from "../../Images/officeImages/cowomen_w_1076.jpg";
import medImg from "../../Images/officeImages/cowomen_w_645.jpg";
import smallImg from "../../Images/officeImages/cowomen_w_200.jpg";

const Images = (props) => (
  <div id={props.id}>
    <Description>
      Images is an important as they can give context to content and give better
      user experience. Images can have the following aspect ratio 1:1, 3:4 and
      16:9. They should not be grater than 200kb and max size 1500px.
    </Description>
    <figure>
      <picture>
        <LazyLoadImage
          alt="women working in a office"
          effect="blur"
          src={smallImg}
          sizes="(min-width: 500px) 50vw, 100vw"
          srcSet={`${smallImg} 200w, ${medImg} 645w, ${largeImg} 1076w`}
        />
      </picture>
      <figcaption>16:9</figcaption>
    </figure>
  </div>
);

export { Images };
