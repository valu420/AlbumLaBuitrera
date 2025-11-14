import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Album from "./pages/Album";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colecciones" element={<Collections />} />
      <Route path="/album/:id" element={<Album />} />
    </Routes>
  );
}

export default App;
