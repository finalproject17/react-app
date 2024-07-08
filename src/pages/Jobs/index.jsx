import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../store/Slices/FetchJobsSlice';
import JobCard from '../../component/JobCard';
import JobsFilter from '../../component/JobsFilter';
import { Row, Col, Container ,Button, Modal } from 'react-bootstrap';
import Loader from "../../component/Loader";
import styles from "./jobs.module.css"; // Import the CSS module



export default function Jobs() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const jobs = useSelector((state) => state.jobs.jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const jobsPerPage = 9;

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getAllJobs());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleFilter = (filteredJobs) => {
    setFilteredJobs(filteredJobs);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleClick = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };
  if (loading) {
    return <Loader />;
  }
  return (
      <>
        <div
            style={{
              width: "100%",
              height: "240px",
              backgroundColor: "#FAFCF8",
              marginBottom: "2rem",
            }}
            className="d-flex justify-content-center align-items-center flex-column"
        >
          <h4>Browse jobs</h4>
          <p>Home / jobs</p>
        </div>
        <Container>
          <Row>
            {/* Filter Section */}
            <Col md={3}>
              <Button
                  variant="success"
                  className={`${styles.filterButton} `}
                  onClick={handleShow}
              >
                Filter
              </Button>
              <div className={styles.filter}>
                {jobs ? (
                    <JobsFilter jobs={jobs} onFilter={handleFilter} />
                ) : (
                    <div>No jobs found</div>
                )}
              </div>
            </Col>
            {/* Jobs Cards Section */}
            <Col md={9}>
              <Row>
                {currentJobs !== null ? (
                    currentJobs.length > 0 ? (
                        currentJobs.map((job) => (
                            <Col
                                className="col-12"
                                key={job._id}
                                style={{ marginBottom: "20px" }}
                            >
                              <JobCard job={job} />
                            </Col>
                        ))
                    ) : (
                        <Col>
                          <div>No jobs found</div>
                        </Col>
                    )
                ) : (
                    <Col>
                      <div>
                        Loading...<i className="fa-solid fa-spinner"></i>
                      </div>
                    </Col>
                )}
              </Row>
              {/* Pagination Section */}
              {filteredJobs.length > jobsPerPage && (
                  <div className="pagination">
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, currentPage - 1)}
                        className="prev"
                        style={{ pointerEvents: currentPage === 1 ? "none" : "auto" }}
                    >
                      &lt;
                    </a>
                    {[...Array(totalPages)].map((_, index) => (
                        <a
                            key={index}
                            href="#"
                            onClick={(e) => handleClick(e, index + 1)}
                            className={`page ${index + 1 === currentPage ? "active" : ""}`}
                        >
                          {index + 1}
                        </a>
                    ))}
                    <a
                        href="#"
                        onClick={(e) => handleClick(e, currentPage + 1)}
                        className="next"
                        style={{
                          pointerEvents: currentPage === totalPages ? "none" : "auto",
                        }}
                    >
                      &gt;
                    </a>
                  </div>
              )}
            </Col>
          </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {jobs && <JobsFilter jobs={jobs} onFilter={handleFilter} />}
          </Modal.Body>
        </Modal>
      </>
  );
}