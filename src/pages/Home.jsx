import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">

      <div className="home-text">
        <h1>Observatorio ambiental de la Buitrera</h1>

        <p>
          Corregimiento la Buitrera, Cali, Colombia
        </p>

        <Link to="/colecciones">
          <button className="home-button">Ir al álbum de fotos</button>
        </Link>
      </div>

      <img
        src="/buitrera.png"
        className="home-image"
        alt="Mapa del corregimiento"
      />
    </div>
  );
}