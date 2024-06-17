import React, { useState } from 'react';
import { Card } from 'react-bootstrap'; // Importar Card desde react-bootstrap 
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
export default function ShortsBasket() {
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
      titulo: 'KD',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7df83ddf-9eb3-4511-849c-5a9b99726c73/kd-mens-dri-fit-standard-issue-reversible-basketball-shorts-kWqrCX.png',
      link: '/KD',
    },
    {
      id: 2,
      titulo: 'Nike DNA ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/567504a3-0b9f-482d-b101-d8090f52eb38/dna-mens-dri-fit-6-basketball-shorts-8C4sx3.png',
      link: '/NikeDNA',
    },
    {
      id: 3,
      titulo: 'Jordan Sport',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c0dd74b6-10cb-402a-9d7c-757a1da18fd8/jordan-sport-mens-dri-fit-diamond-shorts-T4vhp8.png',
      link: '/ShortJordan',
    },
    {
      id: 4,
      titulo: 'Sabrina',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/85082426-a1f3-4930-8182-e87c5532644f/sabrina-dri-fit-basketball-shorts-ntz23m.png',
      link: '/Sabrina',
    },
    {
      id: 5,
      titulo: 'Nike Icon',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9937644d-a6c5-48c6-9e03-2fefdf04148f/icon-mens-dri-fit-11-basketball-shorts-sD1bqF.png',
      link: '/NikeIcon',
    },
    {
      id: 6,
      titulo: 'Nike DNA',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cd6333e8-4a52-4959-bfc0-8e32668b4151/dna-mens-dri-fit-6-basketball-shorts-wDK8G3.png',
      link: '/NikeDNA1',
    },
    {
      id: 7,
      titulo: 'Nike Dri-FIT DNA',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f65d664d-63a1-4410-8fb6-c05fce9691ed/dri-fit-dna-mens-10-basketball-shorts-FL74Td.png',
      link: '/DriFit',
    },
    {
      id: 8,
      titulo: 'Kevin Durant',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/21c7ead8-1985-44b4-bb4e-8e003f91e998/kevin-durant-mens-4-dna-2-in-1-basketball-shorts-X2xvGh.png',
      link: '/KevinDurant',
    },
    {
      id: 9,
      titulo: 'Nike DNA Crossover',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/431cfd6f-7199-48d0-a851-0a7f62e0fb23/dna-crossover-mens-dri-fit-8-basketball-shorts-24W6Jm.png',
      link: '/Crossover',
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
        <h2>Shorts Basketball</h2>
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
                        $29.99
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
