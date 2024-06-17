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

export default function Caps() {
  

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
      titulo: 'Jordan Club Cap ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5185-604_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/JordanCap',
    },
    {
      id: 2,
      titulo: 'Jordan Rise Unisex Cap ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5186-100-phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Risecap',
    },
    {
      id: 3,
      titulo: 'Jordan Club Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5185-349_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Clubcap',
    },
    {
      id: 4,
      titulo: 'Jordan Club Cap  ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5185-752_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/YellowCap',
    },
    {
      id: 5,
      titulo: 'Jordan Rise Unisex Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5186-436_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Riseblue',
    },
    {
      id: 6,
      titulo: 'Basketball Dont Flinch Unisex Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/0/2/023920_01.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/Flinch',
    },
    {
      id: 7,
      titulo: 'Jordan Fly Unisex Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/v/fv5297-010_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Fly',
    },
    {
      id: 8,
      titulo: 'Unisex Nba Curved Structured Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/n/b/nbasb521201-wht_frontf1-001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/Curved',
    },
    {
      id: 9,
      titulo: 'Lebron Heritage86 Unisex Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/m/dm3519-010-phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/TuneSquad',
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
        <h2>Caps</h2>
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
                        $27.99
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
