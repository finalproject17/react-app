// JobSeekerProfileItem.jsx
import React from 'react';
import styles from './style.module.css';

const JobSeekerProfileItem = ({ width, height, content, icon: Icon,backgroundColor }) => {
  return (
    <div className={styles.userItem} style={{ width, height,backgroundColor }}>
      <Icon className={styles.icon} />
      <div className={styles.userItem_text}>{content}</div>
    </div>
  );
};

export default JobSeekerProfileItem;
