import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="navbar-left">
          <h2>Observatorio Ambiental La Buitrera</h2>
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
          <h1>Observatorio ambiental La Buitrera (OAB) </h1>

          <p>
            Corregimiento La Buitrera, Cali, Colombia
          </p>

          <Link to="/colecciones">
            <button className="home-button">Ir al álbum de fotos</button>
          </Link>
        </div>

        <img
          src="/image.png"
          className="home-image"
          alt="Mapa del corregimiento"
        />
      </div>
    </>
  );
}