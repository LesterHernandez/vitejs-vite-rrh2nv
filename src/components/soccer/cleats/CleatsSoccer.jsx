import React, { useState } from 'react';
import {  Card } from 'react-bootstrap'; // Importar Card desde react-bootstrap 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Componente Enviar recibe un prop "envio"
const Enviar = ({ envio }) => {
  // Obtener mensajes guardados en localStorage o inicializar con un array vacío
  const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];

  // Estado local para mensajes y si el producto es favorito
  const [messages, setMessages] = useState(savedMessages);
  const [isFavorite, setIsFavorite] = useState(
    savedMessages.some((msg) => msg.message === envio.message)
  );

  // Función para manejar el envío del mensaje (agregar o quitar de favoritos)
  const sendMessage = () => {
    // Verificar si el mensaje ya está en favoritos
    const isAlreadyFavorite = messages.some(
      (msg) => msg.message === envio.message
    );
    let updatedMessages;

    if (isAlreadyFavorite) {
      // Si ya es favorito, eliminarlo
      updatedMessages = messages.filter((msg) => msg.message !== envio.message);
      toast.success('Removed from favorites'); // Mostrar notificación de eliminado
    } else {
      // Si no es favorito, agregarlo
      updatedMessages = [...messages, envio];
      toast.success('Added to favorites'); // Mostrar notificación de agregado
    }

    // Actualizar el estado local y localStorage con los mensajes actualizados
    setMessages(updatedMessages);
    setIsFavorite(!isAlreadyFavorite);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  return (
    <div>
      {/* Enlace al pageLink del producto */}
      <a
        style={{ textDecoration: 'none', color: 'inherit' }}
        href={envio.pageLink}
      >
        <i className="bi bi-arrow-right-circle"></i>{' '}
      </a>
      {/* Botón para agregar o quitar de favoritos */}
      <button
        style={{ border: 'none', padding: 0, background: 'none' }}
        onClick={sendMessage}
      >
        {isFavorite ? (
          // Mostrar estrella llena si es favorito
          <i className="bi bi-star-fill"></i>
        ) : (
          // Mostrar estrella vacía si no es favorito
          <i className="bi bi-star"></i>
        )}
      </button>
    </div>
  );
};
export default function CleatsSoccer() {
   

  const cardStyle = {
    color: 'inherit',
    textDecoration: 'none', // Quita el subrayado predeterminado del enlace
  };

  const cardContentStyle = {
    // Estilos para cuando el cursor está sobre el contenido de la tarjeta
    ':hover': {
      transform: 'scale(1.1)', // Agrandar la tarjeta al 110% cuando se pasa el cursor sobre ella
    },
  };

  const datosTarjetas = [
    {
      id: 1,
      titulo: 'Zoom Superfly 9 Academy Xxv Tf Mens Cleats',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/b/fb8398-060_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Cleatstf',
    },
    {
      id: 2,
      titulo: ' Nike Phantom Gx Club Fg/Mg ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/d/dd9564-705-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/NikeGx',
    },
    {
      id: 3,
      titulo: 'Nike Air Zoom Mercurial Vapor XV Pro FG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1012861_Main_1753314.jpg',
      link: '/Nikexv',
    },
    {
      id: 4,
      titulo: 'Adidas F50 League Laceless FG/MG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1018640_Main_1818138.jpg',
      link: '/AdidasF50',
    },
    {
      id: 5,
      titulo: 'Nike Tiempo Legend X Elite FG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1001601_Main_Thumb_1427867.jpg',
      link: '/NikeLegend',
    },
    {
      id: 6,
      titulo: 'Nike Tiempo Legend X Elite AG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1016243_Main_1809209.jpg',
      link: '/NikeAG',
    },
    {
      id: 7,
      titulo: 'Nike Phantom GX II Elite FG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1012873_Main_1724986.jpg',
      link: '/NikeGx2',
    },
    {
      id: 8,
      titulo: 'Adidas Copa Pure 2 Club FG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1018676_Main_1815493.jpg',
      link: '/AdidasPure',
    },
    {
      id: 9,
      titulo: 'Adidas Predator League IN',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1018614_Main_1815654.jpg',
      link: '/AdidasIn',
    }, 
  ];

  return (
    <>
      {/*Seccion de Productos*/}

      <div
        style={{
          background: 'black',
          color: 'white',
          padding: '10px',
          width: '25%',
          fontSize: '25px',
        }}
      >
        <h2>Cleats</h2>
      </div>

      <div className="container" style={{ marginTop: '20px' }}>
        {' '}
        {/* Agrega espacio arriba */}
        <div className="container" style={{ marginTop: '20px' }}>
          <div className="row">
            {datosTarjetas.map((tarjeta) => (
              <div
                className="col-md-4"
                style={{ marginBottom: '20px' }}
                key={tarjeta.id}
              >
                <Card className="custom-card" style={cardStyle}>
                  <Card.Body style={cardContentStyle}>
                    <Card.Img
                      variant="top"
                      style={{ width: '200px' }}
                      src={tarjeta.contenido}
                    />
                    <div
                      style={{
                        borderBottom: '1px dashed black',
                        width: '100%',
                        margin: '20px 0',
                      }}
                    ></div>
                    <Card.Text>
                      <b>
                        {' '}
                        {tarjeta.titulo}
                        <br />
                        $77.97
                      </b>
                    </Card.Text>
                    <h2>
                      <Enviar
                        envio={{
                          message: tarjeta.titulo,
                          imageLink: tarjeta.contenido,
                          pageLink: tarjeta.link,
                        }}
                      />
                      <ToastContainer /> 
                    </h2>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </>
  );
}
