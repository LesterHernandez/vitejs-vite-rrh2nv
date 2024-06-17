import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Navbar1 from '../../../components/Navbar1';
import Navbar2 from '../../../components/Navbar2';
import BackpackSoccer from '../../../components/soccer/backpacks/BackpackSoccer';
import Navbar3 from '../../../components/Navbar3';
export default function () {
  return (
    <>
      <Header />
      <Navbar1 />
      <Navbar2 /> 
      <Navbar3 /> 
      <BackpackSoccer />
      <Footer />
    </>
  );
}