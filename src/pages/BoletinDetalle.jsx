import { useParams, Link } from "react-router-dom";

export default function BoletinDetalle() {
  const { id } = useParams();

  // Nombre del PDF según el ID del taller
  const pdfPath = `/boletines/taller0.pdf`;

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


      <div className="boletin-detalle-container">
        <h1 className="boletin-detalle-title">Boletín Informativo</h1>

        <p className="boletin-detalle-id">
          {id.replace("taller", "Taller ")}
        </p>

        <div className="boletin-detalle-content">

          {/* VISOR PDF */}
          <iframe
            src={pdfPath}
            className="pdf-viewer"
            title="Boletín PDF"
          ></iframe>

        </div>
      </div>

    </>
  );
}
