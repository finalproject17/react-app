import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, getJobById } from './../../store/Slices/FetchJobsSlice';
import styles from './jobsDetails.module.css';
import PrimaryButton from '../../component/primaryButton';
import SecondaryButton from '../../component/SecondayButton';
import { useParams } from 'react-router-dom';
import { applyForJob, deleteAppliedJob, fetchAppliedJobsByJobSeeker } from '../../store/Slices/AppliedJobsSlice';

const JobsDetails = () => {
  const btns = {
    primary: "Apply Now",
    secondary: "Save Job",
    primary2: "Show More"
  };

  const { id } = useParams();
  const userId = "6681e2ab75a50c5ecc4d8e02"; 
  const dispatch = useDispatch();
  const { jobs, job} = useSelector((state) => state.jobs);
  const appliedJobs = useSelector((state) => state.appliedJobs.appliedJobs);
  const [isApplied, setIsApplied] = useState(false);
  const [appliedJobId, setAppliedJobId] = useState(null);
  const [visibleJobsCount, setVisibleJobsCount] = useState(3); // Number of jobs to display initially

  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getJobById(id));
    dispatch(fetchAppliedJobsByJobSeeker({ userId }));
  }, [dispatch, id, userId]);

  // useEffect(() => {
  //   if (appliedJobs.some(appliedJob => appliedJob.jobId === id)) {
  //     setIsApplied(true);
  //     const appliedJob = appliedJobs.find(appliedJob => appliedJob.jobId === id);
  //     setAppliedJobId(appliedJob._id);
  //   } else {
  //     setIsApplied(false);
  //     setAppliedJobId(null);
  //   }
  // }, [appliedJobs, id]);

  useEffect(() => {
    if (Array.isArray(appliedJobs) && appliedJobs.some(appliedJob => appliedJob.jobId === id)) {
      setIsApplied(true);
      const appliedJob = appliedJobs.find(appliedJob => appliedJob.jobId === id);
      setAppliedJobId(appliedJob._id);
    } else {
      setIsApplied(false);
      setAppliedJobId(null);
    }
  }, [appliedJobs, id]);

  const handleApplyNow = async (jobId) => {
    const resultAction = await dispatch(applyForJob({ userId, jobId })).unwrap();
    await dispatch(fetchAppliedJobsByJobSeeker({ userId })).unwrap();
    setIsApplied(true);
    setAppliedJobId(resultAction);
     
   
  };

  const handleDeleteApplication = async () => {
    await dispatch(deleteAppliedJob(appliedJobId)).unwrap();
    await dispatch(fetchAppliedJobsByJobSeeker({ userId })).unwrap();
    setIsApplied(false);
    setAppliedJobId(null);
  };

  const handleShowMore = () => {
    setVisibleJobsCount(prevCount => prevCount + 3); // Increment the number of visible jobs by 5
  };

  return (
    <div className={styles.container}>
      <div className='row'>
        <div className={`${styles.title} col-lg-8 col-md-8 col-sm-12`}>
          <div className={styles.companyImg}>
            <img src={job.companyLogo} alt='Employer Logo' className={styles.theImg} />
          </div>
          <div className={styles.content}>
            <h5 className={styles.jobTitle}>{job.JobTitle}</h5>
            <p className={styles.companyName}>{job.companyName}</p>
            <div className={styles.time}><img src="/Vector2.svg" alt="icon" /> 12 days ago</div>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className={styles.btns}>
            {isApplied ? (
              <PrimaryButton onClick={handleDeleteApplication} name="Delete Application" />
            ) : (
              <PrimaryButton onClick={() => handleApplyNow(job._id)} name={btns.primary} />
            )}
            <SecondaryButton name={btns.secondary} />
          </div>
        </div>
      </div>
      <hr className={styles.breakLine}></hr>
      <div className='row'>
        <div className={`${styles.description} col-lg-8 col-md-6 col-sm-12`}>
          <div>
            <p className={styles.par1}>Job Description</p>
            <p className={styles.par2}>{job.description}</p>
          </div>
          <div>
            <p className={styles.par1}>Required Skills:</p>
            <ul className={styles.skillsList}>
              {job.skills && job.skills.length > 0 ? (
                job.skills.map((skill, index) => <li key={index} className={styles.listItem}>{skill}</li>)
              ) : (
                <li>No specific skills mentioned</li>
              )}
            </ul>
          </div>
        </div>
        <div className='col-lg-1 col-md-1 col-sm-1'></div>
        <div className={`${styles.sideBar} col-lg-3 col-md-4 col-sm-6`}>
          <p className={styles.Requirements}>Requirements</p>
          <ul className={styles.requirementsList}>
            {job.jobRequirements && job.jobRequirements.length > 0 ? (
              job.jobRequirements.map((Requirement, index) => <li key={index} className={styles.listItem}>{Requirement}</li>)
            ) : (
              <li>No specific requirements mentioned</li>
            )}
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-8 col-md-8 col-sm-12'></div>
        <div className='col-lg-1 col-md-1 col-sm-1'></div>
        <div className={`${styles.othersJobsSideBar} col-lg-3 col-md-4 col-sm-6`}>
          <p className={styles.OtherJobs}>Other Jobs</p>
          <div className={styles.parent}>
            <div className={styles.sideBarContent}>
              {jobs.slice(0, visibleJobsCount).map((job) => (
                <div key={job._id} className={styles.content}>
                  <div className={styles.companyLogo}>
                    <img src={job.companyId.companyLogo} alt='companyLogo' className={styles.logo} />
                  </div>
                  <div className={styles.text}>
                    <h5 className={styles.jobTitleSideBar}>{job.JobTitle}</h5>
                    <p className={styles.companyNameSideBar}>{job.companyId.companyName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.btn3}>
            <PrimaryButton
              name={btns.primary2}
              onClick={handleShowMore}
              disabled={visibleJobsCount >= jobs.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
