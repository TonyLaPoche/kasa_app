// src/views/logement/Logement.tsx
import { useLoaderData } from "react-router-dom";
import type { Logement } from "../../model/logement";
import styles from "./Logement.module.scss";
import Chips from "../../components/chips/Chips";
import { DropDown } from "../../components/dropDown/DropDown";
import { faChevronLeft, faChevronRight, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Logement = () => {
  const logement = useLoaderData() as Logement;
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalStars = 5;
  const filledStars = parseInt(logement.rating);
  const emptyStars = totalStars - filledStars;

  const countImages = logement.pictures.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % countImages);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + countImages) % countImages);
  };

  console.log(countImages);

  return (
    <section className={styles.logementContainer}>
      <div className={styles.introLogementCarroussel}>
        <img src={logement.pictures[currentIndex]} alt={logement.title + " index : " + (currentIndex + 1)} className={styles.carrouselItem} />
        {countImages === 1 ? (
          ""
        ) : (
          <>
            <div className={styles.CarrousselCounter}>
              {currentIndex + 1} / {countImages}
            </div>
            <div className={styles.buttons}>
              <button type="button" onClick={handlePrevious} className={`${currentIndex === 0 ? styles.hidden : ""} ${styles.left}`}>
                <FontAwesomeIcon icon={faChevronLeft} color="white" size="2x" />
              </button>
              <button type="button" onClick={handleNext} className={`${currentIndex === countImages - 1 ? styles.hidden : ""} ${styles.right}`}>
                <FontAwesomeIcon icon={faChevronRight} color="white" size="2x" />
              </button>
            </div>
          </>
        )}
      </div>
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
          <div className={styles.rates}>
            {Array.from({ length: filledStars }, (_, index) => (
              <FontAwesomeIcon key={`filled-${index}`} icon={faStarSolid} color="#FF6060" />
            ))}

            {Array.from({ length: emptyStars }, (_, index) => (
              <FontAwesomeIcon key={`empty-${index}`} icon={faStarSolid} color="#E3E3E3" />
            ))}
          </div>
          <div className={styles.owner}>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="Owner" />
          </div>
        </div>
      </div>

      <DropDown content={logement.description} label="Description" typeContent="description" />
      <DropDown content={logement.equipments} label="Equipements" typeContent="liste" />
    </section>
  );
};

export default Logement;
