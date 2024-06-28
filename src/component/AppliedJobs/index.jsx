import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import JobCard from '../JobCard';
import JobSeekerSidebar from '../JobSeekerSidebar';
import {fetchAppliedJobsByJobSeeker} from '../../store/Slices/AppliedJobsSlice';

const AppliedJobs = () => {
  const dispatch = useDispatch();
  const userId = '6673808dd577e035e9bcb929'; // Replace with actual user ID from your authentication context or state
  
  const appliedJobs = useSelector((state) => state.appliedJobs.appliedJobs);

  useEffect(() => {
    dispatch(fetchAppliedJobsByJobSeeker({userId}));
    // if (appliedJobs) 
    // console.log(appliedJobs);
  }, [dispatch, userId]);


  //
  const handleRemoveJob = (jobId) => {
    const updatedJobs = localAppliedJobs.filter(appliedJob => appliedJob.jobId && appliedJob.jobId._id!== jobId
    );
    setlocalAppliedJobs(updatedJobs);
    dispatch(fetchAppliedJobsByJobSeeker(userId));
  };

  if (!appliedJobs) return null;

  return (
<>

</>
  );
};

export default AppliedJobs;
