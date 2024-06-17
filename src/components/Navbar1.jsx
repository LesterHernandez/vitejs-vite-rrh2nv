import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Importa NavLink para los enlaces
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const linkStyles = {
  color: 'inherit',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
};

export default function Navbar1() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-between">
        {/* Redes sociales */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Navbar.Brand style={{ marginLeft: '0px', marginRight: '5px' }}>
            <a style={{ ...linkStyles, fontSize: '24px' }} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </Navbar.Brand>
          <Navbar.Brand style={{ marginLeft: '0px', marginRight: '5px' }}>
            <a style={{ ...linkStyles, fontSize: '24px' }} href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          </Navbar.Brand>
          <Navbar.Brand style={{ marginLeft: '0px', marginRight: '5px' }}>
            <a style={{ ...linkStyles, fontSize: '24px' }} href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
          </Navbar.Brand>
        </div>

        {/* Texto centrado */}
        <Nav className="mx-auto">
          <Navbar.Text style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center', color: '#4376B4'}}>
            Open Doors to All Soccer and Basketball Lovers / Discover the Best for You
          </Navbar.Text>
        </Nav>

        {/* Contacto */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to="/contact" style={{ ...linkStyles, display: 'flex', alignItems: 'center' }}>
            <Navbar.Brand style={{ marginRight: '2px' }}>
              <i className="bi bi-envelope" style={{ fontSize: '24px' }}></i>
            </Navbar.Brand>
            <Navbar.Text style={{ ...linkStyles }}>Contact</Navbar.Text>
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
}
