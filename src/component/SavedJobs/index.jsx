import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedJobs } from '../../store/Slices/savedJobsSlice'; // Adjust the import path as necessary
import JobCard from '../JobCard'; // Adjust the import path as necessary

const SavedJobs = () => {
  const dispatch = useDispatch();
  const userId = '66659f993aa76347cff49653'; // Replace with actual user ID from your authentication context or state
  const savedJobs = useSelector((state) => state.savedJobs.savedJobs);
  const status = useSelector((state) => state.savedJobs.status);
  const error = useSelector((state) => state.savedJobs.error);

  useEffect(() => {
    dispatch(getSavedJobs(userId));
  }, [dispatch, userId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {savedJobs.length === 0 ? (
        <div>No saved jobs</div>
      ) : (
        savedJobs.map((job) => (
          <JobCard
            key={job.jobId}
            companyLogo={job.companyLogo}
            title={job.title}
            JobCategory={job.JobCategory}
            JobSubCategory={job.JobSubCategory}
            jobLocation={job.jobLocation}
            JobType={job.JobType}
            description={job.description}
            JoblocationType={job.JoblocationType}
            jobLevel={job.jobLevel}
            jobRequirements={job.jobRequirements}
            skills={job.skills}
            timeStamp={job.timeStamp}
            status={job.status}
            state={job.state}
            government={job.government}
            salary={job.salary}
            jobId={job.jobId}
          />
        ))
      )}
    </div>
  );
};

export default SavedJobs;
