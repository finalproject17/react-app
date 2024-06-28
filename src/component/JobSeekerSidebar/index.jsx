import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Sidebar.module.css";
import { UilFileCheckAlt } from '@iconscout/react-unicons'
import { UilTachometerFastAlt } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileLandscape } from "@iconscout/react-unicons";
import { UilBookmark } from "@iconscout/react-unicons";
import { UilCog } from "@iconscout/react-unicons";
import { UilSignout } from "@iconscout/react-unicons";

const JobSeekerSidebar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Navbar bg="light" className={`d-flex flex-column vh-100 ${styles.sidebar}`}>
      <Nav className={`flex-column mt-4 w-100 ${styles.dashboardContainer}`}>
        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "dashboard" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("dashboard")}
        >
          {activeItem === "dashboard" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilTachometerFastAlt></UilTachometerFastAlt>
          <Link
            to="/dashboard" // Specify the route for Dashboard
            className={`${styles.navLink} ${
              activeItem === "dashboard" ? styles.active : ""
            }`}
          >
            Dashboard
          </Link>
        </div>
        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "profile" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("profile")}
        >
          {activeItem === "profile" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilUser></UilUser>
          <Link
            to="/myProfile" // Specify the route for My Profile
            className={`${styles.navLink} ${
              activeItem === "profile" ? styles.active : ""
            }`}
          >
            My Profile
          </Link>
        </div>

        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "manage-cv" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("manage-cv")}
        >
          {activeItem === "manage-cv" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilFileLandscape></UilFileLandscape>
          <Link
            to="/manage-cv" // Specify the route for Manage CV
            className={`${styles.navLink} ${
              activeItem === "manage-cv" ? styles.active : ""
            }`}
          >
            Manage CV
          </Link>
        </div>

        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "applied-jobs" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("applied-jobs")}
        >
          {activeItem === "applied-jobs" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilFileCheckAlt></UilFileCheckAlt>
          <Link
            to="/applied-jobs" // Specify the route for Applied Jobs
            className={`${styles.navLink} ${
              activeItem === "applied-jobs" ? styles.active : ""
            }`}
          >
            Applied Jobs
          </Link>
        </div>

        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "saved-jobs" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("saved-jobs")}
        >
          {activeItem === "saved-jobs" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilBookmark></UilBookmark>
          <Link
            to="/savedJobs" // Specify the route for Saved Jobs
            className={`${styles.navLink} ${
              activeItem === "saved-jobs" ? styles.active : ""
            }`}
          >
            Saved Jobs
          </Link>
        </div>

        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "setting" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("setting")}
        >
          {activeItem === "setting" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilCog />
          <Link
            to="/settings" // Specify the route for Settings
            className={`${styles.navLink} ${
              activeItem === "setting" ? styles.active : ""
            }`}
          >
            Settings
          </Link>
        </div>

        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "log-out" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("log-out")}
        >
          {activeItem === "log-out" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilSignout></UilSignout>
          <Link
            to="/logout" // Specify the route for Log Out
            className={`${styles.navLink} ${
              activeItem === "log-out" ? styles.active : ""
            }`}
          >
            Log Out
          </Link>
        </div>
      </Nav>
    </Navbar>
  );
};

export default JobSeekerSidebar;
