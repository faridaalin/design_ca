import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import { StyledImage, Container } from './StyledImage'
import largeImg from '../../Images/officeImages/cowomen_w_1076.jpg'
import medImg from '../../Images/officeImages/cowomen_w_645.jpg'
import smallImg from '../../Images/officeImages/cowomen_w_200.jpg'

const Images = (props) => (
  <div id={props.id}>

  <figure>
    <picture>
    <LazyLoadImage
      alt="women working in a office"
      effect="blur"
      src={smallImg}
      sizes='(min-width: 500px) 50vw, 100vw'
      srcSet={`${smallImg} 200w, ${medImg} 645w, ${largeImg} 1076w`} // use normal <img> attributes as props
       />
    </picture>
    <figcaption id="">
        16:9
            </figcaption>

  </figure>
  </div>
);

export { Images };
