import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SoccerCategories() {
  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 'bold',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',  // Aumentar desplazamiento y opacidad
    transition: 'all 0.3s ease',  // Transición suave para cambios
  };

  return (
    <div>
      {/* Diseño para el titulo de la categoria de futbol */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div
          style={{
            background: 'black',
            color: 'white',
            padding: '10px',
            width: '32%',
            fontSize: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2>WELCOME TO SOCCER SECTION</h2>
        </div>
        <img
          src="https://i.postimg.cc/9Fj6twmG/balon-de-futbol.png"
          alt="Balón de fútbol"
          style={{
            marginLeft: '5px',
            maxHeight: '75px', // Ajusta la altura de la imagen
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Contenedor de las tarjetas para las categorias más populares de fut */}
      <Container fluid>
        <div style={{ background: 'black', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '84px', paddingRight: '84px' }}>
          <div className="custom-card-group">
            <Card bg="warning" text="black" style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/jSnqxDv9/Soccer-Cleats.jpg" />
              <Card.Body>
                <Card.Title>
                  <Link to="/CleatsSoccer" style={linkStyles}>CLEATS</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card bg="danger" text="white" style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/s2YC07DY/barcelona.jpg" />
              <Card.Body>
                <Card.Title>
                  <Link to="/JerseySoccer" style={linkStyles}>JERSEYS</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card bg="info" text="black" style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/7Yqh11wy/socerballs.webp" />
              <Card.Body>
                <Card.Title>
                  <Link to="/BallsSoccer" style={linkStyles}>BALLS</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card bg="success" text="white" style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/L55H7DXq/equipment.jpg" />
              <Card.Body>
                <Card.Title>
                 <Link to="/Equipment" style={linkStyles}>EQUIPMENT</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card bg="warning" text="black" style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/bww1NcBW/soccershorts.jpg" />
              <Card.Body>
                <Card.Title>
                  <Link to="/ShortsSoccer" style={linkStyles}>SHORTS</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      {/* Estilos CSS para las tarjetas y el scrollbar */}
      <style jsx>{`
        .custom-card-group {
          display: flex;
          overflow-x: auto;
          scrollbar-width: thin; /* Para Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }

        .custom-card-group::-webkit-scrollbar {
          height: 15px; /* Altura de la barra de desplazamiento para Chrome, Safari y Opera */
        }

        .custom-card-group::-webkit-scrollbar-thumb {
          background-color: #888; /* Color de la barra de desplazamiento */
          border-radius: 10px;
        }

        .custom-card-group::-webkit-scrollbar-thumb:hover {
          background: #555; /* Color de la barra de desplazamiento al pasar el ratón */
        }

        .custom-card-group .card {
          flex: 0 0 auto; /* Tarjetas con tamaño automático */
          margin-right: 1rem; /* Espacio entre tarjetas */
        }

        .card img {
          height: 200px; /* Ajusta la altura de la imagen según sea necesario */
          object-fit: cover; /* Asegura que la imagen cubra toda el área */
        }

        .card-title {
          text-align: center; /* Centra el texto del título dentro de la tarjeta */
        }
      `}</style>

      {/* Tarjetas para las categorías restantes (menos populares) */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-2 mb-4">
          <div className="card bg-secondary">
            <img src="https://i.postimg.cc/MK8hLtFv/manchester.jpg" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title text-center">
                <Link to="/BackpackS" style={linkStyles}>BACKPACKS</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-2 mb-4">
          <div className="card bg-secondary">
            <img src="https://i.postimg.cc/c1VnGtRK/soccersocks.jpg" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title text-center">
                <Link to="/SocksSoccer" style={linkStyles}>SOCKS</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-2 mb-4">
          <div className="card bg-secondary">
            <img src="https://i.postimg.cc/bww1NcBW/soccershorts.jpg" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title text-center">
               <Link to="/ShortsSoccer" style={linkStyles}>SHORTS</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
