import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Importa NavLink en lugar de Link

// Estilos para los enlaces
const linkStyles = {
  color: 'inherit', // Usa el color de texto heredado
  textDecoration: 'none', // Quita el subrayado
  fontSize: '18px', 
  fontWeight: 'bold'
};

const sublinkStyles = {
  color: 'inherit', // Usa el color de texto heredado
  textDecoration: 'none', // Quita el subrayado
  fontSize: '18px', 
};

const titleStyles = {
  color: 'inherit', 
  textDecoration: 'none', 
  fontSize: '22px', 
  fontWeight: 'bold'
};

// Componente de barra de búsqueda
function SearchBar() {
  // Estado para controlar si se muestra o no el cuadro de búsqueda
  const [showInput, setShowInput] = useState(false);

  // Función para manejar el clic en el ícono de búsqueda
  const handleClick = () => {
    // Cambiar el estado para alternar entre mostrar y ocultar el cuadro de búsqueda
    setShowInput(true);
  };

  return (
    <div onClick={handleClick}>
      {/* Icono de búsqueda */}
      <i className="bi bi-search" style={{ fontSize: '26px', cursor: 'pointer' }}></i>{' '}
      {/* Mostrar el cuadro de búsqueda si showInput es true */}
      {showInput && <input type="text" placeholder="Search..." />}
    </div>
  );
}

// Componente de barra de navegación
export default function Navbar2() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Sección izquierda de la barra de navegación */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to="/home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <Navbar.Brand style={{ marginRight: '2px' }}>
              <i className="bi bi-house-door" style={{ fontSize: '26px' }}></i>
            </Navbar.Brand>
            <Navbar.Text style={{ ...linkStyles, fontSize: '18px', fontWeight: 'bold' }}>Home</Navbar.Text>
          </NavLink>
        </div>
        {/* Sección central de la barra de navegación */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Iconos para el segundo display */}
          <Navbar.Brand style={{ marginRight: '2px' }}>
            <i className="bi bi-cookie" style={{ fontSize: '26px' }}></i>
            <i className="bi bi-dribbble" style={{ fontSize: '26px' }}></i>
          </Navbar.Brand>
          {/* Display de Categories */}
          <Nav>
            <NavDropdown title="Categories" style={linkStyles} id="basic-nav-dropdown2">
              <NavDropdown.Item><NavLink to="/soccer" style={sublinkStyles}>Soccer</NavLink></NavDropdown.Item> 
              <NavDropdown.Item><NavLink to="/basketball" style={sublinkStyles}>Basketball</NavLink></NavDropdown.Item> 
            </NavDropdown>
          </Nav>
        </div>
        {/* Sección derecha de la barra de navegación */}
        <div>
          {/* Texto centrado en el medio */}
          <Nav>
            <Navbar.Text
              style={{
                width: '100%',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '22px',
              }}
            >
              SportGalileo {/* Solo texto sin enlace */}
            </Navbar.Text>
          </Nav>
        </div>
        {/*Categoria por marcas */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Iconos para el tercer display */}
          <Navbar.Brand style={{ marginRight: '2px' }}>
          <i class="bi bi-list-task"></i>
          </Navbar.Brand>
          {/* Display de las marcas que hay */}
          <Nav>
            <NavDropdown title="Companies" id="basic-nav-dropdown2" style={linkStyles}>
            <NavDropdown.Item><NavLink to="/Adidas" style={sublinkStyles}>Adidas</NavLink></NavDropdown.Item> 
              <NavDropdown.Item><NavLink to="/Nike" style={sublinkStyles}>Nike</NavLink></NavDropdown.Item> 
              <NavDropdown.Item><NavLink to="/Puma" style={sublinkStyles}>Puma</NavLink></NavDropdown.Item> 
              <NavDropdown.Item><NavLink to="/Umbro" style={sublinkStyles}>Umbro</NavLink></NavDropdown.Item> 
            </NavDropdown>
          </Nav>
        </div>
        {/* Icono de búsqueda y opciones restantes */}
        <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
          {/* Texto "Actions:" */}
          <Navbar.Text style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '5px' }}>Actions:</Navbar.Text>
          {/* Iconos */}
          <NavLink to="/carrito" style={{ ...linkStyles, marginRight: '5px' }}><i className="bi bi-cart4" style={{ fontSize: '26px' }}></i></NavLink> {/* Redireccionar al usuario a la vista del carrito de compras */}
          <NavLink to="/Favoritos" style={linkStyles}><i className="bi bi-star" style={{ fontSize: '26px' }}></i></NavLink>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
