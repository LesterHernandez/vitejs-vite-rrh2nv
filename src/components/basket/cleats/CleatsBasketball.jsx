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
export default function CleatsBasketball() {
   

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
      titulo: 'Tatum 2 "Denim"',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e91e92e2-912c-4dd6-8e54-435986beaef1/tatum-2-denim-basketball-shoes-8XGVH8.png',
      link: '/Tatum',
    },
    {
      id: 2,
      titulo: ' Luka 2 ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/00cfa018-fad0-4919-bb0d-4c3bb6552425/luka-2-basketball-shoes-vcXFrk.png',
      link: '/Luka',
    },
    {
      id: 3,
      titulo: 'KD17 "Sunrise"',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c9cc63a5-a59c-4365-9898-46a779368e1a/kd17-sunrise-basketball-shoes-Vw01bx.png',
      link: '/Sunrise',
    },
    {
      id: 4,
      titulo: 'Book 1 "Rattlesnake"',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f28ea345-aed5-4f9d-ad3e-fbe9639185cb/book-1-rattlesnake-basketball-shoes-j1b37W.png',
      link: '/Book1',
    },
    {
      id: 5,
      titulo: 'LeBron XXI',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a682211-19ba-4263-8a4b-8a7c1994e668/lebron-xxi-basketball-shoes-kGj4j4.png',
      link: '/LebronXXI',
    },
    {
      id: 6,
      titulo: 'Ja 1',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b19d8627-a8a6-4db6-b5df-5a849dd2f768/ja-1-basketball-shoes-bCx2W3.png',
      link: '/JA1',
    },
    {
      id: 7,
      titulo: 'LeBron NXXT Gen AMPD',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00d872fc-f756-4958-b0a3-793f23aff9b3/lebron-nxxt-gen-ampd-basketball-shoes-CH9Kwr.png',
      link: '/Nxxtgen',
    },
    {
      id: 8,
      titulo: 'Giannis Immortality 3',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78f7c5c0-0f63-4d47-a29c-8523cbc10cc7/giannis-immortality-3-basketball-shoes-H93p2P.png',
      link: '/Giannis',
    },
    {
      id: 9,
      titulo: 'Nike G.T. Jump 2',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d932bd39-a220-4714-9fa2-23630d148c45/gt-jump-2-mens-basketball-shoes-CZpmDQ.png',
      link: '/GTjump',
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
        <h2>Cleats Basketball</h2>
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
