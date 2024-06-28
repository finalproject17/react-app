import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedJobs, deleteSavedJob } from '../../store/Slices/savedJobsSlice';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import JobCard from '../JobCard';
import JobSeekerSidebar from '../JobSeekerSidebar';

const SavedJobs = () => {
  const dispatch = useDispatch();
  const userId = '66659f993aa76347cff49653'; // Replace with actual user ID from your authentication context or state
  const savedJobs = useSelector((state) => state.savedJobs.savedJobs);
    const jobs = useSelector((state) => state.jobs.jobs);
  // console.log(jobs);
  const [localSavedJobs, setLocalSavedJobs] = useState([]);


  useEffect(() => {
    dispatch(getSavedJobs(userId));
    // console.log(savedJobs);
  }, [dispatch, userId]);

  useEffect(() => {
    setLocalSavedJobs(savedJobs);
  }, [savedJobs]);

  const handleRemoveJob = (jobId) => {
    const updatedJobs = localSavedJobs.filter(savedJob => savedJob.jobId && savedJob.jobId._id !== jobId);
    setLocalSavedJobs(updatedJobs);
    dispatch(getSavedJobs(userId));
  };

  return (
    <Container fluid>
      <Row>
        <Col className='py-0' md={3}>
          <JobSeekerSidebar />
        </Col>
        <Col md={9}>
          <h4 className='mt-4 mb-5'>Saved Jobs</h4>
          {localSavedJobs.length === 0 ? (
            <Alert variant="info">No saved jobs</Alert>
          ) : (
            localSavedJobs.map((savedJob) => {
              if (!savedJob || !savedJob.jobId) {
                return null; // Skip this entry if savedJob or savedJob.jobId is undefined
              }
              return (
                <JobCard
                  key={savedJob._id}
                  job={savedJob.jobId}
                  id={savedJob.jobId._id}
                  onRemove={handleRemoveJob}
                />
              );
            })
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SavedJobs;