import React from "react";
import styles from "./CardLogement.module.scss";
import { Link } from "react-router-dom";
import { Logement } from "../../model/logement";

interface CardLogementProps {
  logement: Logement;
}

const CardLogement: React.FC<CardLogementProps> = ({ logement }) => {
  return (
    <article>
      <Link to={`logement/${logement.id}`}>
        <div className={styles.shadow}></div>
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </Link>
    </article>
  );
};

export default CardLogement;
