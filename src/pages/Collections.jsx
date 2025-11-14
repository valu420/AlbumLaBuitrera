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
  );
}