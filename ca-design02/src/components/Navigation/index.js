import React from 'react'
// import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import { Link } from "react-scroll";
import styled from 'styled-components';

const UL = styled.ul`

.nav-item {
  display: inline;
  margin-left: 2rem;
  color: #333;
}

.nav-item:hover {
  color: black;
  cursor: pointer;
}

.nav-item > .active {
    border-bottom: 1px solid #333;
}
`

function Navigation() {
  return (
    <div>
      <nav>
        <UL>
        <li className="nav-item">
              <Link
                activeClass="active"
                to="colors"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Colors
              </Link>
            </li>
        <li className="nav-item">
              <Link
                activeClass="active"
                to="pattern"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Pattern
              </Link>
            </li>
        <li className="nav-item">
              <Link
                activeClass="active"
                to="typography"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Typography
              </Link>
            </li>
        <li className="nav-item">
              <Link
                activeClass="active"
                to="links"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Links
              </Link>
            </li>
        <li className="nav-item">
              <Link
                activeClass="active"
                to="images"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Images
              </Link>
            </li>
        </UL>
      </nav>
    </div>
  )
}

export { Navigation };
