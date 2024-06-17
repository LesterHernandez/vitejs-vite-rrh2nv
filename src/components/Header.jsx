import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header(){
  return(
    <header style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', paddingTop: '6px', paddingBottom: '2px'}}>
     <Container fluid>
        <p style={{ fontSize: '14px'}}>Summer discount: 30% discount on selected items </p>
      </Container>
    </header>
  )
}