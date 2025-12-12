import { Link } from "react-router-dom";

export default function Collections() {
  const albums = [
    {
      id: "taller0",
      titulo: "Reunión de Socialización - 7 de noviembre de 2025",
      portada: "/album/Taller0/portada.jpeg"
    },
    {
      id: "taller1",
      titulo: "Selección de Criterios - 18 de noviembre de 2025",
      portada: "/album/Taller1/portada1.png"
    },
    {
      id: "taller2",
      titulo: "Residuos Sólidos - 20 de noviembre de 2025",
      portada: "/album/Taller2/portada2.png"
    },
     {
      id: "taller3",
      titulo: "Escenario Tecnológico - 22 de noviembre de 2025",
      portada: "/album/Taller3/portada3.png"
    },
     {
      id: "taller4",
      titulo: "Aire, Cambio Climático y Ruido - 24 de noviembre de 2025",
      portada: "/album/Taller4/portada4.png"
    },
    {
      id: "taller5",
      titulo: "Cultura Ambiental - 27 de noviembre de 2025",
      portada: "/album/Taller5/portada5.png"
    },

    {
      id: "taller6",
      titulo: "Recurso Hídrico - 29 de noviembre de 2025",
      portada: "/album/Taller6/portada6.png"
    },

     {
      id: "taller7",
      titulo: "Planificación y Ordenamiento Territorial - 29 de noviembre de 2025",
      portada: "/album/Taller7/portada7.png"
    },

     {
      id: "taller8",
      titulo: "Bioeconomía - 02 de diciembre de 2025",
      portada: "/album/Taller8/portada8.png"
    },

     {
      id: "taller9",
      titulo: " Biodiversidad - 04 de diciembre de 2025",
      portada: "/album/Taller9/portada9.png"
    },

    {
      id: "taller10",
      titulo: "Gobernanza y Justicia Ambiental - 06 de diciembre de 2025",
      portada: "/album/Taller10/portada10.png"
    },

     {
      id: "taller11",
      titulo: "Socialización de Resultados",
      portada: "/image.png"
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
