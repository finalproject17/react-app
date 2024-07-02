import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  ProgressBar,
} from "react-bootstrap";
import JobSeekerSidebar from "../JobSeekerSidebar";
import styles from "./Dashboard.module.css";
import { UilFileCheckAlt } from "@iconscout/react-unicons";
import { UilEye } from "@iconscout/react-unicons";
import { UilBookmark } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../store/Slices/FetchJobsSlice";
import JobCard from "../JobCard";
import JobInfoCard from "../JobInfoCard";
import JobTrackingChart from "../JobSeekerChart1";
import JobTrackingChart2 from "../JobSeekerChart2";

export default function Dashboard() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  // console.log(jobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 991.98);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function truncateDescription(description, maxLength) {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + "...";
  }

  const formatRelativeDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) {
      return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
    } else if (diffMonths > 0) {
      return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
    } else if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    } else {
      return "Today";
    }
  };

  const iconSize = isSmallScreen ? 50 : 70; // Set icon size based on screen width
  if (!jobs) return <p>Loaidng...</p>;
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <JobSeekerSidebar />
        </Col>
        <Col md={9}>
          <h4 className="mt-4 mb-5">Dashboard</h4>
          <Container>
            <Row className="my-4">
              <Col md={4}>
                <Card className={`${styles.card}`}>
                  <Card.Body
                    className={`d-flex justify-content-between align-items-center p-4 cl ${styles.cardBody}`}
                  >
                    <div>
                      <UilFileCheckAlt size={iconSize} color="#01A84D" />
                    </div>
                    <div>
                      <Card.Title style={{ fontSize: "2rem" }}>74</Card.Title>
                      <Card.Text
                        style={{ fontSize: "1rem", fontWeight: "500" }}
                        className="display-4"
                      >
                        Applied jobs
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className={`${styles.card}`}>
                  <Card.Body
                    className={`d-flex justify-content-between align-items-center p-4 cl ${styles.cardBody}`}
                  >
                    <div>
                      <UilEye size={iconSize} color="#01A84D" />
                    </div>
                    <div>
                      <Card.Title style={{ fontSize: "2rem" }}>14</Card.Title>
                      <Card.Text
                        style={{ fontSize: "1rem", fontWeight: "500" }}
                        className="display-4"
                      >
                        Profile Views
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className={`${styles.card}`}>
                  <Card.Body
                    className={`d-flex justify-content-between align-items-center p-4 cl ${styles.cardBody}`}
                  >
                    <div>
                      <UilBookmark size={iconSize} color="#01A84D" />
                    </div>
                    <div>
                      <Card.Title style={{ fontSize: "2rem" }}>14</Card.Title>
                      <Card.Text
                        style={{ fontSize: "1rem", fontWeight: "500" }}
                        className="display-4"
                      >
                        Saved jobs
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="my-4">
            <Col md={8}>
                <Card>
                  <Card.Header>JobTracking</Card.Header>
                  <Card.Body>
                    <JobTrackingChart></JobTrackingChart>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                {/* <Card className={`${styles.recentJobsCard}`}>
                  <Card.Header>Recent Applied Job</Card.Header>
                  <ListGroup variant="flush">
                    {jobs.map((job) => (
                      <ListGroupItem
                        className={`${styles.listGroup}`}
                        key={job._id}
                      >
                        <h5 className="m-0">{job.JobTitle}</h5>
                        <div className="d-flex jus">
                          <img src="/clock.svg" alt="Clock Icon" />
                          <p className={`m-0 px-1  ${styles.clockText}`}>
                            {formatRelativeDate(job.timeStamp)}
                          </p>
                        </div>

                        <div className="d-flex mt-1">
                          <JobInfoCard
                            img="/office bag.svg"
                            text={job.JobType}
                            backgroundColor="var(--border02)"
                          />
                          <JobInfoCard
                            img="/office bag.svg"
                            text={job.JoblocationType}
                            backgroundColor="var(--border02)"
                          />

                          <JobInfoCard
                            img="/location2.svg"
                            text={` ${job.jobLocation[0].State}, ${job.jobLocation[0].government}`}
                            backgroundColor="var(--border02)"
                          />
                          <JobInfoCard
                            img="/dollar coin.svg"
                            text={`${job.salary.from} : ${job.salary.to}`}
                            backgroundColor="var(--border02)"
                          />
                        </div>
                        <hr className={`mt-2  ${styles.separator}`}></hr>

                        <p className="m-0">
                          {truncateDescription(job.description, 50)}
                        </p>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </Card> */}
               <Card>
                  <Card.Header>JobTracking</Card.Header>
                  <Card.Body>
                    <JobTrackingChart2></JobTrackingChart2>
                  </Card.Body>
                </Card>
              </Col>
             
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
