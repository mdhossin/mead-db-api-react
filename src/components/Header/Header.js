import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/home">Meal DB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-5">
              <Stack direction="horizontal" gap={4}>
                <NavLink
                  className="textDecoration"
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F9A825",
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  className="textDecoration"
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F9A825",
                  }}
                >
                  About Us
                </NavLink>
                <NavLink
                  className="textDecoration"
                  to="/contact"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F9A825",
                  }}
                >
                  Contact
                </NavLink>
                <NavLink
                  className="textDecoration"
                  to="/meals"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F9A825",
                  }}
                >
                  Meals
                </NavLink>
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
