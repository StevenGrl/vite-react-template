import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Exemple de class react avec des propriétés
class MyCustomClassNavbar extends React.Component {
  constructor({ bg, theme, username }) {
    super();
    this.state = { bg: bg ?? 'primary', theme: theme ?? 'dark', username: username ?? 'Anonymous' };
  }

  render() {
    return (
      <Navbar bg={this.state.bg} data-bs-theme={this.state.theme}>
        <Container>
          <Navbar.Brand href="#home">My Custom Class Navbar Title</Navbar.Brand>
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
              Signed in as: <a href="#login">{this.state.username}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyCustomClassNavbar;
