import React from "react";
import styles from "./Host.module.scss";

interface HostProps {
  name: string;
  picture: string;
}

const Host: React.FC<HostProps> = ({ name, picture }) => {
  return (
    <div className={styles.owner}>
      <p>{name}</p>
      <img src={picture} alt="Owner" />
    </div>
  );
};

export default Host;
