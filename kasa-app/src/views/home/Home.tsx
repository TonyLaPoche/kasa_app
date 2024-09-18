import React, { useEffect, useState } from "react";
import logements from "../../data/data.json"; // données JSON de Logement
import type { Logement } from "../../model/logement";
import styles from "./Home.module.scss";
import TitleCard from "../../components/homeComponents/TitleCard";
import CardLogement from "../../components/homeComponents/cardLogement";

const Home: React.FC = () => {
  // État pour stocker les données des logements
  const [data, setData] = useState<Logement[]>([]);

  // État pour gérer le chargement des données
  const [loading, setLoading] = useState<boolean>(true);

  // Fonction pour simuler l'appel API et récupérer les données
  const fetchData = async (): Promise<Logement[]> => {
    return new Promise<Logement[]>((resolve) => {
      setTimeout(() => {
        resolve(logements);
      }, 1000); // Simule un délai d'1 seconde
    });
  };

  // Effet pour charger les données au montage du composant
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

    loadData(); // Appelle la fonction de chargement des données
  }, []); // Le tableau vide signifie que l'effet s'exécute uniquement au montage du composant

  // Affiche le loader pendant le chargement des données
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  // Rendu du composant avec les données chargées
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
