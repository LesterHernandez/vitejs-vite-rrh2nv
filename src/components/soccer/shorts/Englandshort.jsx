import React, { useState, useContext } from 'react';
import { Container, Col, Row, Image, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext'; // Importa el contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Englandshort() {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito accediendo a la funcion 'addToCart' creada en el script "CartContext.jsx"

  //Estados Locales del Componente
  const [selectedSize, setSelectedSize] = useState(''); //La talla seleccionada por el usuario
  const [quantity, setQuantity] = useState(1); //La cantidad de productos seleccionados
  const [showDetails, setShowDetails] = useState(false); //Maneja el estado para mostrar los detalles del producto o no
  const [showRatings, setShowRatings] = useState(false); //Maneja el estado para mostrar el rating del producto o no

  //Definición del Producto: Es un objeto 'product' que representa el producto que se agregará al carrito.
  const product = {
    id: 132,
    name: "England Essentials Crest Sweat Short - Navy - Mens",
    price: 29.99,
    size: selectedSize,
    quantity: quantity,
    image: "https://images.footballfanatics.com/england-national-team/england-essentials-crest-sweat-short-navy-mens_ss5_p-200498242+pv-1+u-v1mztsxjmwg0uj5p99uc+v-1jl2pjpjygutp2b7e7tg.jpg?_hv=2&w=900"
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
            src="https://images.footballfanatics.com/england-national-team/england-essentials-crest-sweat-short-navy-mens_ss5_p-200498242+pv-1+u-v1mztsxjmwg0uj5p99uc+v-1jl2pjpjygutp2b7e7tg.jpg?_hv=2&w=900"
            thumbnail
          />
          <Row>
            <Col xs={4}>
              <Image
                src="https://images.footballfanatics.com/england-national-team/england-essentials-sweat-short-navy-mens_ss4_p-13301161+pv-1+u-18y04nd9vw2x8f1zpv4n+v-7cd97d05efec4213900a5a7ca2b19ef2.jpg?_hv=2&w=120"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.footballfanatics.com/england-national-team/england-essentials-sweat-short-navy-mens_ss4_p-13301161+pv-2+u-18y04nd9vw2x8f1zpv4n+v-a01abd0fe0b84697968ac4cd09dfa128.jpg?_hv=2&w=120"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.footballfanatics.com/england-national-team/england-essentials-sweat-short-navy-mens_ss4_p-13301161+u-18y04nd9vw2x8f1zpv4n+v-227a4eaa44aa46c686cf2dfef2ecf107.jpg?_hv=2&w=120"
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
                    <p>Embrace comfort and style with the England Essentials Crest Sweat Short in navy blue, designed for men who proudly support the English national team. Featuring the iconic England crest prominently displayed, these shorts represent your passion for football and national pride. Crafted from soft and cozy sweatshirt fabric, they provide superior comfort whether you're lounging at home or cheering from the stands. The elastic waistband with drawcord ensures a personalized fit, while the side pockets offer convenient storage for essentials. Perfect for casual wear or showing your support during match days, these shorts combine functionality with a touch of team spirit.</p>
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
