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

export default function Jerseysoccer() {
   

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
      titulo: 'Argentinas host team jersey, world champion 2022',
      contenido: 'https://i.postimg.cc/wxf2kVSY/camisola-Arg1.avif',
      link: '/Argentina',
    },
    {
      id: 2,
      titulo: 'Real Madrid away kit season 2023/24',
      contenido:
        'https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFMZ0134-01_51265b41-ec7d-4d92-89ae-d72734f42961.jpg%3Fv%3D1707138641&w=384&q=75',
      link: '/Madrid',
    },
    {
      id: 3,
      titulo: 'FC Barcelona home kit season 2023/24',
      contenido:
        'https://fanpass.do/cdn/shop/files/Group3569_800x.png?v=1696455073',
      link: '/Barcelona',
    },
    {
      id: 4,
      titulo: 'FC Barcelona away kit season 2023/24',
      contenido:
        'https://jerseyloco.com/wp-content/uploads/2023/08/2324-Barcelona-Away-Jersey.jpg',
      link: '/BarcelonaAway',
    },
    {
      id: 5,
      titulo: 'Real Madrid home kit season 2023/24',
      contenido:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUZR2Q4mVyeCn56P7IpgQjMTR7-T82sqmP8Xl7cWIhiIvwJyXw85EIdvEL4XGo7begmZMtDWO_7dX3HovqqQ7GZjptkzBruHlj4mJpr3-zFYUl1F914C9kuG8mkUfwJJvtl4Jcj7kYn926O9tlednxA5qA0rjZA-EqZiYs0GOSFF8-2_vxjGW1C0Tn/s1600/real-madrid-23-24-home-kit-17.jpg',
      link: '/MadridHome',
    },
    {
      id: 6,
      titulo: 'GERMANY 24 HOME JERSEY',
      contenido:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/17ed1fd94a6b4b1d967ec2fbfe1c21ab_9366/Germany_24_Home_Jersey_Kids_White_IP6130_01_laydown.jpg',
      link: '/Germany',
    },
    {
      id: 7,
      titulo: 'Bayern Munich Home Kit 2023/24',
      contenido:
        'https://number10.store/cdn/shop/files/FCB1_9f07a6bc-4dc7-40f6-9e31-15ed0e1eccd8_0003_Layer0.jpg?v=1685606474&width=1080',
      link: '/Bayern',
    },
    {
      id: 8,
      titulo: 'Manchester City Home Jersey 2024/25',
      contenido:
        'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw77730b38/images/large/701230879001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
      link: '/City',
    },
    {
      id: 9,
      titulo: 'Liverpool FC Home kit 2023/24',
      contenido:
        'https://stefanssoccer.com/mm5/graphics/00000001/9/AURORA_DX2692-688_PHSFH001-2000.jpg',
      link: '/Liverpool',
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
        <h2>Jerseys Soccer</h2>
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
                        $51.15
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
