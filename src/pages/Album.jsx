import { useParams } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import { useState } from "react";

export default function Album() {

  const { id } = useParams(); // naturaleza, historia, eventos

  // Listado automático de fotos por colección
  const colecciones = {
    taller0: {
      titulo: "Reunión de Socialización 7 de noviembre de 2025",
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
      titulo: "Selección de Criterios - 18 de noviembre de 2025",
      portada: "/album/Taller1/portada1.png",
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
      titulo: "Residuos Sólidos - 20 de noviembre de 2025",
      portada: "/album/Taller2/portada2.png",
      fotos: [
        "/album/Taller2/image1-taller2.jpeg",
        "/album/Taller2/image2-taller2.jpeg",
        "/album/Taller2/image3-taller2.jpeg",
        "/album/Taller2/image4-taller2.jpeg",
        "/album/Taller2/image5-taller2.jpeg",
        "/album/Taller2/image6-taller2.jpeg",
        "/album/Taller2/image7-taller2.jpeg",
        "/album/Taller2/image10-taller2.jpeg",
        "/album/Taller2/image11-taller2.jpeg",
        "/album/Taller2/image12-taller2.jpeg",
        "/album/Taller2/image13-taller2.jpeg",
        "/album/Taller2/image14-taller2.jpeg",
        "/album/Taller2/image15-taller2.jpeg",
        "/album/Taller2/image16-taller2.jpeg",
        "/album/Taller2/nube-taller2.png",

      ]
    },

    
    taller3: {
      titulo: "Escenario Tecnológico - 22 de noviembre de 2025",
      portada: "/album/Taller3/portada3.png",
      fotos: [
        "/album/Taller3/image1-taller3.jpeg",
        "/album/Taller3/image2-taller3.jpeg",
        "/album/Taller3/image3-taller3.jpeg",
        "/album/Taller3/image4-taller3.jpeg",
        "/album/Taller3/image5-taller3.jpeg",
        "/album/Taller3/image-(2).png",
        "/album/Taller3/image6-taller3.jpeg",
        "/album/Taller3/image7-taller3.jpeg",
        "/album/Taller3/imagetec2.png",
        "/album/Taller3/image9-taller3.jpeg",
        "/album/Taller3/image10-taller3.jpeg",
        "/album/Taller3/nube-taller3.png",
      ]
    },

    taller4: {
      titulo: "Aire, Cambio Climático y Ruido - 24 de noviembre de 2025",
      portada: "/album/Taller4/portada4.png",
      fotos: [
        "/album/Taller4/image1-taller4.jpeg",
        "/album/Taller4/image2-taller4.jpeg",
        "/album/Taller4/image3-taller4.jpeg",
        "/album/Taller4/image8-taller4.png",
        "/album/Taller4/image4-taller4.jpeg",
        "/album/Taller4/image5-taller4.jpeg",
        "/album/Taller4/image6-taller4.jpeg",
        "/album/Taller4/image7-taller4.png",
        "/album/Taller4/nube-taller4.png",
      ]
    },

      taller5: {
      titulo: "Cultura Ambiental - 27 de noviembre de 2025",
      portada: "/album/Taller5/portada5.png",
      fotos: [
        "/album/Taller5/image1-taller5.jpeg",
        "/album/Taller5/image2-taller5.jpeg",
        "/album/Taller5/image3-taller5.jpeg",
        "/album/Taller5/image3.png",
        "/album/Taller5/image5.png",
        "/album/Taller5/nube-taller5.png",

        
      ]
    },

      taller6: {
      titulo: "Recurso Hídrico - 29 de noviembre de 2025",
      portada: "/album/Taller6/portada6.png",
      fotos: [
        "/album/Taller6/image1-taller6.jpeg",
        "/album/Taller6/image2-taller6.jpeg",
        "/album/Taller6/image3-taller6.jpeg",
        "/album/Taller6/image4-taller6.jpeg",
        "/album/Taller6/image5-taller6.jpeg",
        "/album/Taller6/image6-taller6.jpeg",
        "/album/Taller6/image7-taller6.jpeg",
        "/album/Taller6/image8-taller6.jpeg",
        "/album/Taller6/image9-taller6.jpeg",
        "/album/Taller6/image10-taller6.jpeg",
        "/album/Taller6/image12-taller6.jpeg",
        "/album/Taller6/image13-taller6.jpeg",
        "/album/Taller6/nube-taller6.png",
          
      ]
    },

      taller7: {
      titulo: "Planificación y Ordenamiento Territorial - 29 de noviembre de 2025",
      portada: "/album/Taller7/portada7.png",
      fotos: [
  
        "/album/Taller7/image1-taller7.jpeg",
        "/album/Taller7/image2-taller7.jpeg",
        "/album/Taller7/Amenazas-y-riesgos.jpeg",
        "/album/Taller7/Equipamientos-y-espacios-públicos.jpeg",
        "/album/Taller7/image3-taller7.jpeg",
        "/album/Taller7/image5.jpeg",
        "/album/Taller7/image4-taller7.jpeg",
        "/album/Taller7/image6-taller7.jpeg",
        "/album/Taller7/Cartografia.jpeg",
        "/album/Taller7/image7-taller7.jpeg",
        "/album/Taller7/image8-taller7.jpeg",
        "/album/Taller7/image10-taller7.jpeg",
        "/album/Taller7/image6.jpeg",
        "/album/Taller7/image11-taller7.jpeg",
        "/album/Taller7/image12-taller7.jpeg",
        "/album/Taller7/image13-taller7.jpeg",
        "/album/Taller7/image14-taller7.jpeg",
        "/album/Taller7/image15-taller7.jpeg",
        "/album/Taller7/nube-taller7.png",

      ]
    },

    taller8: {
      titulo: "Bioeconomía - 02 de diciembre de 2025",
      portada: "/album/Taller8/portada8.png",
      fotos: [
        "/album/Taller8/image1-taller8.jpeg",
        "/album/Taller8/image2-taller8.jpeg",
        "/album/Taller8/image5-taller8.jpeg",
        "/album/Taller8/image6-taller8.jpeg",
        "/album/Taller8/image7-taller8.jpeg",
        "/album/Taller8/image8-taller8.jpeg",
        "/album/Taller8/image9-taller8.jpeg",
        "/album/Taller8/image10-taller8.jpeg",
        "/album/Taller8/image1.png",
        "/album/Taller8/image11-taller8.jpeg",
        "/album/Taller8/image12-taller8.jpeg",
        "/album/Taller8/image13-taller8.jpeg",
        "/album/Taller8/image.png",
        "/album/Taller8/nube-taller8.png",
       
      ]
    },

    taller9: {
      titulo: "Biodiversidad - 04 de diciembre de 2025",
      portada: "/album/Taller9/portada9.png",
      fotos: [
        "/album/Taller9/image1-taller9.jpeg",
        "/album/Taller9/image1.png",
        "/album/Taller9/image2-taller9.jpeg",
        "/album/Taller9/image3-taller9.png",
        "/album/Taller9/image.png",
        "/album/Taller9/nube-taller9.png",
       
      ]
    },

    taller10: {
      titulo: "Gobernanza y Justicia Ambiental - 06 de diciembre de 2025",
      portada: "/album/Taller10/portada10.png",
      fotos: [
        "/album/Taller10/image1-taller10.jpeg",
        "/album/Taller10/image2-taller10.jpeg",
        "/album/Taller10/image3-taller10.jpeg",
        "/album/Taller10/image4-taller10.jpeg",
        "/album/Taller10/image5-taller10.png",
        "/album/Taller10/image6-taller10.jpeg",
        "/album/Taller10/image.png",
        "/album/Taller10/image7-taller10.jpeg",
        "/album/Taller10/image8-taller10.png",
        "/album/Taller10/image9-taller10.jpeg",
        "/album/Taller10/image10-taller10.jpeg",
        "/album/Taller10/image11-taller10.jpeg",
        "/album/Taller10/image12-taller10.jpeg",
        "/album/Taller10/image14-taller10.jpeg",
        "/album/Taller10/image15-taller10.jpeg",
        "/album/Taller10/image16-taller10.jpeg",
        "/album/Taller10/nube-taller10.png",      
      ]
    },

    taller11: {
      titulo: "Socialización de Resultados",
      portada: "/album/Taller1/portada1.png",
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
        "/album/Taller2/portada2.png",
        "/album/Taller2/image1-taller2.jpeg",
        "/album/Taller2/image2-taller2.jpeg",
        "/album/Taller2/image3-taller2.jpeg",
        "/album/Taller2/image4-taller2.jpeg",
        "/album/Taller2/image5-taller2.jpeg",
        "/album/Taller2/image6-taller2.jpeg",
        "/album/Taller2/image7-taller2.jpeg",
        "/album/Taller2/image10-taller2.jpeg",
        "/album/Taller2/image11-taller2.jpeg",
        "/album/Taller2/image12-taller2.jpeg",
        "/album/Taller2/image13-taller2.jpeg",
        "/album/Taller2/image14-taller2.jpeg",
        "/album/Taller2/image15-taller2.jpeg",
        "/album/Taller2/image16-taller2.jpeg",
        "/album/Taller2/nube-taller2.png",
        "/album/Taller3/portada3.png",
         "/album/Taller3/image1-taller3.jpeg",
        "/album/Taller3/image2-taller3.jpeg",
        "/album/Taller3/image3-taller3.jpeg",
        "/album/Taller3/image4-taller3.jpeg",
        "/album/Taller3/image5-taller3.jpeg",
        "/album/Taller3/image-(2).png",
        "/album/Taller3/image6-taller3.jpeg",
        "/album/Taller3/image7-taller3.jpeg",
        "/album/Taller3/imagetec2.png",
        "/album/Taller3/image9-taller3.jpeg",
        "/album/Taller3/image10-taller3.jpeg",
        "/album/Taller3/nube-taller3.png",
        "/album/Taller4/portada4.png",
         "/album/Taller4/image1-taller4.jpeg",
        "/album/Taller4/image2-taller4.jpeg",
        "/album/Taller4/image3-taller4.jpeg",
        "/album/Taller4/image8-taller4.png",
        "/album/Taller4/image4-taller4.jpeg",
        "/album/Taller4/image5-taller4.jpeg",
        "/album/Taller4/image6-taller4.jpeg",
        "/album/Taller4/image7-taller4.png",
        "/album/Taller4/nube-taller4.png",
        "/album/Taller5/portada5.png",
         "/album/Taller5/image1-taller5.jpeg",
        "/album/Taller5/image2-taller5.jpeg",
        "/album/Taller5/image3-taller5.jpeg",
        "/album/Taller5/image3.png",
        "/album/Taller5/image5.png",
        "/album/Taller5/nube-taller5.png",
        "/album/Taller6/portada6.png",
         "/album/Taller6/image1-taller6.jpeg",
        "/album/Taller6/image2-taller6.jpeg",
        "/album/Taller6/image3-taller6.jpeg",
        "/album/Taller6/image4-taller6.jpeg",
        "/album/Taller6/image5-taller6.jpeg",
        "/album/Taller6/image6-taller6.jpeg",
        "/album/Taller6/image7-taller6.jpeg",
        "/album/Taller6/image8-taller6.jpeg",
        "/album/Taller6/image9-taller6.jpeg",
        "/album/Taller6/image10-taller6.jpeg",
        "/album/Taller6/image12-taller6.jpeg",
        "/album/Taller6/image13-taller6.jpeg",
        "/album/Taller6/nube-taller6.png",
        "/album/Taller7/portada7.png",
         "/album/Taller7/image1-taller7.jpeg",
        "/album/Taller7/image2-taller7.jpeg",
        "/album/Taller7/Amenazas-y-riesgos.jpeg",
        "/album/Taller7/Equipamientos-y-espacios-públicos.jpeg",
        "/album/Taller7/image3-taller7.jpeg",
        "/album/Taller7/image5.jpeg",
        "/album/Taller7/image4-taller7.jpeg",
        "/album/Taller7/image6-taller7.jpeg",
        "/album/Taller7/Cartografia.jpeg",
        "/album/Taller7/image7-taller7.jpeg",
        "/album/Taller7/image8-taller7.jpeg",
        "/album/Taller7/image10-taller7.jpeg",
        "/album/Taller7/image6.jpeg",
        "/album/Taller7/image11-taller7.jpeg",
        "/album/Taller7/image12-taller7.jpeg",
        "/album/Taller7/image13-taller7.jpeg",
        "/album/Taller7/image14-taller7.jpeg",
        "/album/Taller7/image15-taller7.jpeg",
        "/album/Taller7/nube-taller7.png",
        "/album/Taller8/portada8.png",
          "/album/Taller8/image1-taller8.jpeg",
        "/album/Taller8/image2-taller8.jpeg",
        "/album/Taller8/image5-taller8.jpeg",
        "/album/Taller8/image6-taller8.jpeg",
        "/album/Taller8/image7-taller8.jpeg",
        "/album/Taller8/image8-taller8.jpeg",
        "/album/Taller8/image9-taller8.jpeg",
        "/album/Taller8/image10-taller8.jpeg",
        "/album/Taller8/image1.png",
        "/album/Taller8/image11-taller8.jpeg",
        "/album/Taller8/image12-taller8.jpeg",
        "/album/Taller8/image13-taller8.jpeg",
        "/album/Taller8/image.png",
        "/album/Taller8/nube-taller8.png",
        "/album/Taller9/portada9.png",
         "/album/Taller9/image1-taller9.jpeg",
        "/album/Taller9/image1.png",
        "/album/Taller9/image2-taller9.jpeg",
        "/album/Taller9/image3-taller9.png",
        "/album/Taller9/image.png",
        "/album/Taller9/nube-taller9.png",
        "/album/Taller10/portada10.png",
         "/album/Taller10/image1-taller10.jpeg",
        "/album/Taller10/image2-taller10.jpeg",
        "/album/Taller10/image3-taller10.jpeg",
        "/album/Taller10/image4-taller10.jpeg",
        "/album/Taller10/image5-taller10.png",
        "/album/Taller10/image6-taller10.jpeg",
        "/album/Taller10/image.png",
        "/album/Taller10/image7-taller10.jpeg",
        "/album/Taller10/image8-taller10.png",
        "/album/Taller10/image9-taller10.jpeg",
        "/album/Taller10/image10-taller10.jpeg",
        "/album/Taller10/image11-taller10.jpeg",
        "/album/Taller10/image12-taller10.jpeg",
        "/album/Taller10/image14-taller10.jpeg",
        "/album/Taller10/image15-taller10.jpeg",
        "/album/Taller10/image16-taller10.jpeg",
        "/album/Taller10/nube-taller10.png",      
               
      ]
    },


  };

 const album = colecciones[id];

  const [orientations, setOrientations] = useState({});
  const [bookPortraitMode, setBookPortraitMode] = useState(false);

  function handleImageLoad(src, e) {
    const img = e.target;
    const orient = img.naturalHeight > img.naturalWidth ? "portrait" : "landscape";
    setOrientations(prev => ({ ...prev, [src]: orient }));
    // enable portrait mode for the flipbook if the cover (or any image) is portrait
    if (src === album.portada) {
      setBookPortraitMode(orient === "portrait");
    }
  }

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
          usePortrait={bookPortraitMode}   // cambia a modo vertical si la portada está en vertical
          className="flip-book"
        >
          {/* Portada con imagen horizontal */}
          <div className="page">
            <img
              src={album.portada}
              className={`page-img ${orientations[album.portada] || ""}`}
              onLoad={(e) => handleImageLoad(album.portada, e)}
            />
          </div>

          {/* Páginas del álbum */}
          {album.fotos.map((src, i) => (
            <div className="page" key={i}>
              <img
                src={src}
                className={`page-img ${orientations[src] || ""}`}
                onLoad={(e) => handleImageLoad(src, e)}
              />
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