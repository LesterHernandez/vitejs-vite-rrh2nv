import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap'; // Importar Card desde react-bootstrap
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componente Enviar recibe un prop "envio"
const Enviar = ({ envio }) => {
  // Obtener mensajes guardados en localStorage o inicializar con un array vacío
  const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];

  // Estado local para mensajes y si el producto es favorito
  const [messages, setMessages] = useState(savedMessages);
  const [isFavorite, setIsFavorite] = useState(
    savedMessages.some((msg) => msg.message === envio.message)
  );

  // Función para manejar el envío del mensaje (agregar o quitar de favoritos)
  const sendMessage = () => {
    // Verificar si el mensaje ya está en favoritos
    const isAlreadyFavorite = messages.some(
      (msg) => msg.message === envio.message
    );
    let updatedMessages;

    if (isAlreadyFavorite) {
      // Si ya es favorito, eliminarlo
      updatedMessages = messages.filter((msg) => msg.message !== envio.message);
      toast.success('Removed from favorites'); // Mostrar notificación de eliminado
    } else {
      // Si no es favorito, agregarlo
      updatedMessages = [...messages, envio];
      toast.success('Added to favorites'); // Mostrar notificación de agregado
    }

    // Actualizar el estado local y localStorage con los mensajes actualizados
    setMessages(updatedMessages);
    setIsFavorite(!isAlreadyFavorite);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  return (
    <div>
      {/* Enlace al pageLink del producto */}
      <a
        style={{ textDecoration: 'none', color: 'inherit' }}
        href={envio.pageLink}
      >
        <i className="bi bi-arrow-right-circle"></i>{' '}
      </a>
      {/* Botón para agregar o quitar de favoritos */}
      <button
        style={{ border: 'none', padding: 0, background: 'none' }}
        onClick={sendMessage}
      >
        {isFavorite ? (
          // Mostrar estrella llena si es favorito
          <i className="bi bi-star-fill"></i>
        ) : (
          // Mostrar estrella vacía si no es favorito
          <i className="bi bi-star"></i>
        )}
      </button>
    </div>
  );
};
export default function ProductNews() {
  const cardStyle = {
    color: 'inherit',
    textDecoration: 'none', // Quita el subrayado predeterminado del enlace
  };

  const cardContentStyle = {
    // Estilos para cuando el cursor está sobre el contenido de la tarjeta
    ':hover': {
      transform: 'scale(1.1)', // Agrandar la tarjeta al 110% cuando se pasa el cursor sobre ella
    },
  };

  const datosTarjetas = [
    {
      id: 1,
      titulo:
        'Mens Los Angeles Lakers LeBron James Fanatics Branded Gold 2021/22.',
      contenido:
        'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-swingman-jersey-gold-lebron-james-youth_ss5_p-201084152+pv-1+u-jnutuz4rmnvkna8w9jpj+v-jp7qq1cfecmw2etipifb.jpg?_hv=2&w=900',
      link: '/Angeles',
    },
    {
      id: 2,
      titulo:
        'Unisex New York Knicks Jalen Brunson Nike Blue Swingman Jersey - Icon Edition.',
      contenido:
        'https://fanatics.frgimages.com/new-york-knicks/unisex-nike-jalen-brunson-blue-new-york-knicks-swingman-jersey-icon-edition_ss5_p-5270594+pv-1+u-wjkmhasdp9s5wwzt2bmb+v-jfoqmsqjvxiyivrvdxog.jpg?_hv=2&w=900',
      link: '/Knicks',
    },
    {
      id: 3,
      titulo:
        'Unisex San Antonio Spurs Victor Wembanyama Nike Black 2023 NBA Draft First Round Pick Swingman Jersey - Ic',
      contenido:
        'https://fanatics.frgimages.com/san-antonio-spurs/unisex-nike-victor-wembanyama-black-san-antonio-spurs-2023-nba-draft-first-round-pick-swingman-jersey-icon-edition_ss5_p-200289618+pv-1+u-2wvotgouoboizir4gkly+v-nfutg3bxgxv5jhmrkjt6.jpg?_hv=2&w=900',
      link: '/Spurs',
    },
    {
      id: 4,
      titulo:
        'Unisex Boston Celtics Jayson Tatum Jordan Brand Black Swingman Jersey - Statement Edition',
      contenido:
        'https://fanatics.frgimages.com/boston-celtics/unisex-jordan-brand-jayson-tatum-black-boston-celtics-swingman-jersey-statement-edition_pi4759000_altimages_ff_4759148-9c174412578990acd403alt1_full.jpg?_hv=2&w=900',
      link: '/Celtics',
    },
    {
      id: 5,
      titulo:
        'Unisex Dallas Mavericks Luka Dončić Nike Blue Swingman Jersey - Icon Edition',
      contenido:
        'https://fanatics.frgimages.com/dallas-mavericks/unisex-nike-luka-don%C4%8Di%C4%87-blue-dallas-mavericks-swingman-jersey-icon-edition_pi4650000_altimages_ff_4650403-b04fbffcbdfdca3e55e6alt1_full.jpg?_hv=2&w=900',
      link: '/Dallas',
    },
    {
      id: 6,
      titulo:
        'Youth Golden State Warriors Stephen Curry Fanatics Branded Royal 2022/23 Fast Break Replica Player Jersey - Icon Edition',
      contenido:
        'https://fanatics.frgimages.com/golden-state-warriors/youth-fanatics-branded-stephen-curry-royal-golden-state-warriors-2022/23-fast-break-replica-player-jersey-icon-edition_pi5207000_altimages_ff_5207866-03e43c4a39accf9e8f03alt1_full.jpg?_hv=2&w=900',
      link: '/Golden',
    },
    {
      id: 7,
      titulo:
        'Unisex Denver Nuggets Nikola Jokic Nike Navy Swingman Jersey - Icon Edition',
      contenido:
        'https://fanatics.frgimages.com/denver-nuggets/unisex-nike-nikola-jokic-navy-denver-nuggets-swingman-jersey-icon-edition_ss5_p-4650405+pv-1+u-8tdkk3zua3ddan4ecrgv+v-nqfk542jtuvjak7ycxa6.jpg?_hv=2&w=900',
      link: '/Nuggets',
    },
    {
      id: 8,
      titulo:
        'Mens Boston Celtics Larry Bird Mitchell & Ness Kelly Green Hardwood Classics Swingman Jersey',
      contenido:
        'https://fanatics.frgimages.com/boston-celtics/mens-mitchell-and-ness-larry-bird-kelly-green-boston-celtics-hardwood-classics-swingman-jersey_pi2751000_altimages_ff_2751337alt1_full.jpg?_hv=2&w=900',
      link: '/Larry',
    },
    {
      id: 9,
      titulo:
        'Mens Los Angeles Lakers Kobe Bryant Mitchell & Ness Gold Hardwood Classics 2008-09 Authentic Jersey',
      contenido:
        'https://fanatics.frgimages.com/los-angeles-lakers/mens-mitchell-and-ness-kobe-bryant-gold-los-angeles-lakers-hardwood-classics-2008-09-authentic-jersey_pi3633000_altimages_ff_3633447-d48aea1b99fa151fc065alt1_full.jpg?_hv=2&w=900',
      link: '/Lakers',
    },
    // Resto de los datosTarjetas style={{ backgroundColor: '#B3E5F', position: 'relative' }}
  ];

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div style={{ backgroundColor: '#B3E5FC' }}>
            <Container>
              <Row className="align-items-center">
                <Col md={7}>
                  <Carousel.Caption
                    style={{
                      textAlign: 'left',
                      paddingTop: '30px',
                      position: 'relative',
                    }}
                  >
                    <p style={{ color: 'black' }}>new collection from adidas</p>
                    <h2 style={{ color: 'black' }}>
                      new skin of the <br /> world champion!
                    </h2>
                    <Link
                      to="/Argentina"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Button variant="dark" size="lg">
                        Shop Now
                      </Button>
                    </Link>
                  </Carousel.Caption>
                </Col>
                <Col md={5}>
                  <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/4x9wSn9r/julian.webp"
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            style={{
              background: 'linear-gradient(to right, #000000, #8b4513)',
            }}
          >
            <Container>
              <Row className="align-items-center">
                <Col md={7}>
                  <Carousel.Caption
                    style={{
                      textAlign: 'left',
                      paddingTop: '30px',
                      position: 'relative',
                    }}
                  >
                    <h2 style={{ color: 'White' }}>
                      The most popular of the nba
                    </h2>

                    <Button variant="light" size="lg" href="#Nba">
                      See More
                    </Button>
                  </Carousel.Caption>
                </Col>
                <Col md={5}>
                  <img
                    className="d-block w-100"
                    src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbac2bfe0-2638-4d21-a44f-d51d5acd580f_1980x1320.jpeg"
                    alt="Second slide"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            style={{ background: 'linear-gradient(to right, #000000,#D1AF15)' }}
          >
            <Container>
              <Row className="align-items-center">
                <Col md={7}>
                  <Carousel.Caption
                    style={{
                      textAlign: 'left',
                      paddingTop: '30px',
                      position: 'relative',
                    }}
                  >
                    <h2 style={{ color: 'White' }}>For another crown</h2>
                    <p style={{ color: 'White' }}>
                      Real Madrid and Their Second Kit for the Champions League
                      semi-finals
                    </p>
                    <Link
                      to="/Madrid"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Button variant="light" size="lg">
                        Shop Now
                      </Button>
                    </Link>
                  </Carousel.Caption>
                </Col>
                <Col md={5}>
                  <img
                    className="d-block w-100"
                    src="https://i0.wp.com/footballfashion.org/wordpress/wp-content/uploads/2023/08/real-madrid-2023-2024-adidas-third-kit-4.jpg?ssl=1"
                    alt="Third slide"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      {/*Seccion de NBA FAVORITES*/}

      <div
        style={{
          background: 'black',
          color: 'white',
          padding: '10px',
          width: '25%',
          fontSize: '25px',
        }}
        id="Nba"
      >
        <h2>
          NBA FAVORITES{' '}
          <Image
            style={{
              width: '22px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            src="https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png"
            rounded
          />
        </h2>
      </div>

      <div className="container" style={{ marginTop: '20px' }}>
        {' '}
        {/* Agrega espacio arriba */}
        <div className="container" style={{ marginTop: '20px' }}>
          <div className="row">
            {datosTarjetas.map((tarjeta) => (
              <div
                className="col-md-4"
                style={{ marginBottom: '20px' }}
                key={tarjeta.id}
              >
                <Card className="custom-card" style={cardStyle}>
                  <Card.Body style={cardContentStyle}>
                    <Card.Img
                      variant="top"
                      style={{ width: '200px' }}
                      src={tarjeta.contenido}
                    />
                    <div
                      style={{
                        borderBottom: '1px dashed black',
                        width: '100%',
                        margin: '20px 0',
                      }}
                    ></div>
                    <Card.Text>
                      <b>
                        {' '}
                        {tarjeta.titulo}
                        <br />
                        $99.99{/* Precio Fijo*/}
                      </b>
                    </Card.Text>
                    <h2>
                      <Enviar
                        envio={{
                          message: tarjeta.titulo,
                          imageLink: tarjeta.contenido,
                          pageLink: tarjeta.link,
                        }}
                      />
                      <ToastContainer />
                    </h2>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
