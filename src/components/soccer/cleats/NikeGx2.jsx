import React, { useState, useContext } from 'react';
import { Container, Col, Row, Image, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext'; // Importa el contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function NikeGx2() {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito accediendo a la funcion 'addToCart' creada en el script "CartContext.jsx"

  //Estados Locales del Componente
  const [selectedSize, setSelectedSize] = useState(''); //La talla seleccionada por el usuario
  const [quantity, setQuantity] = useState(1); //La cantidad de productos seleccionados
  const [showDetails, setShowDetails] = useState(false); //Maneja el estado para mostrar los detalles del producto o no
  const [showRatings, setShowRatings] = useState(false); //Maneja el estado para mostrar el rating del producto o no

  //Definición del Producto: Es un objeto 'product' que representa el producto que se agregará al carrito.
  const product = {
    id: 107,
    name: "Nike Phantom GX II Elite FG",
    price: 77.97,
    size: selectedSize,
    quantity: quantity,
    image: "https://images.prodirectsport.com/ProductImages/Main/1012873_Main_1724986.jpg"
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
            src="https://images.prodirectsport.com/ProductImages/Main/1012873_Main_1724986.jpg"
            thumbnail
          />
          <Row>
            <Col xs={4}>
              <Image
                src="https://images.prodirectsport.com/ProductImages/Gallery_1/1012873_Gallery_1_1724989.jpg"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.prodirectsport.com/ProductImages/Gallery_4/1012873_Gallery_4_1724998.jpg"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.prodirectsport.com/ProductImages/Gallery_5/1012873_Gallery_5_1725000.jpg"
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
            {['7', '8', '8.5', '9', '10', '11'].map((size) => (
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
                    <p>Create brilliance wearing Nike Phantom GX II Elite FG football boots in White/Black/Mtlc Gold Coin.
                    Designed for game-defining, disruptive play, the Phantom GX II sees you become the perfect storm of agility and precision, leaving defenders trailing in your wake with devastating turns and lethal strikes.</p>
                    <p>The upper again features Nike’s sticky Gripknit yarns for improved close control, and it’s now enhanced with integrated Strike Zone texturing. Swirling out from the instep, the textured rings ensure a clean connection with the ball, unlocking laser-guided shots to go with those trademark pinged passes Phantom players love to make.</p>
                    <p>For traction, the second-gen GX benefits from the revolutionary Cyclone 360 soleplate. Thanks to the circular arrangement of the bladed forefoot studs, the plate allows you to brake, change direction, and power away in one fluid motion. Perfect for tricky No.10s and pure finishers alike, the design puts less stress on the body, so you can make match-winning moves with absolute confidence.</p>
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
            Add to cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}


