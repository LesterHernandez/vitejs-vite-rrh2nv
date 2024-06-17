import React, { useState, useContext } from 'react';
import { Container, Col, Row, Image, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext'; // Importa el contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Belgicashort() {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito accediendo a la funcion 'addToCart' creada en el script "CartContext.jsx"

  //Estados Locales del Componente
  const [selectedSize, setSelectedSize] = useState(''); //La talla seleccionada por el usuario
  const [quantity, setQuantity] = useState(1); //La cantidad de productos seleccionados
  const [showDetails, setShowDetails] = useState(false); //Maneja el estado para mostrar los detalles del producto o no
  const [showRatings, setShowRatings] = useState(false); //Maneja el estado para mostrar el rating del producto o no

  //Definición del Producto: Es un objeto 'product' que representa el producto que se agregará al carrito.
  const product = {
    id: 130,
    name: "Belgium FA adidas Away Shorts 2024",
    price: 29.99,
    size: selectedSize,
    quantity: quantity,
    image: "https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-away-shorts-2024_ss5_p-200793095+pv-1+u-bjtzux4cahbe9tpr3bi5+v-mrv5ssoxydez4ikwm7dy.jpg?_hv=2&w=900"
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
            src="https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-away-shorts-2024_ss5_p-200793095+pv-1+u-bjtzux4cahbe9tpr3bi5+v-mrv5ssoxydez4ikwm7dy.jpg?_hv=2&w=900"
            thumbnail
          />
          <Row>
            <Col xs={4}>
              <Image
                src="https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-away-shorts-2024_ss5_p-200793095+pv-2+u-bjtzux4cahbe9tpr3bi5+v-1rvquqvlpghbkhpfu5rv.jpg?_hv=2&w=120"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-away-shorts-2024_ss5_p-200793095+pv-3+u-bjtzux4cahbe9tpr3bi5+v-warn4ned15txa0jr73n2.jpg?_hv=2&w=120"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-away-shorts-2024_ss5_p-200793095+pv-4+u-bjtzux4cahbe9tpr3bi5+v-r7fibl2m02o1vd5xocwd.jpg?_hv=2&w=120"
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
                    <p>Gear up with the Belgium FA adidas Away Shorts 2024 and show your support for the Belgian national team in style. These shorts are crafted with young fans in mind, featuring the distinguished Belgian Football Association (FA) crest proudly displayed. Made from lightweight, breathable fabric, they ensure optimal comfort and freedom of movement on and off the pitch. Moisture-wicking technology keeps young players cool and dry during intense training sessions or spirited matches. The elastic waistband provides a secure fit, while adidas branding adds a sporty touch. Whether training like the pros or cheering from the stands, these shorts embody the spirit and pride of Belgian football.</p>
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
                    {[...Array(3)].map((star, index) => (
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
