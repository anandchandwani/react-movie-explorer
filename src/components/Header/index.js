import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                color: "#0b0225",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              EasyCinemaHome
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/trending"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Trending
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/movies"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Movies
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/shows"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Shows
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
