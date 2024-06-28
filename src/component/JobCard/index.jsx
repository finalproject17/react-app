import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UilBookmark } from '@iconscout/react-unicons';
import { UisBookmark } from '@iconscout/react-unicons-solid';
import { useDispatch, useSelector } from 'react-redux';
import { postSavedJob, deleteSavedJob, getSavedJobs } from '../../store/Slices/savedJobsSlice'; // Assuming you have a getSavedJobs action
import JobInfoCard from '../JobInfoCard';
import styles from './JobCard.module.css';

const JobCard = ({ job, id, onRemove }) => {
  const dispatch = useDispatch();
  const userId = '66659f993aa76347cff49653';
  const savedJobs = useSelector((state) => state.savedJobs.savedJobs);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (job && savedJobs.some((savedJob) => savedJob.jobId && savedJob.jobId._id === job._id)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [job, savedJobs]);

  const handleFavIcon = (jobId) => {
    const savedJob = savedJobs.find((savedJob) => savedJob.jobId && savedJob.jobId._id === jobId);
  
    if (savedJob) {
      dispatch(deleteSavedJob(savedJob._id))
        .then(() => {
          dispatch(getSavedJobs(userId)).then(() => 
            {
              setIsFav(false);
              onRemove(jobId);
            }); 
        })
        .catch((error) => {
          console.error('Error deleting saved job:', error);
        });
    } else {
      dispatch(postSavedJob({ userId, jobId }))
        .then(() => {
          dispatch(getSavedJobs(userId))
            .then(() => {
              setIsFav(true);
              console.log("added");
            });
        })
        .catch((error) => {
          console.error('Error saving job:', error);
        });
    }
  };

  if (!job) return null;

  const jobLocation = job.jobLocation || {};

  return (
    <div className={`d-flex align-items-center ${styles.container}`}>
      <div className={styles.detailsContainer}>
        <div className={`d-flex align-items-center ${styles.padding2}`}>
          <img src={job.companyId.companyLogo} alt="Employer Logo" className={styles.imgSize} />
          <div className={`d-flex flex-column ${styles.marginLeft}`}>
            <Link to={`/JobsDetails/${job._id}`} className={styles.titleLink}>
              <h5 className={`m-0 ${styles.title}`}>{job.JobTitle}</h5>
            </Link>
            <div className="d-flex">
              <img src="/clock.svg" alt="Clock Icon" />
              <p className={`m-0 ${styles.subtext}`}>{job.timeStamp}</p>
            </div>
          </div>
        </div>
        <div className={`d-flex ${styles.padding}`}>
          <JobInfoCard img="/office bag.svg" text={job.JobType} backgroundColor="var(--border02)" />
          <JobInfoCard img="/Building.svg" text={job.JoblocationType} />
          <JobInfoCard img="/location2.svg" text={`${jobLocation.State}, ${jobLocation.government}`} />
          <JobInfoCard img="/dollar coin.svg" text={job.salary && `${job.salary.from} : ${job.salary.to}`} />
        </div>
        <hr className={styles.separator} />
        <p className={styles.jobDescription}>{job.description}</p>
      </div>
      <div className={styles.container2}>
        {isFav ? (
          <UisBookmark onClick={() => handleFavIcon(job._id)} />
        ) : (
          <UilBookmark onClick={() => handleFavIcon(job._id)} />
        )}
        <button className={`${styles.button} btn btn-success`}>Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
