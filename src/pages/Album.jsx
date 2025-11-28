import { useParams } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";

export default function Album() {

  const { id } = useParams(); // naturaleza, historia, eventos

  // Listado automático de fotos por colección
  const colecciones = {
    taller0: {
      titulo: "Reunion de Socialización 7 de Noviembre",
      portada: "/album/Taller0/portada.jpeg",
      fotos: [
        "/album/Taller0/Imagen1-Taller0.jpeg",
        "/album/Taller0/Imagen2-Taller0.jpeg",
        "/album/Taller0/Imagen3-Taller0.jpeg",
        "/album/Taller0/Imagen4-Taller0.jpeg",
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

    taller1: {
      titulo: "Taller de Conceptualización 1 - 18 de Noviembre",
      portada: "/album/Taller1/portada1.jpeg",
      fotos: [
        "/album/Taller1/image1-taller1.jpeg",
        "/album/Taller1/image2-taller1.jpeg",
        "/album/Taller1/image3-taller1.jpeg",
        "/album/Taller1/image4-taller1.jpeg", 
        "/album/Taller1/image5-taller1.jpeg",
        "/album/Taller1/image6-taller1.jpeg",
        "/album/Taller1/image7-taller1.jpeg",
        "/album/Taller1/image8-taller1.jpeg",
        "/album/Taller1/image9-taller1.jpeg",
        "/album/Taller1/image10-taller1.jpeg",
        "/album/Taller1/image11-taller1.jpeg",
        "/album/Taller1/image12-taller1.jpeg",
        "/album/Taller1/image13-taller1.jpeg",
        "/album/Taller1/image14-taller1.jpeg",
        "/album/Taller1/image15-taller1.jpeg",
        "/album/Taller1/image16-taller1.jpeg",
        "/album/Taller1/image17-taller1.jpeg",
        "/album/Taller1/image18-taller1.jpeg",
        "/album/Taller1/image19-taller1.jpeg",

      ]
    },

    taller2: {
      titulo: "Taller de Conceptualización 2 - 20 de Noviembre",
      portada: "/album/Taller2/portada2.jpeg",
      fotos: [
        "/album/Taller2/image1-taller2.jpeg",
        "/album/Taller2/image2-taller2.jpeg",
        "/album/Taller2/image3-taller2.jpeg",

      ]
    },

    
    taller3: {
      titulo: "Taller Tecnologico - 22 de Noviembre",
      portada: "/album/Taller3/portada3.jpeg",
      fotos: [
        "/album/Taller3/image1-taller3.jpeg",
        "/album/Taller3/image2-taller3.jpeg",
        "/album/Taller3/image3-taller3.jpeg",
        "/album/Taller3/image4-taller3.jpeg",
        "/album/Taller3/image5-taller3.jpeg",
        "/album/Taller3/image6-taller3.jpeg",
        "/album/Taller3/image7-taller3.jpeg",
        "/album/Taller3/image8-taller3.jpeg",
        "/album/Taller3/image9-taller3.jpeg",
        "/album/Taller3/image10-taller3.jpeg"
      ]
    },

    taller4: {
      titulo: "Taller de Conceptualización 3 - 24 de Noviembre",
      portada: "/album/Taller4/portada4.jpeg",
      fotos: [
        "/album/Taller4/image1-taller4.jpeg",
        "/album/Taller4/image2-taller4.jpeg",
        "/album/Taller4/image3-taller4.jpeg",
        "/album/Taller4/image4-taller4.jpeg",
        "/album/Taller4/image5-taller4.jpeg"

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