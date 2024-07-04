import React from "react";
import styles from "./JobInfoCard.module.css";

const JobInfoCard = ({ img, text, backgroundColor = "var(--border03)" }) => {
  const bgColor = text === "Part Time" ? "#FEF2D9" : backgroundColor;

  return (
    <div 
      className={`${styles.Container} d-flex justify-content-center align-items-center`} 
      style={{ backgroundColor: bgColor }}
    >
      <img src={img} alt="Icon" />
      <p className={`m-0 ${styles.Text}`}>{text}</p>
    </div>
  );
};

export default JobInfoCard;
