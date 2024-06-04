import React from "react";
import styles from "./JobInfoCard.module.css";

const JobInfoCard = ({ img, text, backgroundColor = "var(--border03)" }) => {
  return (
    <div 
      className={`${styles.Container} d-flex justify-content-center align-items-center`} 
      style={{ backgroundColor: backgroundColor }}
    >
      <img src={img} alt="Icon" />
      <p className={`m-0 ${styles.Text}`}>{text}</p>
    </div>
  );
};

export default JobInfoCard;
