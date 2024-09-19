import React, { useEffect, useState } from "react";
import logements from "../../data/data.json"; // données JSON de Logement
import type { Logement } from "../../model/logement";
import styles from "./Home.module.scss";
import TitleCard from "../../components/homeComponents/TitleCard";
import CardLogement from "../../components/homeComponents/cardLogement";

const Home: React.FC = () => {
  const [data, setData] = useState<Logement[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<Logement[]> => {
    return new Promise<Logement[]>((resolve) => {
      setTimeout(() => {
        resolve(logements);
      }, 1000);
    });
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <section className={styles.homeContainer}>
      <TitleCard text="Chez vous, partout et ailleurs" />
      <div className={styles.locationCardContainer}>
        {data.map((logement) => (
          <CardLogement key={logement.id} logement={logement} />
        ))}
      </div>
    </section>
  );
};

export default Home;
