import React from "react";
import styles from "./IntroContainer.module.scss";
import aboutPicture from "../../assets/images/background-images/about-intro.png";

const IntroContainer: React.FC = () => {
  return (
    <div className={styles.introContainer}>
      <img src={aboutPicture} alt="paysage de montagne vallonné" />
    </div>
  );
};

export default IntroContainer;
