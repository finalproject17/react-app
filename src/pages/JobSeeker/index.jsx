import React from "react";
import WhyChooseUs from "../../Sections/WhyChooseUsSection/index";
import styles from "./JobSeeker.module.css";
import JobCategories from "../../component/JobCategories/JobCategories";
import JobSeekerProfileCard from "../../component/jobSeekerProfileCard";
import JobFinder from "../../component/JobFinder/JobFinder";
import { Col, Container, Row, Card } from "react-bootstrap";
import { UilBag, UilMapMarker, UilSearch } from "@iconscout/react-unicons";

const JobSeeker = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className={`d-flex flex-column ${styles.headerContainer}  mt-5`}>
              <div className={` ${styles.headerText} `}>
                <h1>
                  The <span className={styles.highlight}>#1</span> Job Board for
                  <br />
                  Hiring or Find your next <br />
                  job in <span className={styles.highlight}>Egypt</span>
                </h1>
                <p className="mt-4">
                  Each month, over 3 million job seekers rely on our website as
                  a trusted resource in their quest for employment. These
                  individuals come from diverse backgrounds and industries, all
                  united by their common goal of finding meaningful work.{" "}
                </p>
              </div>
              <div>
                <div className={styles.searchBar}>
                  <div className="d-flex">
                    <div>
                      <div className="d-flex justify-content-center align-items-center">
                        <UilBag size="16" color="#989DA6" />
                        <p className={`m-0 ${styles.searchPara}`}>Industry</p>
                      </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className="d-flex justify-content-center align-items-center">
                      <UilMapMarker size="17" color="#989DA6" />
                      <p className={`m-0 ${styles.searchPara}`}>Location</p>
                    </div>
                  </div>
                  <div>
                    <button className={`${styles.searchButton} m-0`}>
                      {" "}
                      <UilSearch size="16" color="#FFFFFF" />
                      <p className={`m-0 ${styles.search}`}>Search</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.containerImage} mt-1`}>
              <img className="w-100" src="Card.svg" alt="Job Search" />
            </div>
          </div>
          <Row className="mt-5">
            <Col md={4} className="mb-3">
              <Card className={`${styles.myShadow} text-center`}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>30k+</Card.Title>
                  <Card.Text className={`${styles.cardText} m-1 p-0`}>
                    Job Seeker
                  </Card.Text>
                  <Card.Text className={`${styles.cardBody} m-2 p-0`}>
                    We always provide people a complete solution upon focused of
                    any business.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className={`${styles.myShadow} text-center`}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>10k+</Card.Title>
                  <Card.Text className={`${styles.cardText} m-1 p-0`}>
                    Vacant jobs
                  </Card.Text>
                  <Card.Text className={`${styles.cardBody} m-2 p-0`}>
                    We always provide people a complete solution upon focused of
                    any business.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className={`${styles.myShadow} text-center`}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>20k+</Card.Title>
                  <Card.Text className={`${styles.cardText} m-1 p-0`}>
                    Company
                  </Card.Text>

                  <Card.Text className={`${styles.cardBody} m-2 p-0`}>
                    We always provide people a complete solution upon focused of
                    any business.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default JobSeeker;
