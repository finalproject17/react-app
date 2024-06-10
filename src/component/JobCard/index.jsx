import React from "react";
import styles from "./JobCard.module.css";
import JobInfoCard from "../JobInfoCard";

const JobCard = () => {
  return (
    <div
      className={` my-5 p-0 d-flex align-items-center ${styles.container}`}
    >
      <div className={`${styles.detailsContainer}`}>
        <div className={`d-flex align-items-center ${styles.padding2}`}>
          <img src="employer logo square.svg" alt="Employer Logo" />
          <div className={`d-flex flex-column ${styles.marginLeft}`}>
            <h5 className={`m-0 ${styles.title}`}>
              Developer & expert in java c++
            </h5>
            <div className="d-flex">
              <img src="clock.svg" alt="Clock Icon" />
              <p className={`m-0 ${styles.subtext}`}>12 days ago</p>
            </div>
          </div>
        </div>
        {/*Start JobInfo  */}
        <div className={`d-flex ${styles.padding}`}>
          <JobInfoCard
            img="office bag.svg"
            text="Full Time"
            backgroundColor="var(--border02)"
          ></JobInfoCard>
          <JobInfoCard img="Building.svg" text="Remote"></JobInfoCard>
          <JobInfoCard img="location2.svg" text="Egypt, Alex"></JobInfoCard>
          <JobInfoCard
            img="dollar coin.svg"
            text="$900 / Monthly"
          ></JobInfoCard>
        </div>

        {/* End JobInfo  */}
        <hr className={styles.separator} />
        <p className={`${styles.jobDescription}`}>
          When team members told us they needed more flexibility around where
          and how they worked, we acted, creating two options to accommodate
          two...
        </p>
      </div>
      {/*  */}
      <div className={`${styles.container2}`}>
        <img className={`${styles.favIcon}`} src="bookmark.svg"></img>
        <button className={`${styles.button}`}>Apply Now</button>
      </div>
      {/*  */}
    </div>
  );
};

export default JobCard;
