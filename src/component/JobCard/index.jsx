
import styles from "./JobCard.module.css";
import JobInfoCard from "../JobInfoCard";
import { Link } from 'react-router-dom';
const JobCard = ({id,key,companyLogo,title,JobCategory,JobSubCategory,jobLocation,JobType,description,JoblocationType,jobLevel,jobRequirements,skills,timeStamp,status,state,government,salary}) => {
  
  return (
    <div className={`d-flex align-items-center ${styles.container}`} key={key}>
      <div className={styles.detailsContainer}>
        <div className={`d-flex align-items-center ${styles.padding2}`}>
          { <img src={companyLogo} alt="Employer Logo" className={styles.imgSize}/>}
          <div className={`d-flex flex-column ${styles.marginLeft}`}>
            {/* <p>{key}</p> */}
         <Link  to={`/JobsDetails/${id}`}  className={styles.titleLink}>  <h5 className={`m-0 ${styles.title}`}>
              {title}
            </h5>
            
            </Link> 
            <div className="d-flex">
              <img src="/clock.svg" alt="Clock Icon" />
              <p className={`m-0 ${styles.subtext}`}>{timeStamp}</p>
            </div>
          </div>
        </div>
        {/* Start JobInfo */}
        <div className={`d-flex ${styles.padding}`}>
          <JobInfoCard
            img="/office bag.svg"
            text={JobType}
            backgroundColor="var(--border02)"
          />
          <JobInfoCard img="/Building.svg" text={JoblocationType} />
          <JobInfoCard img="/location2.svg" text={`${state} ${government}`} />
          <JobInfoCard img="/dollar coin.svg" text={salary && `${salary.from} / ${salary.to}`} />
        </div>
        {/* End JobInfo */}
        <hr className={styles.separator} />
        <p className={styles.jobDescription}>
          {description}
        </p>
      </div>
      {/* Right side */}
      <div className={styles.container2}>
        <img className={styles.favIcon} src="/bookmark.svg" alt="Bookmark Icon" />
        <button className={styles.button}>Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
