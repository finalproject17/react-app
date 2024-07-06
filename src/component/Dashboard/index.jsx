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
import JobTrackingCircleChart from "../JobTrackingCircleChart";
import { countAppliedJobsByUser } from "../../store/Slices/AppliedJobsSlice";
import { countSavedJobsByUser } from "../../store/Slices/savedJobsSlice";

export default function Dashboard() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [appliedJobsCount, setAppliedJobsCount] = useState(0);
  const [savedJobsCount, setSavedJobsCount] = useState(0);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const appliedJobs = useSelector((state) => state.appliedJobs.appliedJobs);
  const savedJobs = useSelector((state) => state.appliedJobs.appliedJobs);

  const userId = "6681e2ab75a50c5ecc4d8e02";

  useEffect(() => {
    dispatch(getAllJobs());

    const fetchAppliedJobsLength = async () => {
      const { payload } = await dispatch(countAppliedJobsByUser({ userId }));
      setAppliedJobsCount(payload); // Set the state with the fetched payload
      console.log();
    };

    fetchAppliedJobsLength();


    const fetchSavedJobsLength = async () => {
      const { payload } = await dispatch(countSavedJobsByUser({ userId }));
      setSavedJobsCount(payload); // Set the state with the fetched payload
    };

    fetchSavedJobsLength();


  }, [dispatch, userId]);

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

  if (!jobs) return <p>Loading...</p>;
  if (!appliedJobs) return <p>Loading...</p>;

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <JobSeekerSidebar activee={"dashboard"} />
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
                      <Card.Title style={{ fontSize: "2rem" }}>{appliedJobsCount}</Card.Title>
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
                      <Card.Title style={{ fontSize: "2rem" }}>{savedJobsCount}</Card.Title>
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
                <Card>
                  <Card.Header>JobTracking</Card.Header>
                  <Card.Body>
                    <JobTrackingCircleChart></JobTrackingCircleChart>
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
