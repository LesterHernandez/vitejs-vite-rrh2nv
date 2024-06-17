import React, { useState } from 'react';
import { Card } from 'react-bootstrap'; // Importar Card desde react-bootstrap
import Image from 'react-bootstrap/Image';
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
export default function Puma() {
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
      titulo: 'Puma Ultra Play Rc Unisex Gloves.',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/0/4/041862-10_global.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/GlovesUltra',
      precio: '31.90',
    },
    {
      id: 2,
      titulo: 'Puma Ultra Grip 3 Rc Unisex Goalkeeper Gloves',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/0/4/041816_05.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/PumaGloves',
      precio: '31.90',
    },
    {
      id: 3,
      titulo: 'Puma Ultra Play Rc Unisex Gloves',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/0/4/041862-08_global.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/RcGloves',
      precio: '31.90',
    },
    {
      id: 4,
      titulo: 'Attacanto Sleeve Unisex Shin Guards',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/0/3/030887-02_global.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/AttacantoShin',
      precio: '31.90',
    },
    {
      id: 5,
      titulo: 'King Strap Unisex Shin Guards',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/0/3/030849_02.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/KingShin',
      precio: '31.90',
    },
    {
      id: 6,
      titulo: 'Manchester City Home Jersey 2024/25',
      contenido:
        'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw77730b38/images/large/701230879001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
      link: '/City',
      precio: '51.15',
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
        <h2>
          Puma{' '}
          <Image
            style={{
              width: '50px',
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxP-0dt8W2kfvb6zeUIgGQrQNs0yF7Tj78A&s"
            rounded
          />
        </h2>
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
                        <br />${tarjeta.precio}
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
