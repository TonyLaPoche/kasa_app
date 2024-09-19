import React, { useState, useEffect } from "react";
import styles from "./DropDown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface DropDownProps {
  label: string;
  typeContent: "description" | "liste";
  content: string | string[];
}

export const DropDown: React.FC<DropDownProps> = ({ label, typeContent, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasOpened, setHasOpened] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!hasOpened) {
      setHasOpened(true); // Marque que le menu a été ouvert au moins une fois
    }
  };

  return (
    <section className={styles.dropDownContainer}>
      <h2 className={styles.label} onClick={toggleDropdown}>
        {label}
        <FontAwesomeIcon icon={faChevronUp} className={`${styles.chevronIcon} ${isOpen ? styles.iconDown : ""}`} />
      </h2>

      {/* Ne pas appliquer d'animation au premier rendu */}
      <div className={`${styles.content} ${isOpen ? styles.open : hasOpened ? styles.close : ""}`}>
        {typeContent === "description" && <p>{content}</p>}

        {typeContent === "liste" && Array.isArray(content) && (
          <ul>
            {content.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
