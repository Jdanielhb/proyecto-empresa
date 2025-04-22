import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 text-white flex justify-around">
      <Link to="/">Inicio</Link>
      <Link to="/quienes-somos">Quiénes Somos</Link>
      <Link to="/afiliacion-servicios">Afiliación y Servicios</Link>
      <Link to="/documentacion">Documentación</Link>
      <Link to="/noticias">Noticias</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;
