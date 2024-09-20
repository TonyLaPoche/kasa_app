import React, { ReactNode, memo } from "react";
import styles from "./TitleCard.module.scss";

interface TitleCardProps {
  text: ReactNode;
}

const TitleCard: React.FC<TitleCardProps> = memo(({ text }) => {
  return (
    <div className={styles.homeTitleContainer}>
      <h2>{text}</h2>
    </div>
  );
});

export default TitleCard;
