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
  const [starSelected, setStarSelected] = useState({}); // Estado para controlar si la estrella ha sido seleccionada en cada tarjeta

  // Función para manejar el clic en la estrella de una tarjeta específica
  const handleStarClick = (id) => {
    if (starSelected[id]) {
      setStarSelected({ ...starSelected, [id]: !starSelected[id] });
      alert('El producto se ha eliminado de la sección de favoritos :c');
    } else {
      setStarSelected({ ...starSelected, [id]: !starSelected[id] });
      alert('Se ha añadido el producto a la sección de favoritos :)');
    }
  };

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
      titulo: 'Al Rihla Ball Colombia National Team Unisex.',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/h/m/hm8142_1_hardware_photography_front_center_view_transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/ColombiaBall',
      precio: 51.15,
    },
    {
      id: 2,
      titulo: 'Real Madrid Unisex Backpack',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/y/dy7714_hardware-front-center-view.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/MadridBackpack',
      precio: '31.50',
    },
    {
      id: 3,
      titulo: 'Champios League Ball 23/24.',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/i/n/in7017_hardware-front-center-view.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/ChampionsBall',
      precio: 51.15,
    },
    {
      id: 4,
      titulo: 'Messi Club Ball',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/i/s/is5597_hardware-front-center-view.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/MessiBall',
      precio: 51.15,
    },
    {
      id: 5,
      titulo: 'Tango Rosario Ball',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/6/5/656927_hardware-front-center-view.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/TangoBall',
      precio: 51.15,
    },
    {
      id: 6,
      titulo: 'Goalkeeper Gloves Pred Glove Training Unisex.',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/i/q/iq4027_hardware-front-center-view.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/GlovesPred',
      precio: '31.90',
    },
    {
      id: 7,
      titulo: 'Predator Pro Unisex Goalkeeper Gloves.',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/y/dy2612_hardware-front-center-view.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/PredatorGloves',
      precio: '31.90',
    },
    {
      id: 8,
      titulo: 'Messi Sg Mtc J Shin Guards Unisex',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/i/a/ia0870_hardware-front-center-view.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/MessiShin',
      precio: '31.90',
    },
    {
      id: 9,
      titulo: 'Oceaunz League Final Ball',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/i/a/ia1010_1_hardware_photography_front_center_view_transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Oceaunz',
      precio: 51.15,
    },
    {
      id: 10,
      titulo: 'Adidas F50 League Laceless FG/MG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1018640_Main_1818138.jpg',
      link: '//AdidasF50',
      precio: 77.97,
    },
    {
      id: 11,
      titulo: 'Adidas Predator League IN',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1018614_Main_1815654.jpg',
      link: '/AdidasIn',
      precio: 77.97,
    },
    {
      id: 12,
      titulo: 'Argentinas host team jersey, world champion 2022',
      contenido: 'https://i.postimg.cc/wxf2kVSY/camisola-Arg1.avif',
      link: '/Argentina',
      precio: 51.15,
    },
    {
      id: 13,
      titulo: 'Real Madrid away kit season 2023/24',
      contenido:
        'https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFMZ0134-01_51265b41-ec7d-4d92-89ae-d72734f42961.jpg%3Fv%3D1707138641&w=384&q=75',
      link: '/Madrid',
      precio: 51.15,
    },
    {
      id: 14,
      titulo: 'Real Madrid home kit season 2023/24',
      contenido:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUZR2Q4mVyeCn56P7IpgQjMTR7-T82sqmP8Xl7cWIhiIvwJyXw85EIdvEL4XGo7begmZMtDWO_7dX3HovqqQ7GZjptkzBruHlj4mJpr3-zFYUl1F914C9kuG8mkUfwJJvtl4Jcj7kYn926O9tlednxA5qA0rjZA-EqZiYs0GOSFF8-2_vxjGW1C0Tn/s1600/real-madrid-23-24-home-kit-17.jpg',
      link: '/MadridHome',
      precio: 51.15,
    },
    {
      id: 15,
      titulo: 'GERMANY 24 HOME JERSEY',
      contenido:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/17ed1fd94a6b4b1d967ec2fbfe1c21ab_9366/Germany_24_Home_Jersey_Kids_White_IP6130_01_laydown.jpg',
      link: '/Germany',
      precio: 51.15,
    },
    {
      id: 16,
      titulo: 'Bayern Munich Home Kit 2023/24',
      contenido:
        'https://number10.store/cdn/shop/files/FCB1_9f07a6bc-4dc7-40f6-9e31-15ed0e1eccd8_0003_Layer0.jpg?v=1685606474&width=1080',
      link: '/Bayern',
      precio: 51.15,
    },
    {
      id: 17,
      titulo: 'DFB adidas Home Shorts 2024 - Kids',
      contenido:
        'https://images.footballfanatics.com/germany-national-team/dfb-adidas-home-shorts-2024-kids_ss5_p-200915260+pv-1+u-iqxnwrnrxwcjqmphyi2j+v-y6rjfttewwvqp3ewkrdy.jpg?_hv=2&w=900',
      link: '/DFBShort',
      precio: 29.99,
    },
    {
      id: 18,
      titulo: 'Manchester United adidas Training Shorts - Navy - Kids',
      contenido:
        'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-training-shorts-navy-kids_ss5_p-200955008+pv-1+u-usmuajv7gsijfdrfafrt+v-nrg99hscluauqvk6gccg.jpg?_hv=2&w=900',
      link: '/Manchestershort',
      precio: 29.99,
    },
    {
      id: 19,
      titulo: 'Belgium FA adidas Away Shorts 2024',
      contenido:
        'https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-away-shorts-2024_ss5_p-200793095+pv-1+u-bjtzux4cahbe9tpr3bi5+v-mrv5ssoxydez4ikwm7dy.jpg?_hv=2&w=900',
      link: '/Belgicashort',
      precio: 29.99,
    },
    {
      id: 20,
      titulo: 'Belgium FA adidas Home Shorts 2024',
      contenido:
        'https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-home-shorts-2024_ss5_p-200793087+pv-1+u-rloo1bbtk0mhdig1aolg+v-xfln78jzqq9qdmaixabb.jpg?_hv=2&w=900',
      link: '/HomeShort',
      precio: 29.99,
    },
    {
      id: 21,
      titulo: 'Real Madrid Home Shorts 2023/24',
      contenido:
        'https://www.soccerbox.com/media/catalog/product/cache/e5c18d5f608fefb2b3ef83fcb1922b34/r/e/real-madrid-home-shorts-23.jpg',
      link: '/MadridShort',
      precio: 29.99,
    },
    {
      id: 22,
      titulo: 'JUVENTUS AWAY SHORTS 2020/21',
      contenido:
        'https://www.soccerbox.com/media/catalog/product/cache/f4b6407e5847ea579fdc5730945961f6/j/u/juventus-away-shorts-20-21.jpg',
      link: '/Juventusshort',
      precio: 29.99,
    },

    {
      id: 23,
      titulo: 'Adi 23 Sock Unisex Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/h/t/ht5027-1-hardware-photography-side_center_view-transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/SockAdi',
      precio: '25.50',
    },
    {
      id: 24,
      titulo: 'All Court 2.0 Ball',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/g/l/gl3946_hardware-front-center-view.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/AllCourt',
      precio: 51.15,
    },
    {
      id: 25,
      titulo: 'All Court 3.0 Ball',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/h/m/hm4975-1-hardware-photography-front_center_view-transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/AllCourt3',
      precio: 51.15,
    },

    {
      id: 26,
      titulo: '3-Stripes Rubber X3',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/h/m/hm4970-1-hardware-photography-front_center_view-transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Stripes',
      precio: 51.15,
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
          Adidas{' '}
          <Image
            style={{
              width: '50px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            src="https://static.vecteezy.com/system/resources/previews/010/994/325/non_2x/adidas-logo-white-symbol-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg"
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
