import React from "react";
import Logo from "../../assets/images/logo/LOGO (2).png";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Kasa" />
      <em>&copy; 2020 Kasa. All rights reserved</em>
    </footer>
  );
}

export default Footer;
