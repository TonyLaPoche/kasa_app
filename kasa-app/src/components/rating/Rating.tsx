import React from "react";
import styles from "./Rating.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

interface RatingProps {
  stars: string;
}

const Rating: React.FC<RatingProps> = ({ stars }) => {
  const totalStars = 5;
  const filledStars = parseInt(stars);
  const emptyStars = totalStars - filledStars;

  return (
    <div className={styles.rates}>
      {Array.from({ length: filledStars }, (_, index) => (
        <FontAwesomeIcon key={`filled-${index}`} icon={faStarSolid} color="#FF6060" />
      ))}

      {Array.from({ length: emptyStars }, (_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faStarSolid} color="#E3E3E3" />
      ))}
    </div>
  );
};

export default Rating;
