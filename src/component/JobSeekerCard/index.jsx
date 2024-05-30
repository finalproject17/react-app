import React from "react";
import styles from "./JobSeekerCard.module.css";
import Skills from "../Skills";
import "bootstrap/dist/css/bootstrap.min.css";

const JobSeekerCard = () => {
  return (
    <div className={` ${styles.jobSeekerContainer}`}>
      <div className={`${styles.contentContainer}`}>
        <div>
          <div
            className={`${styles.imageContainer} d-flex justify-content-center`}
          >
            <img
              className={styles.circularImage}
              src="avatar=03.svg"
              alt="Profile Avatar"
            />
          </div>
          <div className="text-center ">
            <h5 className={`m-0 ${styles.name}`}>John Deo</h5>
            <p className={`${styles.jobTitle}`}>Graphic Designer</p>
            <p className={`${styles.salary}`}>$3k-$4k/mo</p>
          </div>

          <div className={styles.locationContainer}>
            <img src="location.svg" alt="Location Icon" />
            <p className={`m-0 ${styles.locationText}`}>Egypt, Alex</p>
          </div>
          <hr className={styles.separator} />
          <div className={styles.skillsContainer}>
            <div
              className="d-flex justify-content-start"
              style={{ marginBottom: "8px" }}
            >
              <Skills name="Figma" />
              <Skills name="Sketch" />
              <Skills name="Adobe XD" />
            </div>
            <div className="d-flex justify-content-start">
              <Skills name="UI" />
              <Skills name="+5" />
            </div>
          </div>
          <button className={`btn ${styles.viewProfileButton}`}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerCard;
