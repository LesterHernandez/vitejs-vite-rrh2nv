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
      titulo: 'Umbro Backpack 30952U-6Hf Unisex',
      contenido:
        'https://soccermaniaguate.com/image/cache/catalog/30952U-6HF-800x800.jpg',
      link: '/UmbroBackpack',
      precio: '31.50',
    },
    {
      id: 2,
      titulo: 'Guatemala Ball Unisex',
      contenido:
        'https://siman.vtexassets.com/arquivos/ids/5270429/104388192--2-.jpg?v=638457609246870000',
      link: '/GuateBall',
      precio: '51.15',
    },
    {
      id: 3,
      titulo: 'Umbro Backpack 30895U-Lwc Unisex',
      contenido:
        'https://soccermaniaguate.com/image/cache/catalog/30867U-U56-800x800.jpg',
      link: '/LwcBackpack',
      precio: '31.50',
    },
    {
      id: 4,
      titulo: 'Tights 65948U-060 Unisex',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/6/5/65948u-060_frontf1-001.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Tights',
      precio: '29.99',
    },
    {
      id: 5,
      titulo: 'Umbro Backpack 30953U-2Eq Unisex',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/3/0/30953u-2eq_frontf2-002.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/EqUmbroBack',
      precio: '31.50',
    },
    {
      id: 6,
      titulo: 'Umbro Backpack 30953U-6Hf Unisex',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/3/0/30953u-6hf_frontf1-001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/HfBackpack',
      precio: '31.50',
    },
    {
      id: 7,
      titulo: 'Guatemala Umbro Unisex Backpack',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/g/u/guabk523201-bk1_frontf1-001.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/GuatemalaBackpack',
      precio: '31.50',
    },
    {
      id: 8,
      titulo: 'Umbro Unisex Municipal Backpack',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/m/u/munbk523201-nv1_frontf1-001.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/MunicipalBackpack',
      precio: '31.50',
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
          Umbro{' '}
          <Image
            style={{
              width: '50px',
            }}
            src="https://images.seeklogo.com/logo-png/52/1/umbro-logo-png_seeklogo-520345.png"
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
                        ${tarjeta.precio}
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
