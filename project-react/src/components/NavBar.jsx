import "../styles/navbar.scss";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <h1 className="titulo-nav">CHORMATICA</h1>

      <nav className="elementos-nav">
        <ul>
          <li>
            <a href="#">INICIO</a>
          </li>
          <li>
            <a href="./pages/chromatica.html">CHORMATICA</a>
          </li>
          <li>
            <a href="./pages/fundas.html">FUNDAS</a>
          </li>
          <li>
            <a href="./pages/espejos.html">ESPEJOS</a>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
