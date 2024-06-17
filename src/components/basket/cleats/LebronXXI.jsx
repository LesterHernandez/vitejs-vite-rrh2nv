import React, { useState, useContext } from 'react';
import { Container, Col, Row, Image, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext'; // Importa el contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function LebronXXI() {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito accediendo a la funcion 'addToCart' creada en el script "CartContext.jsx"

  //Estados Locales del Componente
  const [selectedSize, setSelectedSize] = useState(''); //La talla seleccionada por el usuario
  const [quantity, setQuantity] = useState(1); //La cantidad de productos seleccionados
  const [showDetails, setShowDetails] = useState(false); //Maneja el estado para mostrar los detalles del producto o no
  const [showRatings, setShowRatings] = useState(false); //Maneja el estado para mostrar el rating del producto o no

  //Definición del Producto: Es un objeto 'product' que representa el producto que se agregará al carrito.
  const product = {
    id: 41,
    name: 'Lebron XXI',
    price: 77.97,
    size: selectedSize,
    quantity: quantity,
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a682211-19ba-4263-8a4b-8a7c1994e668/lebron-xxi-basketball-shoes-kGj4j4.png',
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
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a682211-19ba-4263-8a4b-8a7c1994e668/lebron-xxi-basketball-shoes-kGj4j4.png"
            thumbnail
          />
          <Row>
            <Col xs={4}>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e46155b8-32dc-4c1e-983a-110ebb55e825/tenis-de-b%C3%A1squetbol-lebron-21-DjB9tK.png"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d91f993-a3d6-462b-9588-00acb1bc5c82/tenis-de-b%C3%A1squetbol-lebron-21-DjB9tK.png"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ba1eea2b-44cb-44a0-8765-2788addc17f5/tenis-de-b%C3%A1squetbol-lebron-21-DjB9tK.png"
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
            {[
              'M 9.5/ W 11',
              'M 10.5/ W 12',
              'M 11.5/ W 13',
              'M 12.5/ W 14',
              'M 13.5/ W 15',
            ].map((size) => (
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
                  <span>DESCRIPTION</span>
                  <Button
                    variant="light"
                    size="sm"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    <i
                      className={`bi ${showDetails ? 'bi-dash' : 'bi-plus'}`}
                    ></i>
                  </Button>
                </td>
              </tr>
              {showDetails && (
                <tr>
                  <td colSpan="2">
                    <p>
                      Last time, LeBron changed the narrative of his tennis
                      style like only the king can. This version is even better.
                      The LeBron XXI has a cable system that works with Air Zoom
                      cushioning and a lightweight, low-to-the-ground design,
                      giving you agile fluidity and explosiveness without excess
                      weight. Created for your advancement and the next
                      generation of basketball players, it's ideal for Bron-type
                      open-court attacks, as well as rising to the basket when
                      the pace of the game increases.
                    </p>
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
                  <Button
                    variant="light"
                    size="sm"
                    onClick={() => setShowRatings(!showRatings)}
                  >
                    <i
                      className={`bi ${showRatings ? 'bi-dash' : 'bi-plus'}`}
                    ></i>
                  </Button>
                </td>
              </tr>
              {showRatings && (
                <tr>
                  <td colSpan="2">
                    {[...Array(4)].map((star, index) => (
                      <i
                        key={index}
                        className="bi bi-star-fill"
                        style={{ color: '#FFD700' }}
                      ></i>
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
