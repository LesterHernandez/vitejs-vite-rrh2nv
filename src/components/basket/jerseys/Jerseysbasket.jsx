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
export default function Jerseysbasket() {
   
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
      titulo:
        'Mens Los Angeles Lakers LeBron James Fanatics Branded Gold 2021/22.',
      contenido:
        'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-swingman-jersey-gold-lebron-james-youth_ss5_p-201084152+pv-1+u-jnutuz4rmnvkna8w9jpj+v-jp7qq1cfecmw2etipifb.jpg?_hv=2&w=900',
      link: '/Angeles',
    },
    {
      id: 2,
      titulo:
        'Unisex New York Knicks Jalen Brunson Nike Blue Swingman Jersey - Icon Edition.',
      contenido:
        'https://fanatics.frgimages.com/new-york-knicks/unisex-nike-jalen-brunson-blue-new-york-knicks-swingman-jersey-icon-edition_ss5_p-5270594+pv-1+u-wjkmhasdp9s5wwzt2bmb+v-jfoqmsqjvxiyivrvdxog.jpg?_hv=2&w=900',
      link: '/Knicks',
    },
    {
      id: 3,
      titulo:
        'Unisex San Antonio Spurs Victor Wembanyama Nike Black 2023 NBA Draft First Round Pick Swingman Jersey - Ic',
      contenido:
        'https://fanatics.frgimages.com/san-antonio-spurs/unisex-nike-victor-wembanyama-black-san-antonio-spurs-2023-nba-draft-first-round-pick-swingman-jersey-icon-edition_ss5_p-200289618+pv-1+u-2wvotgouoboizir4gkly+v-nfutg3bxgxv5jhmrkjt6.jpg?_hv=2&w=900',
      link: '/Spurs',
    },
    {
      id: 4,
      titulo:
        'Unisex Boston Celtics Jayson Tatum Jordan Brand Black Swingman Jersey - Statement Edition',
      contenido:
        'https://fanatics.frgimages.com/boston-celtics/unisex-jordan-brand-jayson-tatum-black-boston-celtics-swingman-jersey-statement-edition_pi4759000_altimages_ff_4759148-9c174412578990acd403alt1_full.jpg?_hv=2&w=900',
      link: '/Celtics',
    },
    {
      id: 5,
      titulo:
        'Unisex Dallas Mavericks Luka Dončić Nike Blue Swingman Jersey - Icon Edition',
      contenido:
        'https://fanatics.frgimages.com/dallas-mavericks/unisex-nike-luka-don%C4%8Di%C4%87-blue-dallas-mavericks-swingman-jersey-icon-edition_pi4650000_altimages_ff_4650403-b04fbffcbdfdca3e55e6alt1_full.jpg?_hv=2&w=900',
      link: '/Dallas',
    },
    {
      id: 6,
      titulo:
        'Youth Golden State Warriors Stephen Curry Fanatics Branded Royal 2022/23 Fast Break Replica Player Jersey - Icon Edition',
      contenido:
        'https://fanatics.frgimages.com/golden-state-warriors/youth-fanatics-branded-stephen-curry-royal-golden-state-warriors-2022/23-fast-break-replica-player-jersey-icon-edition_pi5207000_altimages_ff_5207866-03e43c4a39accf9e8f03alt1_full.jpg?_hv=2&w=900',
      link: '/Golden',
    },
    {
      id: 7,
      titulo:
        'Unisex Denver Nuggets Nikola Jokic Nike Navy Swingman Jersey - Icon Edition',
      contenido:
        'https://fanatics.frgimages.com/denver-nuggets/unisex-nike-nikola-jokic-navy-denver-nuggets-swingman-jersey-icon-edition_ss5_p-4650405+pv-1+u-8tdkk3zua3ddan4ecrgv+v-nqfk542jtuvjak7ycxa6.jpg?_hv=2&w=900',
      link: '/Nuggets',
    },
    {
      id: 8,
      titulo:
        'Mens Boston Celtics Larry Bird Mitchell & Ness Kelly Green Hardwood Classics Swingman Jersey',
      contenido:
        'https://fanatics.frgimages.com/boston-celtics/mens-mitchell-and-ness-larry-bird-kelly-green-boston-celtics-hardwood-classics-swingman-jersey_pi2751000_altimages_ff_2751337alt1_full.jpg?_hv=2&w=900',
      link: '/Larry',
    },
    {
      id: 9,
      titulo:
        'Mens Los Angeles Lakers Kobe Bryant Mitchell & Ness Gold Hardwood Classics 2008-09 Authentic Jersey',
      contenido:
        'https://fanatics.frgimages.com/los-angeles-lakers/mens-mitchell-and-ness-kobe-bryant-gold-los-angeles-lakers-hardwood-classics-2008-09-authentic-jersey_pi3633000_altimages_ff_3633447-d48aea1b99fa151fc065alt1_full.jpg?_hv=2&w=900',
      link: '/Lakers',
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
        <h2>Jerseys Basketball</h2>
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
                        $99.99
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
