import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Carrito() {
  const { cart, removeFromCart } = useContext(CartContext); // Agregar la función removeFromCart del contexto

  // Calcular el total a pagar
  const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <Header />
      <Navbar1 />
      <Navbar2 />
      <Container>
        <h2>Shopping Cart</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th> {/* Agregar una columna para la acción */}
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={item.image} alt={item.name} style={{ width: '50px' }} /></td>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button> {/* Agregar un botón de eliminación */}
                </td>
              </tr>
            ))}
            <tr style={{fontWeight: 'bold' }}>
              <td colSpan="6" style={{ textAlign: 'right', fontSize: '1.2rem' }}>Total:</td>
              <td style={{ fontSize: '1.2rem' }}>${totalAmount.toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
        <Link to="/compra" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button 
            style={{
              backgroundColor: 'black',
              color: 'white',
              marginTop: '10px',
              width: '100%',
            }}>
            Buy Products
          </Button>
        </Link>
      </Container>
      <footer
        style={{
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '10px 0',
          position: 'fixed',
          width: '100%',
          bottom: 0,
        }}
      >
        <p style={{ fontSize: '14px', margin: 0 }}>
          by Lester Hernandez, José España | SportGalileo - Sports Equipment in
          Guatemala - All rights reserved
        </p>
      </footer>
    </>
  );
}
