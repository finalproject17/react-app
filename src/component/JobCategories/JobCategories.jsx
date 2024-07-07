import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styles from './JobCategories.module.css';
import { FaBullhorn, FaLock, FaUserTie, FaPenFancy, FaChartLine, FaHeadset } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

const categories = [
  { name: 'Markting', icon: <FaBullhorn />, highlight: true },
  { name: 'Accounting / Finance', icon: <FaHeadset /> },
  { name: 'Human Resource', icon: <FaUserTie /> },
  { name: 'Security Analyst', icon: <FaLock /> },
  { name: 'Management', icon: <FaChartLine /> },
  { name: 'Content Creator', icon: <FaPenFancy /> },
];

const JobCategories = () => {
  const { t,i18n } = useTranslation();

  return (
     
    <Fade direction={i18n.language === 'ar' ? 'right' : 'left'} cascade triggerOnce>
    <Container className={styles.container} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className={styles.header}>{t('Popular Job Categories')}</h2>
      <p className={styles.paragraph}>
        {t('2024 jobs live - 293 added today')}
        <br />
        {t('Explore the marketplace.')}
      </p>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div key={index} className={`${styles.categoryCard} ${category.highlight ? styles.highlight : ''}`}>
            <div className={styles.categoryIcon}>{category.icon}</div>
            <div className={styles.categoryInfo}>
              <div className={styles.categoryName}>{t(category.name)}</div>
              <div className={styles.categoryJobs}>10k+ {t('Jobs')}</div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="success" className={styles.allCategoriesButton}>{t('All Categories')}</Button>
    </Container>
    </Fade>
  );
};

export default JobCategories;
