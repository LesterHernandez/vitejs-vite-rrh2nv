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
export default function BackpackBasket() {
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
      titulo: 'Nike Hoops Elite',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36242c55-ffbe-4977-b028-022a26774ff0/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops',
    },
    {
      id: 2,
      titulo: 'Nike Hoops Elite ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d72f9973-87cb-42fc-acd2-8359dfe2f2a7/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops2',
    },
    {
      id: 3,
      titulo: 'Nike Hoops Elite  ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/879781f0-abb2-498b-baac-7a28143809ca/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops3',
    },
    {
      id: 4,
      titulo: 'Jordan Air Patrol',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5d3db636-0025-4c46-a29f-1abf88bb15b8/mochila-29-l-jordan-air-patrol-M6666n.png',
      link: '/JordanAir1',
    },
    {
      id: 5,
      titulo: 'Jordan Air Patrol ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/033c715c-ca6e-41d7-b9fb-0a7267fd0680/mochila-29-l-jordan-air-patrol-M6666n.png',
      link: '/JordanAir2',
    },
    {
      id: 6,
      titulo: 'Jordan Air Patrol  ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/39a59703-01a7-4352-abd5-b7226f64050e/mochila-29-l-jordan-air-patrol-M6666n.png',
      link: '/JordanAir3',
    },
    {
      id: 7,
      titulo: 'Nike Hoops  Elite',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e954a974-40f2-45ef-998a-bbbf7141f997/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops4',
    },
    {
      id: 8,
      titulo: 'Nike Hoops  Elite ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c888421d-c9d0-4058-91cd-fd95f774bd49/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops5',
    },
    {
      id: 9,
      titulo: ' Nike Hoops Elite',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a827468c-b2b6-4b6c-9c4c-9dd6c8fe6ff4/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops6',
    },
    // Resto de los datosTarjetas style={{ backgroundColor: '#B3E5F', position: 'relative' }}
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
          Backpacks <i class="bi bi-backpack"></i>{' '}
          <Image
            style={{
              width: '22px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            src="https://cdn-icons-png.flaticon.com/512/4650/4650539.png"
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
                        <br />
                        $41.15
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
