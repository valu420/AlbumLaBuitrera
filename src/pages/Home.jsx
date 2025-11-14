import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="navbar-left">
          <h2>Observatorio Ambiental</h2>
        </div>

        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/colecciones">Colecciones</Link></li>
          <li><Link to="/boletines">Boletines</Link></li>
        </ul>

      </nav>
      {/* FIN NAVBAR */}


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
    </>
  );
}