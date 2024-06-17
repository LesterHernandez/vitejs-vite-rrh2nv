import React, { useState } from 'react';
import { Col, Row, Form, Button, Alert } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Importa la configuración de Firebase
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ContactForm() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  // Estado para manejar los errores del formulario
  const [errors, setErrors] = useState({});

  // Estado para manejar la carga mientras se envían los datos
  const [loading, setLoading] = useState(false);

  // Estado para manejar la confirmación de envío
  const [submitted, setSubmitted] = useState(false);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para validar los datos del formulario
  const validateForm = () => {
    const { firstName, lastName, email, message } = formData;
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        // Agrega los datos del formulario a la colección 'contacts' en Firestore
        await addDoc(collection(db, 'contacts'), formData);
        setLoading(false);
        setSubmitted(true);
        // Reinicia el formulario
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
        // Oculta el mensaje de éxito después de 5 segundos
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        console.error('Error adding document: ', error);
        setLoading(false);
      }
    }
  };

  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Row>
        {/* Columna para el formulario */}
        <Col md={7}>
          <div style={{ marginLeft: '25px' }}>
            <h1 className="fw-bold">
              Contact Us{' '}
              <i className="bi bi-envelope" style={{ marginLeft: '5px' }}></i>
            </h1>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Label htmlFor="firstName" className="fw-bold">
                    First name
                  </Form.Label>
                  <Form.Control
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Example: Jose"
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Col>
                <Col>
                  <Form.Label htmlFor="lastName" className="fw-bold">
                    Last name
                  </Form.Label>
                  <Form.Control
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Example: España"
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email Address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Example: prueba123@gmail.com"
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label className="fw-bold">Your message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your question or message"
                  rows={3}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="dark" type="submit" size="md">
                  Submit
                </Button>
              </div>
              {/* Muestra un spinner mientras se envían los datos */}
              {loading && (
                <div
                  className="d-flex align-items-center"
                  style={{ marginTop: '20px' }}
                >
                  <strong>Loading...</strong>
                  <div
                    className="spinner-border ms-auto text-primary"
                    role="status"
                    aria-hidden="true"
                  ></div>
                </div>
              )}
              {/* Muestra un mensaje de éxito después de enviar el formulario */}
              {submitted && (
                <Alert variant="success" style={{ marginTop: '20px' }}>
                  <strong>Successfully submitted!</strong> Thank you for
                  contacting us. We will get back to you soon.
                </Alert>
              )}
            </Form>
          </div>
        </Col>
        {/* Columna para la imagen */}
        <Col md={5}>
          <img
            src="https://i.postimg.cc/yYSyWqkK/contacto.jpg"
            alt="Contacto"
            style={{ width: '100%', height: '100%' }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ContactForm;
