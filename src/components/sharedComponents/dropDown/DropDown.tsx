import React, { useState } from "react";
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
      setHasOpened(true);
    }
  };

  // Handle keyboard interactions (Enter or Space)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent spacebar from scrolling
      toggleDropdown();
    }
  };

  return (
    <section className={styles.dropDownContainer}>
      {/* Label that is keyboard focusable and accessible */}
      <h2
        className={styles.label}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={0} // Make it focusable by keyboard
        aria-expanded={isOpen} // ARIA attribute for screen readers
        aria-controls="dropdown-content" // Links the label to the content
      >
        {label}
        <FontAwesomeIcon icon={faChevronUp} className={`${styles.chevronIcon} ${isOpen ? styles.iconDown : ""}`} size="2x" />
      </h2>

      {/* Content with aria-hidden when closed */}
      <div
        id="dropdown-content"
        className={`${styles.content} ${isOpen ? styles.open : hasOpened ? styles.close : ""}`}
        aria-hidden={!isOpen} // Hide content for screen readers when closed
      >
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
