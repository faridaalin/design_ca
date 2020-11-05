import React, {useState} from "react";
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
padding: 1rem;

  .hamburger-menu {
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
    background: ${theme.colors.black['500']};
  }
  .inner-nav {

  }

  .nav-items {
    position: absolute;
    right: 0;
    list-style: none;
    background: ${theme.colors.grey['200']};
    height: 100vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    text-align: right;
    padding: 3rem 2rem;
    margin-right: ${(props) =>   props.show ? '0px' : '-168px'};
    transition: margin .4s;
  }
  .nav-item {
    margin-bottom: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.black['300']};
    cursor: pointer;
  }



  .nav-item:hover {
    color: ${theme.colors.black['500']};
  }
  .nav-item a {
    border-bottom: 1px solid transparent;
  }

  .nav-item a.active  {
    color: ${theme.colors.black['500']};
    border-color: ${theme.colors.black['500']};

  }
`;

function Navigation() {
  const [show, setShow] = useState(false)

  const handleShowMenu = () => {
    setShow(!show)
  }
  const hideMenu = (e) => {
    setShow(!show)
  }
  return (
    <Header show={show} >
      <div>
        <nav>
          <div class="hamburger-menu" onClick={handleShowMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="inner-nav" >
          <ul className="nav-items" >
            <li className="nav-item">
              <Link
                activeClass="active"
                to="colors"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={hideMenu}
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
                onClick={hideMenu}
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
                onClick={hideMenu}
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
                onClick={hideMenu}
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
                onClick={hideMenu}
              >
                Images
              </Link>
            </li>
          </ul>
          </div>

        </nav>
      </div>
    </Header>
  );
}

export { Navigation };
