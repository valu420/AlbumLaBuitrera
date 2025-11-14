import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Album from "./pages/Album";
import Boletines from "./pages/Boletines";
import BoletinDetalle from "./pages/BoletinDetalle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colecciones" element={<Collections />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/boletines" element={<Boletines />} />
      <Route path="/boletin/:id" element={<BoletinDetalle />} />
      
    
    </Routes>
  );
}

export default App;
