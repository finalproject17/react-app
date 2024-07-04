import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../store/Slices/FetchJobsSlice';
import JobCard from '../../component/JobCard';
import JobsFilter from '../../component/JobsFilter';
import { Row, Col, Container } from 'react-bootstrap';


export default function Jobs() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleFilter = (filteredJobs) => {
    setFilteredJobs(filteredJobs);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <JobsFilter jobs={jobs} onFilter={handleFilter} />
          </Col>
          {/* Jobs Cards Section */}
          <Col md={9}>
            <Row>
              {currentJobs.length > 0 ? (
                currentJobs.map((job) => (
                  <Col className='col-12' key={job._id} style={{ marginBottom: '20px' }}>
                    <JobCard job={job} />
                  </Col>
                ))
              ) : (
                <Col>
                  <div>Loading...</div>
                </Col>
              )}
            </Row>
            <div className="pagination">
              <a
                href="#"
                onClick={() => handleClick(currentPage - 1)}
                className="prev"
                style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
              >
                &lt;
              </a>
              {[...Array(totalPages)].map((_, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => handleClick(index + 1)}
                  className={`page ${index + 1 === currentPage ? 'active' : ''}`}
                >
                  {index + 1}
                </a>
              ))}
              <a
                href="#"
                onClick={() => handleClick(currentPage + 1)}
                className="next"
                style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto' }}
              >
                &gt;
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
