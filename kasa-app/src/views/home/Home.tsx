import React from "react";
import logements from "../../data/data.json"; // données JSON de Logement
import type { Logement } from "../../model/logement";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

function Home() {
  // simulation de requêtes API à logements

  return (
    <section className={styles.homeContainer}>
      <div className={styles.homeTitleContainer}>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <div className={styles.locationCardContainer}>
        {logements.map((logement) => (
          <article key={logement.id}>
            <Link to={`logement/${logement.id}`}>
              <div className={styles.shadow}></div>
              <img src={logement.cover} alt={logement.title} />
              <h3>{logement.title}</h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;
