import React, { useState, useContext } from 'react';
import { Container, Col, Row, Image, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext'; // Importa el contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Germany() {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito accediendo a la funcion 'addToCart' creada en el script "CartContext.jsx"

  //Estados Locales del Componente
  const [selectedSize, setSelectedSize] = useState(''); //La talla seleccionada por el usuario
  const [quantity, setQuantity] = useState(1); //La cantidad de productos seleccionados
  const [showDetails, setShowDetails] = useState(false); //Maneja el estado para mostrar los detalles del producto o no
  const [showRatings, setShowRatings] = useState(false); //Maneja el estado para mostrar el rating del producto o no

  //Definición del Producto: Es un objeto 'product' que representa el producto que se agregará al carrito.
  const product = {
    id: 115,
    name: "GERMANY 24 HOME JERSEY",
    price: 51.15,
    size: selectedSize,
    quantity: quantity,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/17ed1fd94a6b4b1d967ec2fbfe1c21ab_9366/Germany_24_Home_Jersey_Kids_White_IP6130_01_laydown.jpg"
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
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/17ed1fd94a6b4b1d967ec2fbfe1c21ab_9366/Germany_24_Home_Jersey_Kids_White_IP6130_01_laydown.jpg"
            thumbnail
          />
          <Row>
            <Col xs={4}>
              <Image
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08a3d03008934eba9f4377c2e7a009df_9366/Germany_24_Home_Jersey_White_IP8139_21_model.jpg"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3f8dde1042a4cddbff7cd1ee7901ba7_9366/Germany_24_Home_Jersey_White_IP8139_23_hover_model.jpg"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://www.sportline.com.gt/media/catalog/product/i/p/ip8139_apparel-detail-view-2.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg"
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
                    <p>Embodying the spirit of German football. This adidas Germany home shirt combines all the symbols of the four-time FIFA World Cup™ winners. An eagle feather-inspired design decorates the shoulders, and embossed details taken from the German Football Association logo repeat across the front. Made for comfortable support, this shirt features moisture-managing AEROREADY and a woven crest.</p>
                    <p>This product is made with 100% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make.</p>
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
                    {[...Array(4)].map((star, index) => (
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
