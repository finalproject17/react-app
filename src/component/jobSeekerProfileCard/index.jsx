// import React from 'react';
import styles from './style.module.css';
import PrimaryButton from '../primaryButton'
 import JobSeekerProfileItem from '../jobSeekerProfileItem'
 import { SlLocationPin } from "react-icons/sl";
 import { CgWorkAlt } from "react-icons/cg";
 import { CgProfile } from "react-icons/cg";
 import { BiBookmarkAlt } from "react-icons/bi";
 import { GoClock } from "react-icons/go";
 import { FiPhoneCall } from "react-icons/fi";
 import { TbMail } from "react-icons/tb";
 import { GrFacebookOption } from "react-icons/gr";
 import { BiLogoLinkedin } from "react-icons/bi";
 const JobSeekerProfileCard = () => {
  return (
    <div className={styles.mainCard}>
           <div className={styles.mainCard_userImg}><img src="6.svg" alt="userProfile" /></div>
        
            <div className={styles.user}>
            <div className={styles.userDetails}>
               <div className={styles.userDetails_name} >Julia Ark</div>
               <div className={styles.userDetails_jobTitle}>Graphic Designer</div>
            </div>
           <div><PrimaryButton name={'Download CV'} className={styles.btn}/></div>
           </div>
           <ul><li><JobSeekerProfileItem width='15.313rem' height='2.75rem'backgroundColor= {'var(--border02)'} content='Egypt,Alex' icon={SlLocationPin}/></li>
           <li><JobSeekerProfileItem width='15.313rem' height='2.75rem'  content='UI/UX Designer' backgroundColor={'var(--border03)'} icon={CgWorkAlt} /></li>
           <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content='Senior' backgroundColor={'var(--border03)'}  icon={CgProfile}/></li>
           <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content='Bachelor Degree'backgroundColor={'var(--border03)'}  icon={BiBookmarkAlt}/></li>
           <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content='Full time' backgroundColor={'var(--border03)'}  icon={GoClock}/></li>
           </ul>
           <ul >
           <li><div className={styles.contact_section_text}>Contact Info</div></li>
           <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content='123 456 7890' backgroundColor={'var(--border03)'}  icon={FiPhoneCall}/></li>
           <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content='info@Labyrinth.com'backgroundColor={'var(--border03)'}  icon={TbMail}/></li>
           </ul>
           <ul>
            <li><div className={styles.contact_section_text}>Social Media</div></li>
            <div>
            <li  className={styles.socialMedia_icons}><div  className={styles.socialMedia_icon}><GrFacebookOption/></div><div className={styles.socialMedia_icon}><BiLogoLinkedin  /></div></li>
            </div>
           </ul>
        
        </div>
  )
}

export default JobSeekerProfileCard;