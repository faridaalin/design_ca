import styled from "styled-components/macro";
import theme from "../../theme";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.grey["200"]};
  z-index: 1000;
  padding: 1rem;
  box-shadow: -4px -7px 13px ${theme.colors.black[200]};

  .logo {
    font-size: 1.5rem;
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.blue["500"]};
  }

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
    background: ${theme.colors.black["500"]};
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-items {
    position: absolute;
    right: 0;
    list-style: none;
    background: ${theme.colors.grey["200"]};
    height: 100vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    text-align: right;
    padding: 3rem 2rem;
    margin-right: ${(props) => (props.show ? "0" : "-100%")};
    transition: margin 0.4s;
  }
  .nav-item {
    margin-bottom: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.black["300"]};
    cursor: pointer;
    transition: ${theme.transition[0]}s all;
  }

  .nav-item:hover {
    color: ${theme.colors.black["500"]};
    opacity: 0.5;
  }
  .nav-item a {
    border-bottom: 1px solid transparent;
  }

  .nav-item a.active {
    color: ${theme.colors.black["500"]};
    border-color: ${theme.colors.black["500"]};
  }

  @media screen and (min-width: ${theme.breakpoints.md}) {
    .nav-items {
      position: static;
      height: auto;
      width: auto;
      flex-direction: row;
      margin-right: 0;
      padding: 0;
    }

    .nav-item {
      margin-bottom: 0;
      margin-right: 1rem;

      :last-child {
        margin-right: 0;
      }
    }

    .hamburger-menu {
      display: none;
    }
  }
`;

export default Header;
