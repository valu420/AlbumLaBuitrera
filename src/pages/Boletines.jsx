import { Link } from "react-router-dom";

export default function Boletines() {

  const boletines = [
    { id: "taller0", titulo: "Boletín - Taller 0" },
    // agrega más aquí si quieres
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


      <div className="boletines-container">
        <h1 className="boletines-title">Boletines Informativos</h1>

        <p className="boletines-subtext">
          Aquí podrás encontrar los boletines informativos de cada taller.
        </p>

        <div className="boletines-list">
          {boletines.map(b => (
            <Link key={b.id} to={`/boletin/${b.id}`} className="boletin-card">
              {b.titulo}
            </Link>
          ))}
        </div>
      </div>

    </>
  );
}