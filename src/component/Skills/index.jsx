// import React from "react";
import styles from "./Skills.module.css";

const Skills = ({name}
) => {
  return (
    <div className={`${styles.container} w-100`}>
      <div className={styles.skillContainer}>
        <p className={styles.skillText}>{name}</p>
      </div>
    </div>
  );
};

export default Skills;
