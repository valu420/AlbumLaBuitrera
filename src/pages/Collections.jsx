import { Link } from "react-router-dom";

export default function Collections() {
  const albums = [
    {
      id: "taller0",
      titulo: "Reunión de Socialización - 7 de Noviembre de 2025",
      portada: "/album/Taller0/portada.jpeg"
    },
    {
      id: "taller1",
      titulo: "Taller de Conceptualización 1: Selección de Criterios - 18 de Noviembre de 2025",
      portada: "/album/Taller1/portada1.jpeg"
    },
    {
      id: "taller2",
      titulo: "Taller de Conceptualización 2: Residuos Sólidos - 20 de Noviembre de 2025",
      portada: "/album/Taller2/portada2.jpeg"
    },
     {
      id: "taller3",
      titulo: "Taller Escenario Tecnologico - 22 de Noviembre de 2025",
      portada: "/album/Taller3/portada3.jpeg"
    },
     {
      id: "taller4",
      titulo: "Taller de Conceptualización 3: Aire y Cambio Climático - 24 de Noviembre de 2025",
      portada: "/album/Taller4/portada4.jpeg"
    },
    {
      id: "taller5",
      titulo: "Taller de Conceptualización 4: Cultura Ambiental - 27 de Noviembre de 2025",
      portada: "/album/Taller5/portada5.jpeg"
    },

    {
      id: "taller6",
      titulo: "Taller de Conceptualización 5: Recurso Hídrico - 29 de Noviembre de 2025",
      portada: "/album/Taller6/portada6.jpeg"
    },

     {
      id: "taller7",
      titulo: "Taller de Conceptualización 6: Planificación y Ordenamiento Territorial - 29 de Noviembre de 2025",
      portada: "/album/Taller7/portada7.jpeg"
    },

     {
      id: "taller8",
      titulo: "Taller de Conceptualización 7: Bioeconomía - 02 de Diciembre de 2025",
      portada: "/album/Taller8/portada8.jpeg"
    },

     {
      id: "taller9",
      titulo: "Taller de Conceptualización 8: Biodiversidad - 04 de Diciembre de 2025",
      portada: "/album/Taller9/portada9.jpeg"
    },

    {
      id: "taller10",
      titulo: "Taller de Conceptualización 9: Gobernanza y Justicia Ambiental - 06 de Diciembre de 2025",
      portada: "/album/Taller10/portada10.jpeg"
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
