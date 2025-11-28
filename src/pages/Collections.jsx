import { Link } from "react-router-dom";

export default function Collections() {
  const albums = [
    {
      id: "taller0",
      titulo: "Reunion de Socialización 7 de Noviembre",
      portada: "/album/Taller0/portada.jpeg"
    },
    {
      id: "taller1",
      titulo: "Taller de Conceptualización 1 (Componente selección de criterios) - 18 de Noviembre",
      portada: "/album/Taller1/portada1.jpeg"
    },
    {
      id: "taller2",
      titulo: "Taller de Conceptualización 2 (Componente Residuos solidos) - 20 de Noviembre",
      portada: "/album/Taller2/portada2.jpeg"
    },
     {
      id: "taller3",
      titulo: "Taller Tecnologico - 22 de Noviembre",
      portada: "/album/Taller3/portada3.jpeg"
    },
     {
      id: "taller4",
      titulo: "Taller de Conceptualización 3 (Componente aire y cambio climatico) - 24 de Noviembre",
      portada: "/album/Taller4/portada4.jpeg"
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
