import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Work from "./components/work/Work";
import Kontak from "./components/kontak/Kontak";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Profil from "./components/profil/Profil";


function App() {
  const [menuopen,setMenuOpen] = useState(true)
  return (
    <div className="app">
     <Topbar menuopen={menuopen} setMenuOpen={setMenuOpen}/>
     <Menu menuopen={menuopen} setMenuOpen={setMenuOpen} />
     <div className="sections">
       <Intro />
       <Portofolio />
       <Work />
       <Profil />
       <Kontak />
     </div>
    </div>
  );
}

export default App;
