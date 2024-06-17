import React, { useState, useContext } from 'react';
import { Container, Col, Row, Image, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext'; // Importa el contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function JA1() {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito accediendo a la funcion 'addToCart' creada en el script "CartContext.jsx"

  //Estados Locales del Componente
  const [selectedSize, setSelectedSize] = useState(''); //La talla seleccionada por el usuario
  const [quantity, setQuantity] = useState(1); //La cantidad de productos seleccionados
  const [showDetails, setShowDetails] = useState(false); //Maneja el estado para mostrar los detalles del producto o no
  const [showRatings, setShowRatings] = useState(false); //Maneja el estado para mostrar el rating del producto o no

  //Definición del Producto: Es un objeto 'product' que representa el producto que se agregará al carrito.
  const product = {
    id: 30,
    name: 'Ja 1',
    price: 77.97,
    size: selectedSize,
    quantity: quantity,
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b19d8627-a8a6-4db6-b5df-5a849dd2f768/tenis-de-b%C3%A1squetbol-ja-1-bCx2W3.png',
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
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b19d8627-a8a6-4db6-b5df-5a849dd2f768/tenis-de-b%C3%A1squetbol-ja-1-bCx2W3.png"
            thumbnail
          />
          <Row>
            <Col xs={4}>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43e84a67-d53f-4e11-9bac-44ff903a22fb/tenis-de-b%C3%A1squetbol-ja-1-bCx2W3.png"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d0fbf53-5a19-4926-9946-4a5cc0e18848/tenis-de-b%C3%A1squetbol-ja-1-bCx2W3.png"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e684869b-ce3a-4038-8eaf-137a6498f137/tenis-de-b%C3%A1squetbol-ja-1-bCx2W3.png"
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
                    Ja Morant became the superstar he is today by sinking shots into crooked rims, jumping over tractor tires, and dribbling around sun-faded traffic cones in hot South Carolina summers. The Ja 1s are proof of their progress. The Air Zoom unit provides support for jumping and running at speed without compromising comfort, so you can control your own destiny on the court, Ja style.
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
