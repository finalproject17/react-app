import React from "react";
import styles from "./EduCard.module.css";

const EduCard = () => {
  return (
    <div className="container">
      {/* square start */}
      <div className={styles.card}>
        <div style={{ padding: "20px 40px" }}>
          <p className={`p-0 m-0 ${styles.eduHead}`}>Computer Science</p>
          <p className={`p-0 m-0 ${styles.SchoolName}`}>Harvard University</p>
          <p className={`p-0 m-0 ${styles.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
          <div>
            <p className={`${styles.paragraph}`}>From 2000 to 2023</p>
          </div>
        </div>
        {/* triangle start */}
        <div className={styles.triangle}></div>
        {/* triangle end */}
      </div>
    </div>
  );
};

export default EduCard;
