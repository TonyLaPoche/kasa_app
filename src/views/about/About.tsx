import React from "react";
import aboutPicture from "../../assets/images/background-images/about-intro.png";
import { DropDown } from "../../components/sharedComponents/dropDown/DropDown";
import styles from "./About.module.scss";

interface aboutContentData {
  title: string;
  description: string;
}

const aboutContentsData: aboutContentData[] = [
  {
    title: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantisse une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description:
      "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    title: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes",
  },
];

const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.introContainer}>
        <img src={aboutPicture} alt="paysage de montagne vallonné" />
      </div>
      <div className={styles.aboutContentContainer}>
        {aboutContentsData.map((element, index) => (
          <DropDown key={index} label={element.title} typeContent="description" content={element.description} />
        ))}
      </div>
    </section>
  );
};

export default About;
