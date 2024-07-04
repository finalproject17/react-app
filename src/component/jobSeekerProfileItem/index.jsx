//import React from 'react';
import styles from './style.module.css';

const JobSeekerProfileItem = (
  { width, content, icon: Icon,backgroundColor,additionalclass }
) => {
  return (
    <>
     <div className={`${styles.userItem} ${additionalclass}`} style={{ width,backgroundColor }} >
      <Icon   />
      <div className='px-1' >{content}</div>
     </div>
    </>
  );
};

export default JobSeekerProfileItem;
