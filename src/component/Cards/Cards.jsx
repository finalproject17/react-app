import React from 'react';
import styles from "./Cards.module.css";

const Card = ({ number, title, description }) => {
  return (
    <div className={styles.card}>
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};

export default Card;
