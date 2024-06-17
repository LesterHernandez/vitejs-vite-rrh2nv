import React, { useState, useContext } from 'react';
import { Container, Col, Row, Image, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext'; // Importa el contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MadridHome() {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito accediendo a la funcion 'addToCart' creada en el script "CartContext.jsx"

  //Estados Locales del Componente
  const [selectedSize, setSelectedSize] = useState(''); //La talla seleccionada por el usuario
  const [quantity, setQuantity] = useState(1); //La cantidad de productos seleccionados
  const [showDetails, setShowDetails] = useState(false); //Maneja el estado para mostrar los detalles del producto o no
  const [showRatings, setShowRatings] = useState(false); //Maneja el estado para mostrar el rating del producto o no

  //Definición del Producto: Es un objeto 'product' que representa el producto que se agregará al carrito.
  const product = {
    id: 114,
    name: "Real Madrid home kit season 2023/24",
    price: 51.15,
    size: selectedSize,
    quantity: quantity,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUZR2Q4mVyeCn56P7IpgQjMTR7-T82sqmP8Xl7cWIhiIvwJyXw85EIdvEL4XGo7begmZMtDWO_7dX3HovqqQ7GZjptkzBruHlj4mJpr3-zFYUl1F914C9kuG8mkUfwJJvtl4Jcj7kYn926O9tlednxA5qA0rjZA-EqZiYs0GOSFF8-2_vxjGW1C0Tn/s1600/real-madrid-23-24-home-kit-17.jpg"
  };

  //Funcion que verifica si se ha seleccionado una talla
  const handleAddToCart = () => {
    if (selectedSize === '') {
      alert('Please select a size.');
      return;
    }
    addToCart(product);
    alert('Product added to cart.');
  };

  return (
    <Container>
      <Row>
        {/* Columna izquierda para las imágenes */}
        <Col xs={6}>
          <Image
            src="https://images.prodirectsport.com/ProductImages/Main/1018369_Main_1812305.jpg"
            thumbnail
          />
          <Row>
            <Col xs={4}>
              <Image
                src="https://images.prodirectsport.com/ProductImages/Gallery_1/1018369_Gallery_1_1812308.jpg"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.prodirectsport.com/ProductImages/Gallery_2/1018369_Gallery_2_1812309.jpg"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.prodirectsport.com/ProductImages/Gallery_3/1018369_Gallery_3_1812312.jpg"
                thumbnail
              />
            </Col>
          </Row>
        </Col>
        {/* Columna derecha para detalles y tabla */}
        <Col xs={6}>
          <p
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '2px',
            }}
          >
            {product.name}
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#58D68D',
              fontWeight: 'bold',
              marginBottom: '2px',
            }}
          >
            Regular Price: ${product.price}
          </p>
          <p
            style={{
              fontSize: '16px',
              color: '#F05B40',
              fontWeight: 'bold',
              marginBottom: '2px',
            }}
          >
            SIZE:
          </p>
          {/*Colocamos la lista de tallas*/}
          <Row
            style={{
              backgroundColor: '#f2f2f2',
              padding: '5px',
              margin: '10px 0',
              justifyContent: 'space-between',
              border: '1px solid black',
              borderRadius: '5px',
            }}
          >
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <Col xs={2} key={size}>
                <Button
                  variant={selectedSize === size ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedSize(size)} 
                >
                  {size}
                </Button>
              </Col>
            ))}
          </Row>
          {/* Tabla de opciones */}
          <Table bordered style={{ marginTop: '20px' }}>
            <tbody>
              <tr>
                <td
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>QUANTITY</span>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{
                      width: '60px',
                      backgroundColor: '#D7DBDD',
                      border: 'none',
                      borderRadius: '5px',
                      textAlign: 'center',
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>DETAILS</span>
                  <Button variant="light" size="sm" onClick={() => setShowDetails(!showDetails)}>
                    <i className={`bi ${showDetails ? 'bi-dash' : 'bi-plus'}`}></i>
                  </Button>
                </td>
              </tr>
              {showDetails && (
                <tr>
                  <td colSpan="2">
                    <p>Showcase your passion for Los Merengues as they look to add another La Liga and Champions League trophy to their collection with the adidas Real Madrid 24/25 Home Shirt in White, a high-performance home jersey that keeps you comfortable on and off the pitch.</p>
                    <p>Based on the kits worn by Jude Bellingham, Kylian Mbappe, Eder Militao, David Alaba and the rest of the first-team squad at the pinnacle of the club game, the 2024/25 home shirt shows your undying support for Real Madrid as they compete for La Liga and Champions League glory. Inspired by Madrid’s legendary Fiesta de San Isidro, the classic white home colours are enhanced with a subtle tonal houndstooth-style design to evoke the famed chulapo outfits worn by Madrilenos in the annual festivities. A club crest emblazoned over your heart displays your pride for the world to see, and the adidas Three-Stripes complete the look with a sporty flourish. Updated with additional mesh ventilation panels in high-heat areas, the 2024/25 jersey offers superb breathability to keep you cool no matter how hard you push on the pitch, and stretchy, lightweight fabric provides full freedom of movement so you can sprint, slide and jump without restriction. Moisture-absorbing AEROREADY technology wicks sweat away from your skin to ensure that you stay dry and comfortable throughout the 90 minutes, whether you’re fighting for the win on-pitch or sweating it out watching Los Blancos in action from the stands.</p>
                  </td>
                </tr>
              )}
              <tr>
                <td
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>PRODUCT RATINGS</span>
                  <Button variant="light" size="sm" onClick={() => setShowRatings(!showRatings)}>
                    <i className={`bi ${showRatings ? 'bi-dash' : 'bi-plus'}`}></i>
                  </Button>
                </td>
              </tr>
              {showRatings && (
                <tr>
                  <td colSpan="2">
                    {[...Array(5)].map((star, index) => (
                      <i key={index} className="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                    ))}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <Button
            onClick={handleAddToCart}
            style={{
              backgroundColor: 'black',
              color: 'white',
              marginTop: '10px',
              width: '100%',
            }}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
