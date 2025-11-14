import { useParams } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";

export default function Album() {

  const { id } = useParams(); // naturaleza, historia, eventos

  // Listado automático de fotos por colección
  const colecciones = {
    taller0: {
      titulo: "Registro fotografico Taller 0",
      portada: "/album/Taller0/portada.jpeg",
      fotos: [
        "/album/Taller0/Imagen1-Taller0.jpeg",
        "/album/Taller0/Imagen2-Taller0.jpeg",
        "/album/Taller0/Imagen3-Taller0.jpeg",
        "/album/Taller0/Imagen5-Taller0.jpeg",
        "/album/Taller0/Imagen6-Taller0.jpeg",
        "/album/Taller0/Imagen7-Taller0.jpeg",
        "/album/Taller0/Imagen8-Taller0.jpeg",
        "/album/Taller0/Imagen9-Taller0.jpeg",
        "/album/Taller0/Imagen10-Taller0.jpeg",
        "/album/Taller0/Imagen11-Taller0.jpeg",
        "/album/Taller0/Imagen12-Taller0.jpeg",
        "/album/Taller0/Imagen13-Taller0.jpeg",
        "/album/Taller0/Imagen14-Taller0.jpeg",
        "/album/Taller0/Imagen15-Taller0.jpeg",
        "/album/Taller0/Imagen16-Taller0.jpeg"

      ]
    },


  };

 const album = colecciones[id];

  return (
    <div className="album-container">
      <h1 className="album-title">{album.titulo}</h1>

      <div className="book-wrapper">
        <HTMLFlipBook
          width={600}     // Ancho horizontal
          height={400}    // Altura del libro
          minWidth={450}
          maxWidth={900}
          showCover={true}
          drawShadow={true}
          usePortrait={false}   // Importante para modo horizontal
          className="flip-book"
        >
          {/* Portada con imagen horizontal */}
          <div className="page">
            <img src={album.portada} className="page-img" />
          </div>

          {/* Páginas del álbum */}
          {album.fotos.map((src, i) => (
            <div className="page" key={i}>
              <img src={src} className="page-img" />
            </div>
          ))}

          {/* Contraportada */}
          <div className="page cover-page">
            Fin del Álbum
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}