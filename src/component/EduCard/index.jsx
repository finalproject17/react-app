import React from 'react';
import styles from './EduCard.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EduCard = ({name}) => {
    return (
        <div className={`card ${styles.card} shadow-sm p-4 mb-4 bg-light rounded`}>
            <div className={styles.arrowLeft}></div>
            <h2 className={styles.cardTitle}>Computer Science</h2>
            <h3 className={styles.cardSubtitle}>Harvard University</h3>
            <p className={styles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>
            <div className={`badge ${styles.dateRange}`}>From 2000 to 2023</div>
        </div>
    );
}

export default EduCard;
