import React from "react";
import styles from "./EduCard.module.css";
import { Card } from 'react-bootstrap';

const EduCard = ({ name }) => {
  const educationDetails = [
    {
      degree: "Computer Science",
      school: "Harvard University",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      duration: "From 2000 to 2023"
    },
    // Add more education details here
  ];

  return (
    <div className={styles.container}>
      <Card.Title className={styles['card-title']}>{name}</Card.Title>
      {educationDetails.map((edu, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardContent}>
            <p className={`p-0 m-0 ${styles.eduHead}`}>{edu.degree}</p>
            <p className={`p-0 m-0 ${styles.schoolName}`}>{edu.school}</p>
            <p className={`p-0 m-0 ${styles.description}`}>{edu.description}</p>
            <div>
              <p className={`${styles.paragraph}`}>{edu.duration}</p>
            </div>
          </div>
          <div className={styles.triangle}></div>
        </div>
      ))}
    </div>
  );
};

export default EduCard;
