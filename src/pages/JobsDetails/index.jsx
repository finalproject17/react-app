import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, getJobById } from './../../store/Slices/FetchJobsSlice';
import styles from './jobsDetails.module.css';
import PrimaryButton from '../../component/primaryButton';
import SecondaryButton from '../../component/SecondayButton';
import { useParams, useNavigate } from 'react-router-dom';
import { applyForJob, deleteAppliedJob, fetchAppliedJobsByJobSeeker } from '../../store/Slices/AppliedJobsSlice';

const JobsDetails = () => {
  const btns = {
    primary: "Apply Now",
    secondary: "Save Job",
    primary2: "Show More"
  };

  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatRelativeDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) {
      return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
    } else if (diffMonths > 0) {
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    } else if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
      return 'Today';
    }
  };

  const { id } = useParams();
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();
  const { jobs, job } = useSelector((state) => state.jobs);
  const appliedJobs = useSelector((state) => state.appliedJobs.appliedJobs);

  const [isApplied, setIsApplied] = useState(false);
  const [appliedJobId, setAppliedJobId] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); 
  const [count,setCount]=useState(5);
  const navigate = useNavigate();

  useEffect(() => {
   dispatch(getAllJobs())
    dispatch(getJobById(id));
    dispatch(fetchAppliedJobsByJobSeeker({ userId }));
  }, [dispatch, id, userId]);


  // useEffect(() => {
  //   if (appliedJobs.find(appliedJob => appliedJob.jobId == id && appliedJob.userId == userId)) {
  //     setIsApplied(true);
  //     const appliedJob = appliedJobs.find(appliedJob => appliedJob.jobId == id);
  //     setAppliedJobId(appliedJob._id);
  //   } else {
  //     setIsApplied(false);
  //     setAppliedJobId(null);
  //   }
  // }, [appliedJobs, id, userId]);
  


  useEffect(() => {
    // if (Array.isArray(appliedJobs) && appliedJobs.some(appliedJob => appliedJob.jobId === id)) {

    if (appliedJobs && appliedJobs.some(appliedJob => appliedJob.jobId === id)) {

      setIsApplied(true);
      const appliedJob = appliedJobs.find(appliedJob => appliedJob.jobId === id);
      setAppliedJobId(appliedJob._id);
    } else {
      setIsApplied(false);
      setAppliedJobId(null);
    }
  }, [appliedJobs, id]);

  

  // useEffect(() => {
  //   if (Array.isArray(appliedJobs) && appliedJobs.some(appliedJob => appliedJob.jobId === id)) {
  //     setIsApplied(true);
  //     const appliedJob = appliedJobs.find(appliedJob => appliedJob.jobId === id);
  //     setAppliedJobId(appliedJob._id);
  //   } else {
  //     setIsApplied(false);
  //     setAppliedJobId(null);
  //   }
  // }, [appliedJobs, id]);

  const handleApplyNow = async (jobId) => {
    const existingApplication = appliedJobs.find(
      (appliedJob) => appliedJob.jobId._id == id && appliedJob.userId == userId
    );
  
    if (existingApplication) {
      if (existingApplication.additionalFormSubmitted) {
        setAlertType('error');
        setAlertMessage('You have already submitted an additional form for this job.');
        setAlertVisible(true);
        return;
      } else {
        setAlertType('error');
        setAlertMessage('You have already applied for this job.');
        setAlertVisible(true);
        return;
      }
    }
  
    if (job?.additionalJobForm) {
      navigate(`/applicationform/${jobId}`);
      return;
    } 
  
    try {
      const resultAction = await dispatch(applyForJob({ userId, jobId })).unwrap();
      console.log("Applied job ID:", resultAction);
      
      await dispatch(fetchAppliedJobsByJobSeeker({ userId })).unwrap();
      setIsApplied(true);
      setAppliedJobId(resultAction);
  
      setAlertType('success');
      setAlertMessage('Job application submitted successfully!');
      setAlertVisible(true);
    } catch (error) {
      console.error("Failed to apply for job:", error);
  
      setAlertType('error');
      setAlertMessage(error.message || 'Failed to apply for job.');
      setAlertVisible(true);
    }
  };
  
  
  const handleDeleteApplication = async () => {
    try {
      await dispatch(deleteAppliedJob(appliedJobId)).unwrap();
      await dispatch(fetchAppliedJobsByJobSeeker({ userId })).unwrap();
      console.log("Deleted");
      setIsApplied(false);
      setAppliedJobId(null);

      setAlertType('success');
      setAlertMessage('Job application deleted successfully!');
      setAlertVisible(true);
    } catch (error) {
      console.error("Failed to delete application:", error);

      setAlertType('error');
      setAlertMessage(error.message || 'Failed to delete job application.');
      setAlertVisible(true);
    }
  };


  const handelShowMore=()=>{
    setCount(count+5)
  }
  const Alert = ({ type, message }) => (
    <div className={`alert ${type === 'error' ? 'alert-danger' : 'alert-success'}`} role="alert">
      {message}
  
    </div>
  );

  return (
    <div className={styles.container}>
      {alertVisible && <Alert type={alertType} message={alertMessage} />}
      <div className="row">
        <div className={`${styles.title} col-lg-8 col-md-8 col-sm-12`}>
          <div>
            <img
              src={job?.companyId?.companyLogo}
              alt="Employer Logo"
              className={styles.imgSize}
            />
          </div>
          <div className={styles.content}>
            <h5 className={styles.jobTitle}>{job?.JobTitle}</h5>
            <div className={`d-flex`}>
              <img src="/clock.svg" alt="Clock Icon" />
              <p className={`m-0 ${styles.subtext}`}>
                {formatRelativeDate(job?.timeStamp)}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className={styles.btns}>
            {isApplied ? (
              <PrimaryButton
                onClick={handleDeleteApplication}
                name="Delete Application"
              />
            ) : (
              <PrimaryButton
                onClick={() => handleApplyNow(job._id)}
                name={btns.primary}
              />
            )}
            <SecondaryButton name={btns.secondary} />
          </div>
        </div>
      </div>
      <hr className={styles.breakLine}></hr>
      <div className="row">
        <div className={`${styles.description} col-lg-8 col-md-6 col-sm-12`}>
          <div>
            <p className={styles.par1}>Job Description</p>
            <p className={styles.par2}>{job?.description}</p>
          </div>
          <div>
            <p className={styles.par1}>Required Skills:</p>
            <ul className={styles.skillsList}>
              {job?.skills && job.skills.length > 0 ? (
                job.skills.map((skill, index) => (
                  <li key={index} className={styles.listItem}>
                    {skill}
                  </li>
                ))
              ) : (
                <li>No specific skills mentioned</li>
              )}
            </ul>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1"></div>
        <div className={`${styles.sideBar} col-lg-3 col-md-4 col-sm-6`}>
          <p className={styles.Requirements}>Requirements</p>
          <ul className={styles.requirementsList}>
            {job?.jobRequirements && job.jobRequirements.length > 0 ? (
              job.jobRequirements.map((Requirement, index) => (
                <li key={index} className={styles.listItem}>
                  {Requirement}
                </li>
              ))
            ) : (
              <li>No specific requirements mentioned</li>
            )}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12"></div>
        <div className="col-lg-1 col-md-1 col-sm-1"></div>
        <div
          className={`${styles.othersJobsSideBar} col-lg-3 col-md-4 col-sm-6 p-2`}
        >
          <p className={styles.OtherJobs}>Other Jobs</p>
          <div className={styles.parent}>
            <div className={styles.sideBarContent}>
              {jobs.slice(0, count).map((job) => (
                <div key={job._id} className={styles.content}>
                  <div className={styles.companyLogo}>
                    <img
                      src={job.companyId.companyLogo}
                      alt="companyLogo"
                      className={styles.logo}
                    />
                  </div>
                  <div className={styles.text}>
                    <h5 className={styles.jobTitleSideBar}>{job.JobTitle}</h5>
                    <p className={styles.companyNameSideBar}>
                      {job.companyId.companyName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.btn3}>
            <PrimaryButton name={btns.primary2} onClick={handelShowMore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
