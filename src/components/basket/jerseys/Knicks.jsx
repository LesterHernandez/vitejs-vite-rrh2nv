import React, { useState, useContext } from 'react';
import { Container, Col, Row, Image, Button, Table } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext'; // Importa el contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Knicks() {
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito accediendo a la funcion 'addToCart' creada en el script "CartContext.jsx"

  //Estados Locales del Componente
  const [selectedSize, setSelectedSize] = useState(''); //La talla seleccionada por el usuario
  const [quantity, setQuantity] = useState(1); //La cantidad de productos seleccionados
  const [showDetails, setShowDetails] = useState(false); //Maneja el estado para mostrar los detalles del producto o no
  const [showRatings, setShowRatings] = useState(false); //Maneja el estado para mostrar el rating del producto o no

  //Definición del Producto: Es un objeto 'product' que representa el producto que se agregará al carrito.
  const product = {
    id: 38,
    name: 'Unisex New York Knicks Jalen Brunson Nike Blue Swingman Jersey - Icon Edition.',
    price: 99.99,
    size: selectedSize,
    quantity: quantity,
    image:
      'https://images.footballfanatics.com/new-york-knicks/new-york-knicks-nike-icon-edition-swingman-jersey-blue-jalen-brunson-unisex_ss4_p-13349423+u-fisvk6fuw7brxs5ufqb0+v-4cbb4051fe5f4d9a916af418228a55e7.jpg?_hv=2&w=900',
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
            src="https://images.footballfanatics.com/new-york-knicks/new-york-knicks-nike-icon-edition-swingman-jersey-blue-jalen-brunson-unisex_ss4_p-13349423+u-fisvk6fuw7brxs5ufqb0+v-4cbb4051fe5f4d9a916af418228a55e7.jpg?_hv=2&w=900"
            thumbnail
          />
          <Row>
            <Col xs={4}>
              <Image
                src="https://images.footballfanatics.com/new-york-knicks/new-york-knicks-nike-icon-edition-swingman-jersey-blue-jalen-brunson-unisex_ss4_p-13349423+u-fisvk6fuw7brxs5ufqb0+v-4cbb4051fe5f4d9a916af418228a55e7.jpg?_hv=2&w=900"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.footballfanatics.com/new-york-knicks/new-york-knicks-nike-icon-edition-swingman-jersey-blue-jalen-brunson-unisex_ss4_p-13349423+pv-1+u-fisvk6fuw7brxs5ufqb0+v-c54b60e8b07c4412842297e48d29771c.jpg?_hv=2&w=900"
                thumbnail
              />
            </Col>
            <Col xs={4}>
              <Image
                src="https://images.footballfanatics.com/new-york-knicks/new-york-knicks-nike-icon-edition-swingman-jersey-blue-jalen-brunson-unisex_ss4_p-13349423+pv-2+u-fisvk6fuw7brxs5ufqb0+v-d67a54d102c64d678ba2c0590b6a7316.jpg?_hv=2&w=900"
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
                      Go for a different but no less authentic look. This jersey
                      boasts exceptional design and build quality for the
                      ultimate in basketball clothing.
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
                    {[...Array(2)].map((star, index) => (
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
