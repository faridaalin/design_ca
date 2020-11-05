import React, {useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Header from './styledNavbar'


function Navigation() {
  const [show, setShow] = useState(false)

  const handleShowMenu = () => {
    setShow(!show)
  }
  const hideMenu = (e) => {
    setShow(!show)
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
};


  return (
    <Header show={show} >
      <div>
        <nav>
          <span
            className="logo"
            onClick={scrollToTop}>
              JURK
          </span>

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
                offset={-120}
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
                offset={-120}
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
                offset={-120}
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
                offset={-120}
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
                offset={-120}
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
