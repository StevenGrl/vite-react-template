import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Exemple de composant avec des propriétés sans passer par une classe react
const MyCustomNavbar = ({ bg, theme, username }) => {
  return (
    <Navbar className="mb-5" bg={bg} data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#home">My Custom Navbar Title</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="ms-2" to="/">
            Home
          </Link>
          <Link className="ms-2" to="/counter">
            Counter
          </Link>
          <Link className="ms-2" to="/counter-with-store">
            Counter With Store
          </Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{username ?? 'Anonymous'}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyCustomNavbar;
