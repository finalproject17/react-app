import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobById } from '../../store/Slices/FetchJobsSlice';
import styles from './style.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getFormByJobId } from '../../store/Slices/FormJobsSlice';
import { applyForJob } from '../../store/Slices/AppliedJobsSlice';
import { Navigate } from 'react-router-dom';

const JobApplication = () => {
  const dispatch = useDispatch();
  const job = useSelector((state) => state.jobs.job);
  const forms = useSelector((state) => state.jobForm.jobForm);
  const appliedJob = useSelector((state) => state.appliedJobs.appliedJob);
  const error = useSelector((state) => state.appliedJobs.error);
  const { jobId } = useParams();
  const Navigate=useNavigate();
  const [firstAnswer, setFirstAnswer] = useState('');
  const [SecondAnswer, setSecondAnswer] = useState('');
  const [thirdAnswer, setThirdAnswer] = useState('');
  const [FourthAnswer, setFourthAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const userId = localStorage.getItem('userId');

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

  const validAnswer = (answer) => {
    if (answer.length === 0) {
      setMessage('This field is required');
      return false;
    }
    return true;
  };

  const navigateToBack = () => {
    window.history.back();
  };

  const applyNow = async (event) => {
    event.preventDefault();

    if (!validAnswer(firstAnswer) || !validAnswer(SecondAnswer) || !validAnswer(thirdAnswer) || !validAnswer(FourthAnswer)) {
      return; 
    }

    try {
      const resultAction = await dispatch(
        applyForJob({
          jobId,
          userId,
          FirstAnswer: firstAnswer,
          SecondAnswer: SecondAnswer,
          thirdAnswer: thirdAnswer,
          FourthAnswer: FourthAnswer,
        })
      ).unwrap();

      setMessage('Congratulations, you applied successfully ');
      setAlertType('success');
      Navigate('/jobs')
    } catch (error) {
      setMessage('you have already applied to this job !');
      setAlertType('error');
    }

    
    setFirstAnswer('');
    setSecondAnswer('');
    setThirdAnswer('');
    setFourthAnswer('');
  
  };

  useEffect(() => {
    if (jobId) {
      dispatch(getJobById(jobId));
      dispatch(getFormByJobId(jobId));
    }
  }, [dispatch, jobId]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setAlertType('');
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <div className={styles.searchPart}>
        <h4>Application Form</h4>
        <span className={`mt-2 ${styles.subtextitle}`}>Try to convince the company of yours</span>
        <span className={`m-0 ${styles.subtextitle}`}>GOOD LUCK!</span>
      </div>
      <div className="container">
        <div className={`d-flex m-4 ${styles.borderBottom}`}>
          <div>
            <img src={job?.companyId?.companyLogo} alt="company logo" className={styles.imgSize} />
          </div>
          <div className={`${styles.text} ms-3`}>
            <h4 className={styles.title}>{job?.JobTitle}</h4>
            <p className={styles.companyName}>{job?.companyName}</p>
            <div className={`d-flex`}>
              <img src="/clock.svg" alt="Clock Icon" />
              <p className={`m-0 ${styles.subtext}`}>{formatRelativeDate(job?.timeStamp)}</p>
            </div>
          </div>
        </div>

     
        {message && (
          <div className={`alert ${alertType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
            {message}
          </div>
        )}

        {/* application form-start */}
        <section className={styles.form}>
          <div className={`container ${styles.formContain}`}>
            <div className={`row ${styles.formContent}`}>
              <div className={`col-12 p-4 m-5`}>
                <form onSubmit={applyNow}>
                  <div className="form-group input-component mt-4">
                    <div className="position-relative">
                      <label htmlFor="question1" className={`bg-white ${styles.label}`}>
                        {forms?.FirstQuestion}
                      </label>
                      <textarea
                        name="question1"
                        id="question1"
                        className="mt-4 form-control"
                        value={firstAnswer}
                        onChange={(e) => setFirstAnswer(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group input-component mt-4">
                    <div className="position-relative">
                      <label htmlFor="question2" className={`bg-white ${styles.label}`}>
                        {forms?.SecondQuestion}
                      </label>
                      <textarea
                        name="question2"
                        id="question2"
                        className="mt-4 form-control"
                        value={SecondAnswer}
                        onChange={(e) => setSecondAnswer(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group input-component mt-4">
                    <div className="position-relative">
                      <label htmlFor="question3" className={`bg-white ${styles.label}`}>
                        {forms?.ThirdQuestion}
                      </label>
                      <textarea
                        name="question3"
                        id="question3"
                        className="mt-4 form-control"
                        value={thirdAnswer}
                        onChange={(e) => setThirdAnswer(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group input-component mt-4">
                    <div className="position-relative">
                      <label htmlFor="question4" className={`bg-white ${styles.label}`}>
                        {forms?.FourthQuestion}
                      </label>
                      <textarea
                        name="question4"
                        id="question4"
                        className="mt-4 form-control"
                        value={FourthAnswer}
                        onChange={(e) => setFourthAnswer(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={`${styles.btns} d-flex justify-content-end`}>
                    <button
                      type="button"
                      className={`btn m-3 d-flex align-items-center justify-content-center ${styles.btnBack}`}
                      onClick={navigateToBack}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className={`btn m-3 d-flex align-items-center justify-content-center ${styles.btn}`}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* application form-end */}
      </div>
    </>
  );
};

export default JobApplication;
