import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default class navbar extends Component {
  state = {
    menuToggled: false,
  };
  handleMenuToggle = () => {
    const menuToggled = !this.state.menuToggled;
    this.setState({ menuToggled });
  };
  render() {
    const { menuToggled } = this.state;
    return (
      <Navbar className="navbar">
        <span className="menu-toggle" onClick={this.handleMenuToggle}>
          <div className="menu-icons">
            <div
              className={!menuToggled ? 'menu-icon1' : 'menu-icon1 change'}
            />
            <div
              className={!menuToggled ? 'menu-icon2' : 'menu-icon2 change'}
            />
            <div
              className={!menuToggled ? 'menu-icon3' : 'menu-icon3 change'}
            />
          </div>
        </span>
        <a href="/" className="nav-title">
          PHIL OWEN
        </a>
        <ul className={!menuToggled ? 'main-nav' : 'main-nav active'}>
          <li>
            <Link className="nav-links" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/work">
              Work
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </Navbar>
    );
  }
}

// Styles

const Navbar = styled.nav`
  font-size: 22px;
  padding-bottom: 10px;
  margin-bottom: 40px;
  border-bottom: 2px solid black;
  .main-nav {
    margin-top: 10px;
    margin-bottom: 0px;
    list-style-type: none;
    display: none;
    li {
      text-align: left;
      margin: 15px auto;
    }
  }
  .nav-title {
    display: inline-block;
    font-size: 32px;
    margin-top: 10px;
    margin-left: 20px;
  }
  .nav-links,
  .nav-title {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
  }
  .menu-icons {
    position: absolute;
    top: 5px;
    right: 20px;
    cursor: pointer;
  }
  .menu-icon1,
  .menu-icon2,
  .menu-icon3 {
    top: 10px;
    right: 20px;
    cursor: pointer;
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }
  .change.menu-icon1 {
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  .change.menu-icon2 {
    opacity: 0;
  }
  .change.menu-icon3 {
    transform: rotate(45deg) translate(-8px, -8px);
  }
  .active {
    display: block;
  }
  /* MEDIA QUERY */
  @media screen and (min-width: 768px) {

    display: flex;
    justify-content: space-between;
    /* padding-bottom: 20px; */
    height: 60px;
    align-items: center;

    .main-nav {
      display: flex;
      margin-right: 30px;
      flex-direction: row;
      justify-content: flex-end;
    }
    .main-nav li {
      margin: 0;
    }
    .nav-links {
      margin-left: 40px;
    }
    .nav-title {
      
    }
    .menu-toggle {
      display: none;
    }
    .nav-title:hover,
    .nav-links:hover {
      color: #A7AF9A;
    }
  }
`;
