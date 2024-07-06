import React, { useState } from "react";
import { Nav, Navbar, Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Sidebar.module.css";
import {
  UilFileCheckAlt,
  UilTachometerFastAlt,
  UilUser,
  UilFileLandscape,
  UilBookmark,
  UilCog,
  UilSignout,
} from "@iconscout/react-unicons";
import { useAuth } from "../../contexts/authContext";

const JobSeekerSidebar = ({ activee }) => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(activee);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  return (
    <>
      <Navbar className={`${styles.sidebar}`}>
        <Nav className={`flex-column mt-4 w-100 ${styles.dashboardContainer}`}>
          <div
            className={`d-flex align-items-center ${styles.element} ${
              activeItem === "dashboard" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("dashboard", "/dashboard")}
          >
            {activeItem === "dashboard" && (
              <span className={styles.activeFlag}></span>
            )}
            <UilTachometerFastAlt />
            Dashboard
          </div>
          <div
            className={`d-flex align-items-center ${styles.element} ${
              activeItem === "profile" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("profile", "/myProfile")}
          >
            {activeItem === "profile" && (
              <span className={styles.activeFlag}></span>
            )}
            <UilUser />
            My Profile
          </div>
          <div
            className={`d-flex align-items-center ${styles.element} ${
              activeItem === "manage-cv" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("manage-cv", "/manage-cv")}
          >
            {activeItem === "manage-cv" && (
              <span className={styles.activeFlag}></span>
            )}
            <UilFileLandscape />
            Manage CV
          </div>
          <div
            className={`d-flex align-items-center ${styles.element} ${
              activeItem === "applied-jobs" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("applied-jobs", "/applied-jobs")}
          >
            {activeItem === "applied-jobs" && (
              <span className={styles.activeFlag}></span>
            )}
            <UilFileCheckAlt />
            Applied Jobs
          </div>
          <div
            className={`d-flex align-items-center ${styles.element} ${
              activeItem === "saved-jobs" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("saved-jobs", "/savedJobs")}
          >
            {activeItem === "saved-jobs" && (
              <span className={styles.activeFlag}></span>
            )}
            <UilBookmark />
            Saved Jobs
          </div>
          <div
            className={`d-flex align-items-center ${styles.element} ${
              activeItem === "setting" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("setting", "/settings")}
          >
            {activeItem === "setting" && (
              <span className={styles.activeFlag}></span>
            )}
            <UilCog />
            Settings
          </div>
          <div
            className={`d-flex align-items-center ${styles.element} ${
              activeItem === "log-out" ? styles.active : ""
            }`}
            onClick={handleShow}
          >
            {activeItem === "log-out" && (
              <span className={styles.activeFlag}></span>
            )}
            <UilSignout />
            Log Out
          </div>
        </Nav>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          Are you sure you want to log out?
          <div className="my-3 d-flex justify-content-center align-items-center">
            <Button
              className="btn btn-outline-success bg-white text-success me-3"
              onClick={handleClose}
            >
              No
            </Button>
            <Button
              className="btn btn-success"
              onClick={() => {
                logout();
                navigate("/Home");
              }}
            >
              Yes
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JobSeekerSidebar;
