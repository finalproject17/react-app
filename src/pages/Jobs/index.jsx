import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../store/Slices/FetchJobsSlice';
import JobCard from '../../component/JobCard';
import JobsFilter from '../../component/JobsFilter';
import { Row, Col, Container } from 'react-bootstrap'; // Importing necessary components from React Bootstrap

export default function Jobs() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);
  // console.log(jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);
  const handleFilter = (filteredJobs) => 
    {
      setFilteredJobs(filteredJobs);
      // console.log(filteredJobs);
  
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
          {filteredJobs && filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
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
      </Col>
    </Row></Container>    
    </>
    
  );
}
