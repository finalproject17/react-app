import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JobSeekerCard.module.css";
import Skills from "../Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../store/Slices/usersSlice";
import axiosInstance from "../../axioseConfig/instance";

const JobSeekerCard = ({ candidate }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/${candidate._id}`);
  };

  return (
    
    <div
      className={` ${styles.jobSeekerContainer} d-flex justify-content-center align-items-center flex-column m-0`}
    >
      
      <div className={`${styles.contentContainer}`}>
        <div>
          <div
            className={`${styles.imageContainer} d-flex justify-content-center`}
          >
            <img
              className={styles.circularImage}
              src={candidate.profilePhoto}
              alt="Profile Avatar"
            />
          </div>
          <div className="text-center">
            <h5 className={`m-0 ${styles.name}`}>
              {candidate.firstName} {candidate.lastName}
            </h5>
            <p className={`${styles.jobTitle}`}>{candidate.category}</p>
            {/* <p className={`${styles.salary}`}>$3k-$4k/mo</p> */}
          </div>

          <div className={styles.locationContainer}>
            <img src="location.svg" alt="Location Icon" />
            <p className={`m-0 ${styles.locationText}`}>
              {candidate.country}, {candidate.city}
            </p>
          </div>
         

          <hr className={styles.separator} />
          <div className={styles.skillsContainer}>
            <div className="d-flex justify-content-start mb-2">
              <Skills name="Figma" />
              <Skills name="Sketch" />
              <Skills name="Adobe XD" />
            </div>
            <div className="d-flex justify-content-start">
              <Skills name="UI" />
              <Skills name="+5" />
            </div>
          </div>
          <button className={`btn ${styles.viewProfileButton}`} onClick={handleViewProfile}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerCard;


