import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Estilos para los enlaces
const linkStyles = {
  color: 'inherit', // Usa el color de texto heredado
  textDecoration: 'none' // Quita el subrayado
};

// Estilos para el Navbar
const navbarStyles = {
  backgroundColor: 'black', 
  borderBottom: '2px solid white', 
};

// Estilos para los títulos de los selectores
const dropdownTitleStyles = {
  color: 'white', 
  fontSize: '18px', 
  fontWeight: 'bold' 
};

export default function Navbar2() {
  return (
    <Navbar style={navbarStyles} expand="lg" variant="dark">
      <Container className="justify-content-center"> {/* Centra el contenido horizontalmente */}
        {/* Sección central de la barra de navegación */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Iconos para el segundo display */}
          <Navbar.Brand style={{ marginRight: '2px', color: 'white' }}>
            <i className="bi bi-cookie"></i> 
          </Navbar.Brand>
          {/* Display de Soccer */}
          <Nav>
            <NavDropdown title="Soccer" id="basic-nav-dropdown2" style={dropdownTitleStyles}>
              <NavDropdown.Item><Link to="/BackpackS" style={linkStyles}>Backpacks</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/BallsSoccer" style={linkStyles}>Balls</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/Equipment" style={linkStyles}>Equipment</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/CleatsSoccer" style={linkStyles}>Cleats</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/JerseySoccer" style={linkStyles}>Jerseys</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/ShortsSoccer" style={linkStyles}>Shorts</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/SocksSoccer" style={linkStyles}>Socks</Link></NavDropdown.Item> 
            </NavDropdown>
          </Nav>
          <Navbar.Brand style={{ marginRight: '2px', color: 'white' }}>
            {' '}
            <i className="bi bi-dribbble"></i>
          </Navbar.Brand>
          {/* Display de Basketball */}
          <Nav>
            <NavDropdown title="Basketball" id="basic-nav-dropdown2" style={dropdownTitleStyles}>
              <NavDropdown.Item><Link to="/BackpackBasket" style={linkStyles}>Backpacks</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/BallsBasketball" style={linkStyles}>Balls</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/Caps" style={linkStyles}>Caps</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/CleatsBasketball" style={linkStyles}>Cleats</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/JerseyBasket" style={linkStyles}>Jerseys</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/ShortsBasket" style={linkStyles}>Shorts</Link></NavDropdown.Item> 
              <NavDropdown.Item><Link to="/SocksBasket" style={linkStyles}>Socks</Link></NavDropdown.Item> 
            </NavDropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
