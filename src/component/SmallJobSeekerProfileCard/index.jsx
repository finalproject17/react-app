

import styles from './style.module.css';

const SmallJobSeekerProfileCard = ({ src, title, subTitle,additionalClass }) => {
  return (
    <div  className={`${styles.profile} ${additionalClass}`} >
      <img  className={styles.img} src={src} alt={title} />
      <div className={styles.profileText}>
        <div className={styles.profileTextTitle}>{title}</div>
        <div className={styles.profileTextSubTitle}>{subTitle}</div>
      </div>
    </div>
  );
};

export default SmallJobSeekerProfileCard;
