import React, { useState, useContext } from 'react';
import { Container, Col, Row, Image, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext'; // Importa el contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Hoops5() {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito accediendo a la funcion 'addToCart' creada en el script "CartContext.jsx"

  //Estados Locales del Componente
  const [selectedSize, setSelectedSize] = useState(''); //La talla seleccionada por el usuario
  const [quantity, setQuantity] = useState(1); //La cantidad de productos seleccionados
  const [showDetails, setShowDetails] = useState(false); //Maneja el estado para mostrar los detalles del producto o no
  const [showRatings, setShowRatings] = useState(false); //Maneja el estado para mostrar el rating del producto o no

  //Definición del Producto: Es un objeto 'product' que representa el producto que se agregará al carrito.
  const product = {
    id: 28,
    name: "Nike Hoops Elite",
    price: 41.15,
    size: selectedSize,
    quantity: quantity,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c888421d-c9d0-4058-91cd-fd95f774bd49/mochila-hoops-elite-32l-l0zSj5.png',
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
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c888421d-c9d0-4058-91cd-fd95f774bd49/mochila-hoops-elite-32l-l0zSj5.png"
            thumbnail
          />
          <Row>
            <Col xs={4}>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f59c98e-9b0c-45d0-a0e4-9aeaa67dc324/mochila-hoops-elite-32l-l0zSj5.png"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f21ca21-a975-4051-9314-380db09a4cbd/mochila-hoops-elite-32l-l0zSj5.png"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e1c8176-8310-43aa-a1a6-be2b9ec414cf/mochila-hoops-elite-32l-l0zSj5.png"
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
            {['32L'].map((size) => (
              <Col xs={2} key={size}>
                <Button
                  variant={selectedSize === size ? 'primary' : 'secondary'}
                  size="lg"
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
                    <p>Take your basketball game to the next level. Ample storage keeps your gear organized, from the spacious main compartment to zipper pockets for storing small essentials. What makes it a success? The chest strap in conjunction with the Air units that offer greater comfort and provide cushioning in the shoulder straps. He's here to perform all day.</p>
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
                    {[...Array(5)].map((star, index) => (
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
