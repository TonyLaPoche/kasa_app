import React from "react";
import Logo from "../../assets/images/logo/LOGO (2).png";
import styles from "./Footer.module.scss";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Kasa" />
      <em>&copy; 2020 Kasa. All rights reserved</em>
    </footer>
  );
};

export default Footer;
