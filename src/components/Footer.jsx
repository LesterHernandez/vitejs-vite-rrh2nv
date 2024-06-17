import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
      }}
    >
      <Container>
        <p style={{ fontSize: '14px', margin: 0 }}>
          by Lester Hernandez, José España | SportGalileo - Sports Equipment in
          Guatemala - All rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;