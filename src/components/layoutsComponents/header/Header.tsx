import React from "react";
import Logo from "../../assets/images/logo/LOGO.png";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Kasa" className={styles.logo} aria-label="Logo de Kasa" />
      <nav className={styles.navigation} aria-label="Navigation principale">
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
              Accueil
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/a-propos" className={({ isActive }) => (isActive ? styles.active : "")}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
