import React, { useState } from "react";
import styles from "./Carrousel.module.scss";
import type { Logement } from "../../model/logement";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CarrouselProps {
  data: Logement;
}

const Carrousel: React.FC<CarrouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const countImages = data.pictures.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % countImages);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + countImages) % countImages);
  };
  return (
    <div className={styles.introLogementCarroussel}>
      <img src={data.pictures[currentIndex]} alt={data.title + " index : " + (currentIndex + 1)} className={styles.carrouselItem} />
      {countImages === 1 ? (
        ""
      ) : (
        <>
          <div className={styles.CarrousselCounter}>
            {currentIndex + 1} / {countImages}
          </div>
          <div className={styles.buttons}>
            <button type="button" onClick={handlePrevious} className={styles.left}>
              <FontAwesomeIcon icon={faChevronLeft} color="white" />
            </button>
            <button type="button" onClick={handleNext} className={styles.right}>
              <FontAwesomeIcon icon={faChevronRight} color="white" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Carrousel;
