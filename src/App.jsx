import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Argentina from './pages/soccer/jerseys/Argentina.jsx';
import Madrid from './pages/soccer/jerseys/Madrid.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Soccer from './pages/soccer/Soccer.jsx';
import Basketball from './pages/basket/Basketball.jsx';
import Carrito from './pages/Carrito.jsx';
import Favoritos from './pages/Favoritos.jsx';
import BallsSoccer from './pages/soccer/balls/BallsSoccer.jsx';
import BallsBasketball from './pages/basket/balls/BallsBasketball.jsx';
import Equipment from './pages/soccer/equipment/Equipment.jsx';
import BackpackS from './pages/soccer/backpacks/BackpackS.jsx';
import BackpackB from './pages/basket/backpacks/BackpackB.jsx';
import CleatsS from './pages/soccer/cleats/CleatsS.jsx';
import CleatsB from './pages/basket/cleats/CleatsB.jsx';
import JerseyB from './pages/basket/jerseys/JerseyB.jsx';
import JerseyS from './pages/soccer/jerseys/Jerseys.jsx';
import ShortS from './pages/soccer/shorts/ShortS.jsx';
import ShortB from './pages/basket/shorts/ShortsB.jsx';
import SocksS from './pages/soccer/socks/SocksS.jsx';
import SocksB from './pages/basket/socks/SocksB.jsx';
import Caps from './pages/basket/caps/Caps.jsx';
import Compra from './pages/Compra.jsx';
import Cleatstf from './pages/soccer/cleats/Cleatstf.jsx';
import NikeGx from './pages/soccer/cleats/NikeGx.jsx';
import NikeGx2 from './pages/soccer/cleats/NikeGx2.jsx';
import Nikexv from './pages/soccer/cleats/Nikexv.jsx';
import NikeLegend from './pages/soccer/cleats/NikeLegend.jsx';
import AdidasF50 from './pages/soccer/cleats/AdidasF50.jsx';
import NikeAG from './pages/soccer/cleats/NikeAG.jsx';
import AdidasPure from './pages/soccer/cleats/AdidasPure.jsx';
import AdidasIn from './pages/soccer/cleats/AdidasIn.jsx';
import Barcelona from './pages/soccer/jerseys/Barcelona.jsx';
import BarcelonaAway from './pages/soccer/jerseys/BarcelonaAway.jsx';
import MadridHome from './pages/soccer/jerseys/MadridHome.jsx';
import Germany from './pages/soccer/jerseys/Germany.jsx';
import Bayern from './pages/soccer/jerseys/Bayern.jsx';
import City from './pages/soccer/jerseys/City.jsx';
import Liverpool from './pages/soccer/jerseys/Liverpool.jsx';
import ColombiaBall from './pages/soccer/balls/ColombiaBall.jsx';
import GuateBall from './pages/soccer/balls/GuateBall.jsx';
import ChampionsBall from './pages/soccer/balls/ChampionsBall.jsx';
import MessiBall from './pages/soccer/balls/MessiBall.jsx';
import TangoBall from './pages/soccer/balls/TangoBall.jsx';
import AcademyBall from './pages/soccer/balls/AcademyBall.jsx';
import PumaMS from './pages/soccer/balls/PumaMS.jsx';
import PitchFa from './pages/soccer/balls/PitchFa.jsx';
import Oceaunz from './pages/soccer/balls/Oceaunz.jsx';
import DFBShort from './pages/soccer/shorts/DFBShort.jsx';
import Manchestershort from './pages/soccer/shorts/Manchestershort.jsx';
import Belgicashort from './pages/soccer/shorts/Belgicashort.jsx';
import HomeShort from './pages/soccer/shorts/HomeShort.jsx';
import Englandshort from './pages/soccer/shorts/Englandshort.jsx';
import Barcashort from './pages/soccer/shorts/Barcashort.jsx';
import MadridShort from './pages/soccer/shorts/MadridShort.jsx';
import Juventusshort from './pages/soccer/shorts/Juventusshort.jsx';
import ChelseaShort from './pages/soccer/shorts/ChelseaShort.jsx';
import UmbroBackpack from './pages/soccer/backpacks/UmbroBackpack.jsx';
import MadridBackpack from './pages/soccer/backpacks/MadridBackpack.jsx';
import LwcBackpack from './pages/soccer/backpacks/LwcBackpack.jsx';
import BarcaBackpack from './pages/soccer/backpacks/BarcaBackpack.jsx';
import EqUmbroBack from './pages/soccer/backpacks/EqUmbroBack.jsx';
import HfBackpack from './pages/soccer/backpacks/HfBackpack.jsx';
import GuatemalaBackpack from './pages/soccer/backpacks/GuatemalaBackpack.jsx';
import MunicipalBackpack from './pages/soccer/backpacks/MunicipalBackpack.jsx';
import SocksFut from './pages/soccer/socks/SocksFut.jsx';
import SockAdi from './pages/soccer/socks/SockAdi.jsx';
import SockFit from './pages/soccer/socks/SockFit.jsx';
import NikeCush from './pages/soccer/socks/NikeCush.jsx';
import SockOtc from './pages/soccer/socks/SockOtc.jsx';
import Tights from './pages/soccer/socks/Tights.jsx';
import NikeTights from './pages/soccer/socks/NikeTights.jsx';
import Ftbll from './pages/soccer/socks/Ftbll.jsx';
import OtcNikesocks from './pages/soccer/socks/OtcNikesocks.jsx';
import GlovesPred from './pages/soccer/equipment/GlovesPred.jsx';
import PredatorGloves from './pages/soccer/equipment/PredatorGloves.jsx';
import GlovesUltra from './pages/soccer/equipment/GlovesUltra.jsx';
import NikeGloves from './pages/soccer/equipment/NikeGloves.jsx';
import PumaGloves from './pages/soccer/equipment/PumaGloves.jsx';
import RcGloves from './pages/soccer/equipment/RcGloves.jsx';
import ShinNike from './pages/soccer/equipment/ShinNike.jsx';
import AttacantoShin from './pages/soccer/equipment/AttacantoShin.jsx';
import MercurialShin from './pages/soccer/equipment/MercurialShin.jsx';
import KingShin from './pages/soccer/equipment/KingShin.jsx';
import NikeShin from './pages/soccer/equipment/NikeShin.jsx';
import MessiShin from './pages/soccer/equipment/MessiShin.jsx';
import Hoops from './pages/basket/backpacks/Hoops.jsx';
import Hoops2 from './pages/basket/backpacks/Hoops2.jsx';
import Hoops3 from './pages/basket/backpacks/Hoops3.jsx';
import Hoops4 from './pages/basket/backpacks/Hoops4.jsx';
import Hoops5 from './pages/basket/backpacks/Hoops5.jsx';
import Hoops6 from './pages/basket/backpacks/Hoops6.jsx';
import JordanAir1 from './pages/basket/backpacks/JordanAir1.jsx';
import JordanAir2 from './pages/basket/backpacks/JordanAir2.jsx';
import JordanAir3 from './pages/basket/backpacks/JordanAir3.jsx';
import SwooshBall from './pages/basket/balls/SwooshBall.jsx';
import PlaygroundBall from './pages/basket/balls/PlaygroundBall.jsx';
import EliteBall from './pages/basket/balls/EliteBall.jsx';
import AllCourt from './pages/basket/balls/AllCourt.jsx';
import PBall from './pages/basket/balls/PBall.jsx';
import AllCourt3 from './pages/basket/balls/AllCourt3.jsx';
import Deflate from './pages/basket/balls/Deflate.jsx';
import Stripes from './pages/basket/balls/Stripes.jsx';
import JordanCap from './pages/basket/caps/JordanCap.jsx';
import Risecap from './pages/basket/caps/Risecap.jsx';
import Clubcap from './pages/basket/caps/Clubcap.jsx';
import YellowCap from './pages/basket/caps/YellowCap.jsx';
import Riseblue from './pages/basket/caps/Riseblue.jsx';
import Flinch from './pages/basket/caps/Flinch.jsx';
import Fly from './pages/basket/caps/Fly.jsx';
import Curved from './pages/basket/caps/Curved.jsx';
import TuneSquad from './pages/basket/caps/TuneSquad.jsx';
import Tatum from './pages/basket/cleats/Tatum.jsx';
import Luka from './pages/basket/cleats/Luka.jsx';
import Sunrise from './pages/basket/cleats/Sunrise.jsx';
import Book1 from './pages/basket/cleats/Book1.jsx';
import LebronXXI from './pages/basket/cleats/LebronXXI.jsx';
import JA1 from './pages/basket/cleats/JA1.jsx';
import Nxxtgen from './pages/basket/cleats/Nxxtgen.jsx';
import Giannis from './pages/basket/cleats/Giannis.jsx';
import GTjump from './pages/basket/cleats/GTjump.jsx';
import Angeles from './pages/basket/jerseys/Angeles.jsx';
import Knicks from './pages/basket/jerseys/Knicks.jsx';
import Spurs from './pages/basket/jerseys/Spurs.jsx';
import Celtics from './pages/basket/jerseys/Celtics.jsx';
import Dallas from './pages/basket/jerseys/Dallas.jsx';
import Golden from './pages/basket/jerseys/Golden.jsx';
import Nuggets from './pages/basket/jerseys/Nuggets.jsx';
import Larry from './pages/basket/jerseys/Larry.jsx';
import Lakers from './pages/basket/jerseys/Lakers.jsx';
import KD from './pages/basket/shorts/KD.jsx';
import NikeDNA from './pages/basket/shorts/NikeDNA.jsx';
import ShortJordan from './pages/basket/shorts/ShortJordan.jsx';
import Sabrina from './pages/basket/shorts/Sabrina.jsx';
import NikeIcon from './pages/basket/shorts/NikeIcon.jsx';
import NikeDNA1 from './pages/basket/shorts/NikeDNA1.jsx';
import DriFit from './pages/basket/shorts/DriFit.jsx';
import KevinDurant from './pages/basket/shorts/KevinDurant.jsx';
import Crossover from './pages/basket/shorts/Crossover.jsx';
import JordanTights from './pages/basket/socks/JordanTights.jsx';
import UniTights from './pages/basket/socks/UniTights.jsx';
import Crew3 from './pages/basket/socks/Crew3.jsx';
import Cushioned from './pages/basket/socks/Cushioned.jsx';
import EverydayTights from './pages/basket/socks/EverydayTights.jsx';
import Essentials3 from './pages/basket/socks/Essentials3.jsx';
import NoShow from './pages/basket/socks/NoShow.jsx';
import Qtr from './pages/basket/socks/Qtr.jsx';
import Snkr from './pages/basket/socks/Snkr.jsx';
import Adidas from './pages/Adidas.jsx';
import Puma from './pages/Puma.jsx';
import Nike from './pages/Nike.jsx';
import Umbro from './pages/Umbro.jsx';
import { CartProvider } from './context/CartContext'; // Importamos CartProvider para ir guardando informacion de los productos agregados al carrito

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Argentina" element={<Argentina />} />
            <Route path="/Madrid" element={<Madrid />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/soccer" element={<Soccer />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/Favoritos" element={<Favoritos />} />
            <Route path="/BallsSoccer" element={<BallsSoccer />} />
            <Route path="/BallsBasketball" element={<BallsBasketball />} />
            <Route path="/Equipment" element={<Equipment />} />
            <Route path="/BackpackS" element={<BackpackS />} />
            <Route path="/BackpackBasket" element={<BackpackB />} />
            <Route path="/CleatsSoccer" element={<CleatsS />} />
            <Route path="/CleatsBasketball" element={<CleatsB />} />
            <Route path="/JerseySoccer" element={<JerseyS />} />
            <Route path="/JerseyBasket" element={<JerseyB />} />
            <Route path="/ShortsSoccer" element={<ShortS />} />
            <Route path="/ShortsBasket" element={<ShortB />} />
            <Route path="/SocksSoccer" element={<SocksS />} />
            <Route path="/SocksBasket" element={<SocksB />} />
            <Route path="/Caps" element={<Caps />} />
            <Route path="/compra" element={<Compra />} />
            <Route path="/Cleatstf" element={<Cleatstf />} />
            <Route path="/NikeGx" element={<NikeGx />} />
            <Route path="/Nikexv" element={<Nikexv />} />
            <Route path="/AdidasF50" element={<AdidasF50 />} />
            <Route path="/NikeLegend" element={<NikeLegend />} />
            <Route path="/NikeAG" element={<NikeAG />} />
            <Route path="/NikeGx2" element={<NikeGx2 />} />
            <Route path="/AdidasPure" element={<AdidasPure />} />
            <Route path="/AdidasIn" element={<AdidasIn />} />
            <Route path="/Barcelona" element={<Barcelona />} />
            <Route path="/Barcelona" element={<Barcelona />} />
            <Route path="/BarcelonaAway" element={<BarcelonaAway />} />
            <Route path="/MadridHome" element={<MadridHome />} />
            <Route path="/Germany" element={<Germany />} />
            <Route path="/Bayern" element={<Bayern />} />
            <Route path="/City" element={<City />} />
            <Route path="/Liverpool" element={<Liverpool />} />
            <Route path="/ColombiaBall" element={<ColombiaBall />} />
            <Route path="/GuateBall" element={<GuateBall />} />
            <Route path="/ChampionsBall" element={<ChampionsBall />} />
            <Route path="/MessiBall" element={<MessiBall />} />
            <Route path="/TangoBall" element={<TangoBall />} />
            <Route path="/AcademyBall" element={<AcademyBall />} />
            <Route path="/PumaMS" element={<PumaMS />} />
            <Route path="/PitchFa" element={<PitchFa />} />
            <Route path="/Oceaunz" element={<Oceaunz />} />
            <Route path="/DFBShort" element={<DFBShort />} />
            <Route path="/Manchestershort" element={<Manchestershort />} />
            <Route path="/Belgicashort" element={<Belgicashort />} />
            <Route path="/HomeShort" element={<HomeShort />} />
            <Route path="/Englandshort" element={<Englandshort />} />
            <Route path="/Barcashort" element={<Barcashort />} />
            <Route path="/MadridShort" element={<MadridShort />} />
            <Route path="/Juventusshort" element={<Juventusshort />} />
            <Route path="/ChelseaShort" element={<ChelseaShort />} />
            <Route path="/UmbroBackpack" element={<UmbroBackpack />} />
            <Route path="/MadridBackpack" element={<MadridBackpack />} />
            <Route path="/LwcBackpack" element={<LwcBackpack />} />
            <Route path="/BarcaBackpack" element={<BarcaBackpack />} />
            <Route path="/EqUmbroBack" element={<EqUmbroBack />} />
            <Route path="/HfBackpack" element={<HfBackpack />} />
            <Route path="/GuatemalaBackpack" element={<GuatemalaBackpack />} />
            <Route path="/MunicipalBackpack" element={<MunicipalBackpack />} />
            <Route path="/SocksFut" element={<SocksFut />} />
            <Route path="/SockAdi" element={<SockAdi />} />
            <Route path="/SockFit" element={<SockFit />} />
            <Route path="/NikeCush" element={<NikeCush />} />
            <Route path="/SockOtc" element={<SockOtc />} />
            <Route path="/Tights" element={<Tights />} />
            <Route path="/NikeTights" element={<NikeTights />} />
            <Route path="/Ftbll" element={<Ftbll />} />
            <Route path="/OtcNikesocks" element={<OtcNikesocks />} />
            <Route path="/GlovesPred" element={<GlovesPred />} />
            <Route path="/PredatorGloves" element={<PredatorGloves />} />
            <Route path="/GlovesUltra" element={<GlovesUltra />} />
            <Route path="/NikeGloves" element={<NikeGloves />} />
            <Route path="/PumaGloves" element={<PumaGloves />} />
            <Route path="/RcGloves" element={<RcGloves />} />
            <Route path="/ShinNike" element={<ShinNike />} />
            <Route path="/AttacantoShin" element={<AttacantoShin />} />
            <Route path="/MercurialShin" element={<MercurialShin />} />
            <Route path="/KingShin" element={<KingShin />} />
            <Route path="/NikeShin" element={<NikeShin />} />
            <Route path="/MessiShin" element={<MessiShin />} />
            <Route path="/Hoops" element={<Hoops />} />
            <Route path="/Hoops2" element={<Hoops2 />} />
            <Route path="/Hoops3" element={<Hoops3 />} />
            <Route path="/Hoops4" element={<Hoops4 />} />
            <Route path="/Hoops5" element={<Hoops5 />} />
            <Route path="/Hoops6" element={<Hoops6 />} />
            <Route path="/JordanAir1" element={<JordanAir1 />} />
            <Route path="/JordanAir2" element={<JordanAir2 />} />
            <Route path="/JordanAir3" element={<JordanAir3 />} />
            <Route path="/SwooshBall" element={<SwooshBall />} />
            <Route path="/PlaygroundBall" element={<PlaygroundBall />} />
            <Route path="/EliteBall" element={<EliteBall />} />
            <Route path="/AllCourt" element={<AllCourt />} />
            <Route path="/PBall" element={<PBall />} />
            <Route path="/AllCourt3" element={<AllCourt3 />} />
            <Route path="/Deflate" element={<Deflate />} />
            <Route path="/Stripes" element={<Stripes />} />
            <Route path="/JordanCap" element={<JordanCap />} />
            <Route path="/Risecap" element={<Risecap />} />
            <Route path="/Clubcap" element={<Clubcap />} />
            <Route path="/YellowCap" element={<YellowCap />} />
            <Route path="/Riseblue" element={<Riseblue />} />
            <Route path="/Flinch" element={<Flinch />} />
            <Route path="/Fly" element={<Fly />} />
            <Route path="/Curved" element={<Curved />} />
            <Route path="/TuneSquad" element={<TuneSquad />} />
            <Route path="/Tatum" element={<Tatum />} />
            <Route path="/Luka" element={<Luka />} />
            <Route path="/Sunrise" element={<Sunrise />} />
            <Route path="/Book1" element={<Book1 />} />
            <Route path="/LebronXXI" element={<LebronXXI />} />
            <Route path="/JA1" element={<JA1 />} />
            <Route path="/Nxxtgen" element={<Nxxtgen />} />
            <Route path="/Giannis" element={<Giannis />} />
            <Route path="/GTjump" element={<GTjump />} />
            <Route path="/Angeles" element={<Angeles />} />
            <Route path="/Knicks" element={<Knicks />} />
            <Route path="/Spurs" element={<Spurs />} />
            <Route path="/Celtics" element={<Celtics />} />
            <Route path="/Dallas" element={<Dallas />} />
            <Route path="/Golden" element={<Golden />} />
            <Route path="/Nuggets" element={<Nuggets />} />
            <Route path="/Larry" element={<Larry />} />
            <Route path="/Lakers" element={<Lakers />} />
            <Route path="/KD" element={<KD />} />
            <Route path="/NikeDNA" element={<NikeDNA />} />
            <Route path="/ShortJordan" element={<ShortJordan />} />
            <Route path="/Sabrina" element={<Sabrina />} />
            <Route path="/NikeIcon" element={<NikeIcon />} />
            <Route path="/NikeDNA1" element={<NikeDNA1 />} />
            <Route path="/DriFit" element={<DriFit />} />
            <Route path="/KevinDurant" element={<KevinDurant />} />
            <Route path="/Crossover" element={<Crossover />} />
            <Route path="/JordanTights" element={<JordanTights />} />
            <Route path="/UniTights" element={<UniTights />} />
            <Route path="/Crew3" element={<Crew3 />} />
            <Route path="/Cushioned" element={<Cushioned />} />
            <Route path="/EverydayTights" element={<EverydayTights />} />
            <Route path="/Essentials3" element={<Essentials3 />} />
            <Route path="/NoShow" element={<NoShow />} />
            <Route path="/Qtr" element={<Qtr />} />
            <Route path="/Snkr" element={<Snkr />} />
            <Route path="/Adidas" element={<Adidas />} />
            <Route path="/Nike" element={<Nike />} />
            <Route path="/Puma" element={<Puma />} />
            <Route path="/Umbro" element={<Umbro />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
