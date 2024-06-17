import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';  
import Header from '../components/Header';  
import Navbar1 from '../components/Navbar1';  
import Navbar2 from '../components/Navbar2';  
import Image from 'react-bootstrap/Image';  
import { Table, Button } from 'react-bootstrap';  

const Favoritos = () => {
  const location = useLocation(); // Hook para obtener la ubicación actual y su estado.
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages'); // Obtener mensajes guardados en localStorage.
    return savedMessages ? JSON.parse(savedMessages) : []; // Si hay mensajes guardados, parsearlos. Si no, iniciar con un array vacío.
  });

  useEffect(() => {
    if (location.state?.messages) { // Verificar si hay mensajes en el estado de la ubicación.
      const newMessages = location.state.messages; // Obtener nuevos mensajes del estado de la ubicación.
      const updatedMessages = Array.from(
        new Set([...messages, ...newMessages].map(JSON.stringify)) // Crear un conjunto para eliminar duplicados.
      ).map(JSON.parse); // Convertir de nuevo a objetos.
      setMessages(updatedMessages); // Actualizar el estado con los mensajes únicos.
      localStorage.setItem('messages', JSON.stringify(updatedMessages)); // Guardar los mensajes actualizados en localStorage.
    }
  }, [location.state?.messages]); // Ejecutar este efecto cuando cambien los mensajes en el estado de la ubicación.

  const deleteMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index); // Filtrar el mensaje a eliminar por su índice.
    setMessages(updatedMessages); // Actualizar el estado con los mensajes filtrados.
    localStorage.setItem('messages', JSON.stringify(updatedMessages)); // Guardar los mensajes actualizados en localStorage.
  };

  return (
    <div>
      <Header /> {/* Renderizar el componente Header */}
      <Navbar1 /> {/* Renderizar el primer componente de la barra de navegación */}
      <Navbar2 /> {/* Renderizar el segundo componente de la barra de navegación */}
      <div style={{ padding: '30px' }}>
        <h1>Favorites Section</h1>
        <Table striped bordered hover> {/* Tabla para mostrar los mensajes */}
          <thead>
            <tr>
              <th>Name of product</th>
              <th>Image</th>
              <th>Address to page</th>
              <th>Remove from favorites</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => ( // Iterar sobre los mensajes para mostrarlos en la tabla.
              <tr key={index}>
                <td>{msg.message}</td>
                <td>
                  <Image style={{ width: '50px' }} src={msg.imageLink} /> {/* Mostrar imagen del producto */}
                </td>
                <td>
                  <a className="btn btn-primary" href={msg.pageLink}> {/* Enlace a la página del producto */}
                    Page
                  </a>
                </td>
                <td>
                  <Button onClick={() => deleteMessage(index)} variant="danger"> {/* Botón para eliminar el mensaje */}
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <footer
        style={{
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '10px 0',
          position: 'fixed',
          width: '100%',
          bottom: 0,
        }}
      >
        <p style={{ fontSize: '14px', margin: 0 }}>
          by Lester Hernandez, José España | SportGalileo - Sports Equipment in Guatemala - All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Favoritos; // Exportar el componente Favoritos.
