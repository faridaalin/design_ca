import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import theme from '../../theme'

const Header = styled.header`
position: fixed;
top: 0;
left:0;
right: 0;
background: ${theme.colors.grey['200']};
z-index: 1000;

  .hamburger-menu {
    /* position: fixed; */
    /* top: 20px;
  right: 20px; */
  margin-left: auto;
    height: 32px;
    width: 32px;
    display: grid;
    grid-template-rows: 4px 4px 4px;
    align-content: space-around;
    cursor: pointer;
    z-index: 2;
  }

  .hamburger-menu span {
    transition: 0.3s;
    background: ${theme.colors.primary};
  }

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
`;

function Navigation() {
  return (
    <Header>
      <div>
        <nav>

          <div class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
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
          </ul>
        </nav>
      </div>
    </Header>
  );
}

export { Navigation };
