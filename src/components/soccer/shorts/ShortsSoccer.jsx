import React, { useState } from 'react';
import {  Card } from 'react-bootstrap'; // Importar Card desde react-bootstrap 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Enviar = ({ envio }) => {
  const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
  const [messages, setMessages] = useState(savedMessages);
  const [isFavorite, setIsFavorite] = useState(
    savedMessages.some((msg) => msg.message === envio.message)
  );

  const sendMessage = () => {
    const isAlreadyFavorite = messages.some(
      (msg) => msg.message === envio.message
    );
    let updatedMessages;

    if (isAlreadyFavorite) {
      updatedMessages = messages.filter((msg) => msg.message !== envio.message);
      toast.success('Removed from favorites');
    } else {
      updatedMessages = [...messages, envio];
      toast.success('Added to favorites');
    }

    setMessages(updatedMessages);
    setIsFavorite(!isAlreadyFavorite);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };
  return (
    <div>
      <a
        style={{ textDecoration: 'none', color: 'inherit' }}
        href={envio.pageLink}
      >
        <i class="bi bi-arrow-right-circle"></i>{' '}
      </a>
      <button
        style={{ border: 'none', padding: 0, background: 'none' }}
        onClick={sendMessage}
      >
        {isFavorite ? (
          <i class="bi bi-star-fill"></i>
        ) : (
          <i class="bi bi-star"></i>
        )}
      </button>
    </div>
  );
};
export default function ShortsSoccer() {
   
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
      titulo: 'DFB adidas Home Shorts 2024 - Kids',
      contenido:
        'https://images.footballfanatics.com/germany-national-team/dfb-adidas-home-shorts-2024-kids_ss5_p-200915260+pv-1+u-iqxnwrnrxwcjqmphyi2j+v-y6rjfttewwvqp3ewkrdy.jpg?_hv=2&w=900',
      link: '/DFBShort',
    },
    {
      id: 2,
      titulo: 'Manchester United adidas Training Shorts - Navy - Kids',
      contenido:
        'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-training-shorts-navy-kids_ss5_p-200955008+pv-1+u-usmuajv7gsijfdrfafrt+v-nrg99hscluauqvk6gccg.jpg?_hv=2&w=900',
      link: '/Manchestershort',
    },
    {
      id: 3,
      titulo: 'Belgium FA adidas Away Shorts 2024',
      contenido:
        'https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-away-shorts-2024_ss5_p-200793095+pv-1+u-bjtzux4cahbe9tpr3bi5+v-mrv5ssoxydez4ikwm7dy.jpg?_hv=2&w=900',
      link: '/Belgicashort',
    },
    {
      id: 4,
      titulo: 'Belgium FA adidas Home Shorts 2024',
      contenido:
        'https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-home-shorts-2024_ss5_p-200793087+pv-1+u-rloo1bbtk0mhdig1aolg+v-xfln78jzqq9qdmaixabb.jpg?_hv=2&w=900',
      link: '/HomeShort',
    },
    {
      id: 5,
      titulo: 'England Essentials Crest Sweat Short - Navy - Mens',
      contenido:
        'https://images.footballfanatics.com/england-national-team/england-essentials-crest-sweat-short-navy-mens_ss5_p-200498242+pv-1+u-v1mztsxjmwg0uj5p99uc+v-1jl2pjpjygutp2b7e7tg.jpg?_hv=2&w=900',
      link: '/Englandshort',
    },
    {
      id: 6,
      titulo: 'Barcelona Short Home Kit 2023/24',
      contenido:
        'https://images.footballfanatics.com/barcelona/barcelona-nike-home-stadium-shorts-2023-24_ss4_p-13372214+u-2c9sn615epv69h45repq+v-e14ebb232c3c462588f2b55131b2aa78.jpg?_hv=2&w=900',
      link: '/Barcashort',
    },
    {
      id: 7,
      titulo: 'Real Madrid Home Shorts 2023/24',
      contenido:
        'https://www.soccerbox.com/media/catalog/product/cache/e5c18d5f608fefb2b3ef83fcb1922b34/r/e/real-madrid-home-shorts-23.jpg',
      link: '/MadridShort',
    },
    {
      id: 8,
      titulo: 'JUVENTUS AWAY SHORTS 2020/21',
      contenido:
        'https://www.soccerbox.com/media/catalog/product/cache/f4b6407e5847ea579fdc5730945961f6/j/u/juventus-away-shorts-20-21.jpg',
      link: '/Juventusshort',
    },
    {
      id: 9,
      titulo: 'CHELSEA AWAY SHORTS 2021/22',
      contenido:
        'https://www.soccerbox.com/media/catalog/product/cache/f4b6407e5847ea579fdc5730945961f6/c/h/chelsea-21-22-away-shorts-front_1.jpg',
      link: '/ChelseaShort',
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
        <h2>Shorts Soccer</h2>
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
