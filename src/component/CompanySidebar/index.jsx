import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faFolder, faUser } from "@fortawesome/free-regular-svg-icons";
import { UilFileCheckAlt } from '@iconscout/react-unicons'
import { UilTachometerFastAlt } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileLandscape } from "@iconscout/react-unicons";
import { UilBookmark } from "@iconscout/react-unicons";
import { UilCog } from "@iconscout/react-unicons";
import { UilSignout } from "@iconscout/react-unicons";
import { UilEditAlt } from "@iconscout/react-unicons";
import { UilBag } from "@iconscout/react-unicons";



const CompanySidebar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Navbar
      bg="light"
      className={`d-flex flex-column vh-100 ${styles.sidebar}`}
    >
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
          <Nav.Link
            className={`${styles.navLink} ${
              activeItem === "dashboard" ? styles.active : ""
            }`}
          >
            Dashboard
          </Nav.Link>
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

          <Nav.Link
            className={`${styles.navLink} ${
              activeItem === "profile" ? styles.active : ""
            }`}
          >
            My Profile
          </Nav.Link>
        </div>

        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "post-job" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("post-job")}
        >
          {activeItem === "post-job" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilEditAlt></UilEditAlt>
          <Nav.Link
            className={`${styles.navLink} ${
              activeItem === "post-job" ? styles.active : ""
            }`}
          >
            Post Job
          </Nav.Link>
        </div>

        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "my-jobs" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("my-jobs")}
        >
          {activeItem === "my-jobs" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilBag></UilBag>
          <Nav.Link
            className={`${styles.navLink} ${
              activeItem === "my-jobs" ? styles.active : ""
            }`}
          >
            My Jobs{" "}
          </Nav.Link>
        </div>
        <div
          className={`d-flex align-items-center ${styles.element} ${
            activeItem === "applocations" ? styles.active : ""
          }`}
          onClick={() => handleItemClick("applocations")}
        >
          {activeItem === "applocations" && (
            <span className={styles.activeFlag}></span>
          )}
          <UilFileCheckAlt></UilFileCheckAlt>
          <Nav.Link
            className={`${styles.navLink} ${
              activeItem === "applocations" ? styles.active : ""
            }`}
          >
            Applications
          </Nav.Link>
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
          <Nav.Link
            className={`${styles.navLink} ${
              activeItem === "setting" ? styles.active : ""
            }`}
          >
            Setting
          </Nav.Link>
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
          <Nav.Link
            className={`${styles.navLink} ${
              activeItem === "log-out" ? styles.active : ""
            }`}
          >
            Log Out
          </Nav.Link>
        </div>
      </Nav>
    </Navbar>
  );
};

export default CompanySidebar;
