import { Link } from "react-router-dom";

export default function Collections() {
  const albums = [
    {
      id: "taller0",
      titulo: "Taller 0",
      portada: "/album/Taller0/portada.jpeg"
    },
  ];

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


      <div className="album-container">
        <h1 className="album-title">Colecciones Fotográficas</h1>

        <div className="collections-grid">
          {albums.map(album => (
            <Link
              key={album.id}
              to={`/album/${album.id}`}
              className="collection-card"
            >
              <img src={album.portada} alt="" className="collection-cover" />
              <h3>{album.titulo}</h3>
            </Link>
          ))}
        </div>
      </div>

    </>
  );
}
