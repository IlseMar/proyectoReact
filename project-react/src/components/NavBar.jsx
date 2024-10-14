import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <h1 className="titulo-nav">CHORMATICA</h1>

      <nav className="elementos-nav">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.isActive : styles.notActive;
              }}
              to={"/"}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            className=
            {({ isActive }) => {
              return isActive ? styles.isActive : styles.notActive;
            }}
            to={"/category/fundas"}
          </li>
          <li>
            className=
            {({ isActive }) => {
              return isActive ? styles.isActive : styles.notActive;
            }}
            to={"/category/espejos"}
          </li>
          <CartWidget />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
