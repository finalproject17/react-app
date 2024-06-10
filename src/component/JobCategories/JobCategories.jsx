// import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styles from './JobCategories.module.css';
import { FaBullhorn, FaLock, FaUserTie, FaPenFancy, FaChartLine,  FaHeadset } from 'react-icons/fa';

const categories = [
  { name: 'Markting', icon: <FaBullhorn />, highlight: true },
  { name: 'Accounting / Finance', icon: <FaHeadset /> },
  { name: 'Human Resource', icon: <FaUserTie /> },
  { name: 'Security Analyst', icon: <FaLock /> },
  { name: 'Management', icon: <FaChartLine /> },
  { name: 'Content Creator', icon: <FaPenFancy /> },
];

const JobCategories = () => {
  return (
    <Container className={styles.container}>
      <h2 className={styles.header}>Popular Job Categories</h2>
      <p className={styles.paragraph}>2024 jobs live - 293 added today<br />Explore the marketplace.</p>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div key={index} className={`${styles.categoryCard} ${category.highlight ? styles.highlight : ''}`}>
            <div className={styles.categoryIcon}>{category.icon}</div>
            <div className={styles.categoryInfo}>
              <div className={styles.categoryName}>{category.name}</div>
              <div className={styles.categoryJobs}>10k+ Jobs</div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="success" className={styles.allCategoriesButton}>All Categories</Button>
    </Container>
  );
};

export default JobCategories;
