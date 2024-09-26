// src/views/logement/Logement.tsx
import { useLoaderData } from "react-router-dom";
import type { Logement } from "../../model/logement";
import styles from "./Logement.module.scss";
import Chips from "../../components/logementComponents/chips/Chips";
import Rating from "../../components/logementComponents/rating/Rating";
import Host from "../../components/logementComponents/host/Host";
import Carrousel from "../../components/logementComponents/carrousel/Carrousel";
import { DropDown } from "../../components/sharedComponents/dropDown/DropDown";

const Logement = () => {
  const logement = useLoaderData() as Logement;

  return (
    <section className={styles.logementContainer}>
      <Carrousel data={logement} />
      <div className={styles.infosContainer}>
        <div className={styles.infosLogement}>
          <h1 className={styles.title}>{logement.title}</h1>
          <p className={styles.location}>{logement.location}</p>
          <div className={styles.tags}>
            {logement.tags.map((elt, index) => (
              <Chips key={index} content={elt} />
            ))}
          </div>
        </div>
        <div className={styles.rateAndOwner}>
          <Rating stars={logement.rating} />
          <Host name={logement.host.name} picture={logement.host.picture} />
        </div>
      </div>

      <DropDown content={logement.description} label="Description" typeContent="description" />
      <DropDown content={logement.equipments} label="Equipements" typeContent="liste" />
    </section>
  );
};

export default Logement;
