import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import ContactForm from '../components/ContactForm';
export default function () {
  return (
    <>
      <Header />
      <Navbar1 />
      <Navbar2 />
      <ContactForm />
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
          by Lester Hernandez, José España | SportGalileo - Sports Equipment in
          Guatemala - All rights reserved
        </p>
      </footer>
    </>
  );
}
