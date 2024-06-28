import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../store/Slices/usersSlice';
import { useParams } from 'react-router-dom';
import styles from './style.module.css'; 
import EduCard from '../EduCard/index'

// Components
import PrimaryButton from '../primaryButton';
import JobSeekerProfileItem from '../jobSeekerProfileItem';
import { SlLocationPin } from 'react-icons/sl';
import { CgWorkAlt } from 'react-icons/cg';
import { CgProfile } from 'react-icons/cg';
import { BiBookmarkAlt } from 'react-icons/bi';
import { GoClock } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { TbMail } from 'react-icons/tb';
import { GrFacebookOption } from 'react-icons/gr';
import { BiLogoLinkedin } from 'react-icons/bi';

const JobSeekerProfileCard = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector((state) => state.users.user);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        dispatch(fetchUserById(userId));
    }, [dispatch, userId]);

    // useEffect(() => {
    //     console.log("Qualifications:", user.qualifications); // Adjust this according to your data structure
    // }, [user]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (!user) return <div>No user data available</div>;

    return (
        <div className={styles.mainCard}>
            <div className={styles.mainCard_userImg}><img src={user.profilePhoto || "/default-profile.jpg"} alt="userProfile" /></div>
            <div className={styles.user}>
                <div className={styles.userDetails}>
                    <div className={styles.userDetails_name}>{user.firstName} {user.lastName}</div>
                    <div className={styles.userDetails_jobTitle}>{user.category}</div>
                </div>
                <div><PrimaryButton name={'Download CV'} className={styles.btn} /></div>
            </div>
            <ul>
                <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' backgroundColor={'var(--border02)'} content={`${user.country}, ${user.city}`} icon={SlLocationPin} /></li>
                <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content={user.category} backgroundColor={'var(--border03)'} icon={CgWorkAlt} /></li>
                <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content={user.experienceLevel} backgroundColor={'var(--border03)'} icon={CgProfile} /></li>
                <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content={user.qualifications} backgroundColor={'var(--border03)'} icon={BiBookmarkAlt} /></li>
                <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content={user.desiredJobType} backgroundColor={'var(--border03)'} icon={GoClock} /></li>
            </ul>
            <ul >
                <li><div className={styles.contact_section_text}>Contact Info</div></li>
                <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content={user.phone} backgroundColor={'var(--border03)'} icon={FiPhoneCall} /></li>
                <li><JobSeekerProfileItem width='15.313rem' height='2.75rem' content={user.email} backgroundColor={'var(--border03)'} icon={TbMail} /></li>
            </ul>
            <ul>
                <li><div className={styles.contact_section_text}>Social Media</div></li>
                <li className={styles.socialMedia_icons}>
                    <div className={styles.socialMedia_icon}><GrFacebookOption /></div>
                    <div className={styles.socialMedia_icon}><BiLogoLinkedin /></div>
                </li>
                {/* <li>
    <EduCard qualifications={user.qualifications} name="Qualifications" />
</li> */}
            </ul>
        </div>
    );
};

export default JobSeekerProfileCard;