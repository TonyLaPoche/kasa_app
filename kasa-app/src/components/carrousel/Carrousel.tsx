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
  );
};
export default Carrousel;
