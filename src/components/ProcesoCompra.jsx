import React, { useState, useEffect, useContext } from 'react';
import {
  Col,
  Row,
  Form,
  Button,
  Container,
  Collapse,
  Card,
  Alert,
} from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ProcesoCompra() {
  // Obtener la función clearCart del contexto del carrito
  const { clearCart } = useContext(CartContext);

  // El estado de los datos del formulario se inicializa con valores vacios
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    pais: '',
    tarjeta: '',
    expiracion: '',
    cvv: '',
  });

  // Inicia en falso el estado que se utilizará para ir validando cada sección que se va completando del formulario
  const [validated, setValidated] = useState({
    personal: false,
    envio: false,
    pago: false,
  });

  // Inicializa el estado para la seccion activa del formulario (En este caso se encontrara solo activa la seccion de info personal, ya que es la primera)
  const [activeSection, setActiveSection] = useState('personal');
  // Inicializa el estado para almacenar los respectivos mensajes de error que el usuario puede encontrar
  const [error, setError] = useState('');
  // Inicializa el estado para mostrar el mensaje de éxito de la compra
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // funcion para actualizar el estado del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData, //Copiar todas las propiedades existentes del formulario para que no se pierdan cuando actualizamos una propiedad especifica (campo)
      [e.target.name]: e.target.value, //Obtenemos los valores de cada campo del formulairo
    });
  };

  // valida cada seccion del formulario antes de permitir avanzar a la siguiente
  const validateSection = (section) => {
    let isValid = false;
    // Se valida la seccion de infromacion personal
    if (section === 'personal') {
      isValid =
        formData.nombre.trim() !== '' &&
        /\S+@\S+\.\S+/.test(formData.email) &&
        /^[0-9]{8,}$/.test(formData.telefono);
      if (isValid) {
        setValidated({ ...validated, personal: isValid });
        setActiveSection('envio');
        setError('');
      } else {
        setError(
          'Por favor complete todos los campos de Información Personal con datos válidos.'
        );
      }
      // Se valida la seccion de informacion de envío
    } else if (section === 'envio') {
      isValid =
        formData.direccion.trim() !== '' &&
        formData.ciudad.trim() !== '' &&
        formData.pais.trim() !== '';
      if (isValid) {
        setValidated({ ...validated, envio: isValid });
        setActiveSection('pago');
        setError('');
      } else {
        setError(
          'Por favor complete todos los campos de Información de Envío.'
        );
      }
      // Se valida la seccion de informacion de pago
    } else if (section === 'pago') {
      isValid =
        /^[0-9]{16}$/.test(formData.tarjeta) &&
        /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expiracion) &&
        /^[0-9]{3,4}$/.test(formData.cvv);
      if (isValid) {
        setValidated({ ...validated, pago: isValid });
        setError('');
        setActiveSection('finalizar');
      } else {
        setError(
          'Por favor complete todos los campos de Detalles de Pago con datos válidos.'
        );
      }
    }
  };

  // Maneja el evento al finalizar una compra para mostrar el mensaje de exito y vaciar el carrito
  const handleFinalizarCompra = () => {
    setShowSuccessMessage(true);
    clearCart(); // Vaciar el carrito al finalizar la compra
  };

  // funcion de efecto que oculta el mensaje de éxito después de 5 segs.
  useEffect(() => {
    let timer;
    if (showSuccessMessage) {
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showSuccessMessage]);

  return (
    <Container>
      <h2>Buying Process</h2>
      <Form>
        {/* Si existe un error, se muestra una alerta de Bootstrap con el mensaje de error */}
        {error && <Alert variant="danger">{error}</Alert>}

        {/*Tarjeta de Información Personal*/}
        <Card>
          <Card.Header
            onClick={() => setActiveSection('personal')} //Cambia la seccion activa a 'personal' al hacer click en el encabezado
            style={{
              backgroundColor: 'black',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Personal Information
          </Card.Header>

          {/* Contenido de la tarjeta de Información Personal */}
          <Collapse in={activeSection === 'personal'}>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formNombre">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Example: Juan Perez"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Example: usuario@gmail.com"
                      pattern="\S+@\S+\.\S+"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formTelefono">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      placeholder="Example: 54945120"
                      pattern="[0-9]{8,}"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                variant="primary"
                onClick={() => validateSection('personal')}
              >
                Next Section
              </Button>
            </Card.Body>
          </Collapse>
        </Card>

        {/*Tarjeta de Información de Envio*/}
        <Card>
          <Card.Header
            onClick={() =>
              // Verifica si la sección activa es 'personal' y si la sección 'personal' está validada
              activeSection === 'personal' &&
              validated.personal &&
              // Si ambas condiciones son verdaderas, establece la sección activa a 'envio'
              setActiveSection('envio')
            }
            style={{
              backgroundColor: validated.personal ? 'black' : 'gray',
              color: 'white',
              cursor: validated.personal ? 'pointer' : 'default',
            }}
          >
            Shipping Information
          </Card.Header>

          {/* Contenido de la tarjeta de Información de Envio */}
          <Collapse in={activeSection === 'envio'}>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formDireccion">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      required
                      placeholder="Example: Calle 123, Colonia"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formCiudad">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      required
                      placeholder="Example: Guatemala City"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPais">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="pais"
                      value={formData.pais}
                      onChange={handleChange}
                      required
                      placeholder="Example: Guatemala"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                variant="primary"
                onClick={() => validateSection('envio')}
              >
                Next Section
              </Button>
            </Card.Body>
          </Collapse>
        </Card>

        {/*Tarjeta de Información de Pago*/}
        <Card>
          <Card.Header
            onClick={() =>
              activeSection === 'envio' &&
              validated.envio &&
              setActiveSection('pago')
            }
            style={{
              backgroundColor: validated.envio ? 'black' : 'gray',
              color: 'white',
              cursor: validated.envio ? 'pointer' : 'default',
            }}
          >
            Payment Details
          </Card.Header>

          {/* Contenido de la tarjeta de Información de Pago */}
          <Collapse in={activeSection === 'pago'}>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formTarjeta">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="tarjeta"
                      value={formData.tarjeta}
                      onChange={handleChange}
                      required
                      placeholder="Example: 1234567812345678"
                      pattern="[0-9]{16}"
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="formExpiracion">
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="expiracion"
                      value={formData.expiracion}
                      onChange={handleChange}
                      required
                      placeholder="MM/YY"
                      pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="formCVV">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      placeholder="123"
                      pattern="[0-9]{3,4}"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" onClick={() => validateSection('pago')}>
                Next Section
              </Button>
            </Card.Body>
          </Collapse>
        </Card>

        {/*Mensaje de Éxito de la Compra*/}
        {showSuccessMessage && (
          <Alert
            variant="success"
            style={{ fontSize: '24px', textAlign: 'center' }}
          >
            ¡Compra realizada con éxito!
          </Alert>
        )}

        {/*Botón para Finalizar la Compra*/}
        {activeSection === 'finalizar' && (
          <Button variant="success" onClick={handleFinalizarCompra}>
            Complete Purchase
          </Button>
        )}
      </Form>
      <br></br>
    </Container>
  );
}

export default ProcesoCompra;
