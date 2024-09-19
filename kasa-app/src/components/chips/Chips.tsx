import React from "react";
import styles from "./Chips.module.scss";

interface ChipsProps {
  content: string;
}

const Chips: React.FC<ChipsProps> = ({ content }) => {
  return (
    <div className={styles.chipsContainer}>
      <p>{content}</p>
    </div>
  );
};

export default Chips;
