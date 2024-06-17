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
export default function Nike() {
   
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
      precio: '41.15',
    },
    {
      id: 2,
      titulo: 'Nike Hoops Elite ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d72f9973-87cb-42fc-acd2-8359dfe2f2a7/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops2',
      precio: '41.15',
    },
    {
      id: 3,
      titulo: 'Nike Hoops Elite  ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/879781f0-abb2-498b-baac-7a28143809ca/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops3',
      precio: '41.15',
    },
    {
      id: 4,
      titulo: 'Jordan Air Patrol',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5d3db636-0025-4c46-a29f-1abf88bb15b8/mochila-29-l-jordan-air-patrol-M6666n.png',
      link: '/JordanAir1',
      precio: '41.15',
    },
    {
      id: 5,
      titulo: 'Jordan Air Patrol ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/033c715c-ca6e-41d7-b9fb-0a7267fd0680/mochila-29-l-jordan-air-patrol-M6666n.png',
      link: '/JordanAir2',
      precio: '41.15',
    },
    {
      id: 6,
      titulo: 'Jordan Air Patrol  ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/39a59703-01a7-4352-abd5-b7226f64050e/mochila-29-l-jordan-air-patrol-M6666n.png',
      link: '/JordanAir3',
      precio: '41.15',
    },
    {
      id: 7,
      titulo: 'Nike Hoops  Elite',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e954a974-40f2-45ef-998a-bbbf7141f997/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops4',
      precio: '41.15',
    },
    {
      id: 8,
      titulo: 'Nike Hoops  Elite ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c888421d-c9d0-4058-91cd-fd95f774bd49/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops5',
      precio: '41.15',
    },
    {
      id: 9,
      titulo: ' Nike Hoops Elite',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a827468c-b2b6-4b6c-9c4c-9dd6c8fe6ff4/mochila-hoops-elite-32l-l0zSj5.png',
      link: '/Hoops6',
      precio: '41.15',
    },
    {
      id: 10,
      titulo: 'Nike Swoosh Mini Ball',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/b/b/bb0634-879_frontf1-001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/SwooshBall',
      precio: '51.15',
    },
    {
      id: 11,
      titulo: 'Nike Everyday Playground 8P Gr  ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/n/1/n100437103907-frontf1-001.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/PlaygroundBall',
      precio: '51.15',
    },
    {
      id: 12,
      titulo: 'Nike Elite All Court 8P 2.0',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/n/1/n1004088855-frontf1-001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/EliteBall',
      precio: '51.15',
    },
    {
      id: 13,
      titulo: 'Nike Playground 8P 2.0 James',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/n/1/n100437257507-frontf1-001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/PBall',
      precio: '51.15',
    },
    {
      id: 14,
      titulo: 'Ultimate 2.0 8P Deflate',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/j/1/j1008254855-frontf1-001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/Deflate',
      precio: '51.15',
    },
    {
      id: 15,
      titulo: 'Jordan Club Cap ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5185-604_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/JordanCap',
      precio: '27.99',
    },
    {
      id: 16,
      titulo: 'Jordan Rise Unisex Cap ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5186-100-phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Risecap',
      precio: '27.99',
    },
    {
      id: 17,
      titulo: 'Jordan Club Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5185-349_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Clubcap',
      precio: '27.99',
    },
    {
      id: 18,
      titulo: 'Jordan Club Cap  ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5185-752_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/YellowCap',
      precio: '27.99',
    },
    {
      id: 19,
      titulo: 'Jordan Rise Unisex Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/d/fd5186-436_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Riseblue',
      precio: '27.99',
    },
    {
      id: 20,
      titulo: 'Basketball Dont Flinch Unisex Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/0/2/023920_01.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/Flinch',
      precio: '27.99',
    },
    {
      id: 21,
      titulo: 'Jordan Fly Unisex Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/v/fv5297-010_phsfm001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Fly',
      precio: '27.99',
    },
    {
      id: 22,
      titulo: 'Unisex Nba Curved Structured Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/n/b/nbasb521201-wht_frontf1-001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/Curved',
      precio: '27.99',
    },
    {
      id: 23,
      titulo: 'Lebron Heritage86 Unisex Cap',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/m/dm3519-010-phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/TuneSquad',
      precio: '27.99',
    },
    {
      id: 24,
      titulo: 'Tatum 2 "Denim"',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e91e92e2-912c-4dd6-8e54-435986beaef1/tatum-2-denim-basketball-shoes-8XGVH8.png',
      link: '/Tatum',
      precio: '77.97',
    },
    {
      id: 25,
      titulo: ' Luka 2 ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/00cfa018-fad0-4919-bb0d-4c3bb6552425/luka-2-basketball-shoes-vcXFrk.png',
      link: '/Luka',
      precio: '77.97',
    },
    {
      id: 26,
      titulo: 'KD17 "Sunrise"',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c9cc63a5-a59c-4365-9898-46a779368e1a/kd17-sunrise-basketball-shoes-Vw01bx.png',
      link: '/Sunrise',
      precio: '77.97',
    },
    {
      id: 27,
      titulo: 'Book 1 "Rattlesnake"',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f28ea345-aed5-4f9d-ad3e-fbe9639185cb/book-1-rattlesnake-basketball-shoes-j1b37W.png',
      link: '/Book1',
      precio: '77.97',
    },
    {
      id: 28,
      titulo: 'LeBron XXI',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a682211-19ba-4263-8a4b-8a7c1994e668/lebron-xxi-basketball-shoes-kGj4j4.png',
      link: '/LebronXXI',
      precio: '77.97',
    },
    {
      id: 29,
      titulo: 'Ja 1',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b19d8627-a8a6-4db6-b5df-5a849dd2f768/ja-1-basketball-shoes-bCx2W3.png',
      link: '/JA1',
      precio: '77.97',
    },
    {
      id: 30,
      titulo: 'LeBron NXXT Gen AMPD',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00d872fc-f756-4958-b0a3-793f23aff9b3/lebron-nxxt-gen-ampd-basketball-shoes-CH9Kwr.png',
      link: '/Nxxtgen',
      precio: '77.97',
    },
    {
      id: 31,
      titulo: 'Giannis Immortality 3',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78f7c5c0-0f63-4d47-a29c-8523cbc10cc7/giannis-immortality-3-basketball-shoes-H93p2P.png',
      link: '/Giannis',
      precio: '77.97',
    },
    {
      id: 32,
      titulo: 'Nike G.T. Jump 2',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d932bd39-a220-4714-9fa2-23630d148c45/gt-jump-2-mens-basketball-shoes-CZpmDQ.png',
      link: '/GTjump',
      precio: '77.97',
    },
    {
      id: 33,
      titulo:
        'Mens Los Angeles Lakers LeBron James Fanatics Branded Gold 2021/22.',
      contenido:
        'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-swingman-jersey-gold-lebron-james-youth_ss5_p-201084152+pv-1+u-jnutuz4rmnvkna8w9jpj+v-jp7qq1cfecmw2etipifb.jpg?_hv=2&w=900',
      link: '/Angeles',
      precio: '99.99',
    },
    {
      id: 34,
      titulo:
        'Unisex New York Knicks Jalen Brunson Nike Blue Swingman Jersey - Icon Edition.',
      contenido:
        'https://fanatics.frgimages.com/new-york-knicks/unisex-nike-jalen-brunson-blue-new-york-knicks-swingman-jersey-icon-edition_ss5_p-5270594+pv-1+u-wjkmhasdp9s5wwzt2bmb+v-jfoqmsqjvxiyivrvdxog.jpg?_hv=2&w=900',
      link: '/Knicks',
      precio: '99.99',
    },
    {
      id: 35,
      titulo:
        'Unisex San Antonio Spurs Victor Wembanyama Nike Black 2023 NBA Draft First Round Pick Swingman Jersey - Ic',
      contenido:
        'https://fanatics.frgimages.com/san-antonio-spurs/unisex-nike-victor-wembanyama-black-san-antonio-spurs-2023-nba-draft-first-round-pick-swingman-jersey-icon-edition_ss5_p-200289618+pv-1+u-2wvotgouoboizir4gkly+v-nfutg3bxgxv5jhmrkjt6.jpg?_hv=2&w=900',
      link: '/Spurs',
      precio: '99.99',
    },
    {
      id: 36,
      titulo:
        'Unisex Boston Celtics Jayson Tatum Jordan Brand Black Swingman Jersey - Statement Edition',
      contenido:
        'https://fanatics.frgimages.com/boston-celtics/unisex-jordan-brand-jayson-tatum-black-boston-celtics-swingman-jersey-statement-edition_pi4759000_altimages_ff_4759148-9c174412578990acd403alt1_full.jpg?_hv=2&w=900',
      link: '/Celtics',
      precio: '99.99',
    },
    {
      id: 37,
      titulo:
        'Unisex Dallas Mavericks Luka Dončić Nike Blue Swingman Jersey - Icon Edition',
      contenido:
        'https://fanatics.frgimages.com/dallas-mavericks/unisex-nike-luka-don%C4%8Di%C4%87-blue-dallas-mavericks-swingman-jersey-icon-edition_pi4650000_altimages_ff_4650403-b04fbffcbdfdca3e55e6alt1_full.jpg?_hv=2&w=900',
      link: '/Dallas',
      precio: '99.99',
    },
    {
      id: 38,
      titulo:
        'Youth Golden State Warriors Stephen Curry Fanatics Branded Royal 2022/23 Fast Break Replica Player Jersey - Icon Edition',
      contenido:
        'https://fanatics.frgimages.com/golden-state-warriors/youth-fanatics-branded-stephen-curry-royal-golden-state-warriors-2022/23-fast-break-replica-player-jersey-icon-edition_pi5207000_altimages_ff_5207866-03e43c4a39accf9e8f03alt1_full.jpg?_hv=2&w=900',
      link: '/Golden',
      precio: '99.99',
    },
    {
      id: 39,
      titulo:
        'Unisex Denver Nuggets Nikola Jokic Nike Navy Swingman Jersey - Icon Edition',
      contenido:
        'https://fanatics.frgimages.com/denver-nuggets/unisex-nike-nikola-jokic-navy-denver-nuggets-swingman-jersey-icon-edition_ss5_p-4650405+pv-1+u-8tdkk3zua3ddan4ecrgv+v-nqfk542jtuvjak7ycxa6.jpg?_hv=2&w=900',
      link: '/Nuggets',
      precio: '99.99',
    },
    {
      id: 40,
      titulo:
        'Mens Boston Celtics Larry Bird Mitchell & Ness Kelly Green Hardwood Classics Swingman Jersey',
      contenido:
        'https://fanatics.frgimages.com/boston-celtics/mens-mitchell-and-ness-larry-bird-kelly-green-boston-celtics-hardwood-classics-swingman-jersey_pi2751000_altimages_ff_2751337alt1_full.jpg?_hv=2&w=900',
      link: '/Larry',
      precio: '99.99',
    },
    {
      id: 41,
      titulo:
        'Mens Los Angeles Lakers Kobe Bryant Mitchell & Ness Gold Hardwood Classics 2008-09 Authentic Jersey',
      contenido:
        'https://fanatics.frgimages.com/los-angeles-lakers/mens-mitchell-and-ness-kobe-bryant-gold-los-angeles-lakers-hardwood-classics-2008-09-authentic-jersey_pi3633000_altimages_ff_3633447-d48aea1b99fa151fc065alt1_full.jpg?_hv=2&w=900',
      link: '/Lakers',
      precio: '99.99',
    },
    {
      id: 42,
      titulo: 'KD',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7df83ddf-9eb3-4511-849c-5a9b99726c73/kd-mens-dri-fit-standard-issue-reversible-basketball-shorts-kWqrCX.png',
      link: '/KD',
      precio: '29.99',
    },
    {
      id: 43,
      titulo: 'Nike DNA ',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/567504a3-0b9f-482d-b101-d8090f52eb38/dna-mens-dri-fit-6-basketball-shorts-8C4sx3.png',
      link: '/NikeDNA',
      precio: '29.99',
    },
    {
      id: 44,
      titulo: 'Jordan Sport',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c0dd74b6-10cb-402a-9d7c-757a1da18fd8/jordan-sport-mens-dri-fit-diamond-shorts-T4vhp8.png',
      link: '/ShortJordan',
      precio: '29.99',
    },
    {
      id: 45,
      titulo: 'Sabrina',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/85082426-a1f3-4930-8182-e87c5532644f/sabrina-dri-fit-basketball-shorts-ntz23m.png',
      link: '/Sabrina',
      precio: '29.99',
    },
    {
      id: 46,
      titulo: 'Nike Icon',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9937644d-a6c5-48c6-9e03-2fefdf04148f/icon-mens-dri-fit-11-basketball-shorts-sD1bqF.png',
      link: '/NikeIcon',
      precio: '29.99',
    },
    {
      id: 47,
      titulo: 'Nike DNA',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cd6333e8-4a52-4959-bfc0-8e32668b4151/dna-mens-dri-fit-6-basketball-shorts-wDK8G3.png',
      link: '/NikeDNA1',
      precio: '29.99',
    },
    {
      id: 48,
      titulo: 'Nike Dri-FIT DNA',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f65d664d-63a1-4410-8fb6-c05fce9691ed/dri-fit-dna-mens-10-basketball-shorts-FL74Td.png',
      link: '/DriFit',
      precio: '29.99',
    },
    {
      id: 49,
      titulo: 'Kevin Durant',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/21c7ead8-1985-44b4-bb4e-8e003f91e998/kevin-durant-mens-4-dna-2-in-1-basketball-shorts-X2xvGh.png',
      link: '/KevinDurant',
      precio: '29.99',
    },
    {
      id: 50,
      titulo: 'Nike DNA Crossover',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/431cfd6f-7199-48d0-a851-0a7f62e0fb23/dna-crossover-mens-dri-fit-8-basketball-shorts-24W6Jm.png',
      link: '/Crossover',
      precio: '29.99',
    },
    {
      id: 51,
      titulo: 'Jordan Everyday Max No Show Unisex Tights Black',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/x/dx9656-010-phcfh001-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/JordanTights',
      precio: '29.99',
    },
    {
      id: 52,
      titulo: 'Unisex Jordan Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/x/dx9632-918_phcyd002-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/UniTights',
      precio: '29.99',
    },
    {
      id: 53,
      titulo: 'Jumpman Crew 3-Pack Unisex Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/s/x/sx5545-013_phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Crew3',
      precio: '29.99',
    },
    {
      id: 54,
      titulo: 'Everyday Plus Cushioned Unisex Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/a/da5065-010-phsfh001-1000_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Cushioned',
      precio: '29.99',
    },
    {
      id: 55,
      titulo: 'Jordan Everyday Unisex Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/x/dx9655-917_phcfh001-1000.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/EverydayTights',
      precio: '29.99',
    },
    {
      id: 56,
      titulo: 'Jordan Essentials Crew 3-Pack Unisex Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/a/da5718-100-phcfh001-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Essentials3',
      precio: '29.99',
    },
    {
      id: 57,
      titulo: 'Jordan Everyday Max No Show Unisex Tights White',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/x/dx9656-100-phcfh001-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/NoShow',
      precio: '29.99',
    },
    {
      id: 58,
      titulo: 'Drive Qtr Unisex Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/1/3/1329366-001_slf_sl_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
      link: '/Qtr',
      precio: '29.99',
    },
    {
      id: 59,
      titulo: 'Snkr Nba Unisex Socks',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/a/da5062-100-phcfh001-1000_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Snkr',
      precio: '29.99',
    },
    {
      id: 60,
      titulo: 'Dark Barça Nike Backpack',
      contenido:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee045a6-1475-4cd3-92c4-103399083754/fc-barcelona-academy-football-backpack-TB5zNm.png',
      link: '/BarcaBackpack',
      precio: '31.50',
    },
    {
      id: 61,
      titulo: 'Nike Academy Ball',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/c/u/cu8047-102-phsfz001-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/AcademyBall',
      precio: '51.15',
    },
    {
      id: 62,
      titulo: 'Nike Pitch - Fa22 ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/n/dn3600-701_phsbz001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/PitchFa',
      precio: '51.15',
    },
    {
      id: 63,
      titulo: 'Zoom Superfly 9 Academy Xxv Tf Mens Cleats',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/b/fb8398-060_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Cleatstf',
      precio: '77.97',
    },
    {
      id: 64,
      titulo: ' Nike Phantom Gx Club Fg/Mg ',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/d/dd9564-705-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/NikeGx',
      precio: '77.97',
    },
    {
      id: 65,
      titulo: 'Nike Air Zoom Mercurial Vapor XV Pro FG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1012861_Main_1753314.jpg',
      link: '/Nikexv',
      precio: '77.97',
    },

    {
      id: 66,
      titulo: 'Nike Tiempo Legend X Elite FG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1001601_Main_Thumb_1427867.jpg',
      link: '/NikeLegend',
      precio: '77.97',
    },
    {
      id: 67,
      titulo: 'Nike Tiempo Legend X Elite AG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1016243_Main_1809209.jpg',
      link: '/NikeAG',
      precio: '77.97',
    },
    {
      id: 68,
      titulo: 'Nike Phantom GX II Elite FG',
      contenido:
        'https://images.prodirectsport.com/ProductImages/Main/1012873_Main_1724986.jpg',
      link: '/NikeGx2',
      precio: '77.97',
    },
    {
      id: 69,
      titulo: 'Nike Match Jr. Unisex Gloves',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/f/j/fj4864-011_phslh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/NikeGloves',
      precio: '31.90',
    },

    {
      id: 70,
      titulo: 'Nike Merc Lite Shin Guards - Fa22 Unisex',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/n/dn3611-010-phcfz001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/ShinNike',
      precio: '31.90',
    },

    {
      id: 71,
      titulo: 'Nike Mercurial Lite Unisex Shin Guards',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/n/dn3611-101_phcfz001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/MercurialShin',
      precio: '31.90',
    },

    {
      id: 72,
      titulo: 'Nike Charge Unisex Shin Guards',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/d/x/dx4610-010_phcfz001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/NikeShin',
      precio: '31.90',
    },

    {
      id: 73,
      titulo: 'FC Barcelona home kit season 2023/24',
      contenido:
        'https://fanpass.do/cdn/shop/files/Group3569_800x.png?v=1696455073',
      link: '/Barcelona',
      precio: '51.15',
    },
    {
      id: 74,
      titulo: 'FC Barcelona away kit season 2023/24',
      contenido:
        'https://jerseyloco.com/wp-content/uploads/2023/08/2324-Barcelona-Away-Jersey.jpg',
      link: '/BarcelonaAway',
      precio: '51.15',
    },
    {
      id: 80,
      titulo: 'CHELSEA AWAY SHORTS 2021/22',
      contenido:
        'https://www.soccerbox.com/media/catalog/product/cache/f4b6407e5847ea579fdc5730945961f6/c/h/chelsea-21-22-away-shorts-front_1.jpg',
      link: '/ChelseaShort',
      precio: '29.99',
    },
    {
      id: 81,
      titulo: 'Barcelona Short Home Kit 2023/24',
      contenido:
        'https://images.footballfanatics.com/barcelona/barcelona-nike-home-stadium-shorts-2023-24_ss4_p-13372214+u-2c9sn615epv69h45repq+v-e14ebb232c3c462588f2b55131b2aa78.jpg?_hv=2&w=900',
      link: '/Barcashort',
      precio: '29.99',
    },

    {
      id: 75,
      titulo: 'Liverpool FC Home kit 2023/24',
      contenido:
        'https://stefanssoccer.com/mm5/graphics/00000001/9/AURORA_DX2692-688_PHSFH001-2000.jpg',
      link: '/Liverpool',
      precio: '51.15',
    },
    {
      id: 81,
      titulo: 'England Essentials Crest Sweat Short - Navy - Mens',
      contenido:
        'https://images.footballfanatics.com/england-national-team/england-essentials-crest-sweat-short-navy-mens_ss5_p-200498242+pv-1+u-v1mztsxjmwg0uj5p99uc+v-1jl2pjpjygutp2b7e7tg.jpg?_hv=2&w=900',
      link: '/Englandshort',
      precio: '29.99',
    },
    {
      id: 82,
      titulo: 'Football Socks Unisex',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/z/a/za0004-black.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/SocksFut',
      precio: '29.99',
    },

    {
      id: 83,
      titulo: 'Nike Classic Football Dri-Fit Sock Mens Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/s/x/sx4120-401_phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/SockFit',
      precio: '29.99',
    },
    {
      id: 84,
      titulo: 'Mens Nike Classic Cushioned Team Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/s/x/sx5728-670_phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/NikeCush',
      precio: '29.99',
    },
    {
      id: 85,
      titulo: 'Medias Nike Squad Otc de Hombre',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/s/x/sx6830-011_phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/SockOtc',
      precio: '29.99',
    },

    {
      id: 87,
      titulo: 'Nike Classic Football Dri-Fit Mens Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/s/x/sx4120-402-phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/NikeTights',
      precio: '29.99',
    },
    {
      id: 88,
      titulo: 'Nike Academy Ftbll Df Mens Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/s/x/sx4120-001-phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/Ftbll',
      precio: '29.99',
    },
    {
      id: 89,
      titulo: 'Nike Squad Otc Mens Tights',
      contenido:
        'https://www.sportline.com.gt/media/catalog/product/s/x/sx6830-100_phsfh001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
      link: '/OtcNikesocks',
      precio: '29.99',
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
          Puma{' '}
          <Image
            style={{
              width: '50px',
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxP-0dt8W2kfvb6zeUIgGQrQNs0yF7Tj78A&s"
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
