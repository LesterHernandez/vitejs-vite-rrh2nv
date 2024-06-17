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
export default function BackpackSoccer() {
   
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
      titulo: 'Umbro Backpack 30952U-6Hf Unisex',
      contenido:
        'https://soccermaniaguate.com/image/cache/catalog/30952U-6HF-800x800.jpg',
      link: '/UmbroBackpack',
    },
    {
      id: 2,
      titulo: 'Real Madrid Unisex Backpack',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/y/dy7714_hardware-front-center-view.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/MadridBackpack',
    },
    {
      id: 3,
      titulo: 'Umbro Backpack 30895U-Lwc Unisex',
      contenido:
        'https://soccermaniaguate.com/image/cache/catalog/30867U-U56-800x800.jpg',
      link: '/LwcBackpack',
    },
    {
      id: 4,
      titulo: 'Dark Barça Nike Backpack',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee045a6-1475-4cd3-92c4-103399083754/fc-barcelona-academy-football-backpack-TB5zNm.png',
      link: '/BarcaBackpack',
    },
    {
      id: 5,
      titulo: 'Umbro Backpack 30953U-2Eq Unisex',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/3/0/30953u-2eq_frontf2-002.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/EqUmbroBack',
    },
    {
      id: 6,
      titulo: 'Umbro Backpack 30953U-6Hf Unisex',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/3/0/30953u-6hf_frontf1-001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/HfBackpack',
    },
    {
      id: 7,
      titulo: 'Guatemala Umbro Unisex Backpack',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/g/u/guabk523201-bk1_frontf1-001.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/GuatemalaBackpack',
    },
    {
      id: 8,
      titulo: 'Umbro Unisex Municipal Backpack',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/m/u/munbk523201-nv1_frontf1-001.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/MunicipalBackpack',
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
                        $31.50
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
