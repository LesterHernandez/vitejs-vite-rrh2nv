import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import ProcesoCompra from '../components/ProcesoCompra';

export default function Compra() {
  return (
    <>
      <Header />
      <Navbar1 />
      <Navbar2 />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ backgroundColor: 'black', padding: '10px', display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '960px' }}>
          <img src="https://i.postimg.cc/XvhhWvPQ/onlineshopping.jpg" alt="Online Shopping" style={{ maxWidth: '50%', maxHeight: '300px', marginRight: '5px' }} /> 
          <img src="https://i.postimg.cc/Gtq3qYMX/onlineshopping2.jpg" alt="Online Shopping 2" style={{ maxWidth: '50%', maxHeight: '300px', marginLeft: '5px' }} /> 
        </div>
      </div>
      <ProcesoCompra />
      <Footer />
    </>
  );
}
