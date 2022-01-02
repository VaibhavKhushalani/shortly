import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "styled-button-component";
import { Navbar, NavbarLink } from "styled-navbar-component";
import { Nav } from "styled-nav-component";
import logoSvg from "../assests/logo.svg";

const NavbarComponent = styled.div`
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  margin-left: 120px;
  margin-right: 120px;

  .navbar-container {
    display: inline-flex;
    width: 100%;
  }

  .navbar-item,
  .navbar-item-brand,
  .navbar-end {
    padding-left: 30px;
    padding-right: 20px;
    margin-top: 20px;
    text-decoration: none;
  }
  .navbar-button {
    margin-top: 20px;
  }
  .navbar-line {
    display: none;
  }

  @media (max-width: 1100px) {
    margin: 0px auto;
  }
  @media (max-width: 784.9px) {
    .navbar-item,
    .navbar-item-brand,
    .navbar-end {
      padding-left: 20px;
      padding-right: 10px;
    }
  }

  @media (max-width: 768.9px) {
    .toogle-button {
      position: absolute;
      right: 4%;
      margin-top: 10px;
      top: 10px;
    }
    .navbar-item-brand {
      margin-top: 10px;
      position: absolute;
      top: 10px;
    }
    .navbar-item,
    .navbar-end {
      color: #fff;
    }
    .navbar-container {
      background-color: #3b3054;
      border-radius: 10px;
      display: inline;
      text-align: center;
      margin-top: 55px;
      width: 100%;
      position: inherit;
    }
    .navbar-line {
      display: block;
      width: 90%;
      border: 0.2px solid #6c647c;
    }
    .navbar-end {
      width: 100%;
    }
  }
`;

const DesignButton = styled.button`
  background-color: #2acfcf;
  border-radius: 20px;
  font-size: 17px;
  color: #fff;
  border: none;
  width: 95px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #9be3df;
  }
  @media (max-width: 768.9px) {
    width: 90%;
    float: none;
    margin: 0px auto;
    margin-bottom: 2em;
  }
`;

const NavComponent = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <NavbarComponent>
      <Navbar expandSm white>
        <Nav start>
          <NavbarLink light brand active href="#">
            <img className="navbar-item-brand" src={logoSvg} alt="logoSvg" />
          </NavbarLink>
          <Nav end>
            <Button
              className="toogle-button"
              light
              toggleCollapse
              expandMd
              onClick={() => setHidden(!hidden)}
            >
              <span>&#9776;</span>
            </Button>
          </Nav>
        </Nav>
        <Nav start collapse expandMd hidden={hidden}>
          <div className="navbar-container">
            <NavbarLink className="navbar-item" light href="#">
              Features
            </NavbarLink>
            <NavbarLink className="navbar-item" light href="#">
              Pricing
            </NavbarLink>
            <NavbarLink className="navbar-item" light href="#">
              Resources
            </NavbarLink>
            <hr className="navbar-line" />
            <Nav end>
              <NavbarLink className="navbar-end" light href="#">
                Login
              </NavbarLink>
              <DesignButton className="navbar-button" light href="#">
                Signup
              </DesignButton>
            </Nav>
          </div>
        </Nav>
      </Navbar>
    </NavbarComponent>
  );
};

export default NavComponent;
