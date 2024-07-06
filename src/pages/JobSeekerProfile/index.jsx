import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobSeekerProfileCard from '../../component/jobSeekerProfileCard';
import Overview from '../../component/overviewC';
// import Education from '../../component/EduCard';
// import Work from '../../component/WorkCard'; // Corrected import for Work component
import SkillsList from '../../component/SkillsList';
import styles from './style.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../store/Slices/usersSlice';
import EduCard from '../../component/EduCard';

const JobSeekerProfile = () => {
  const [userState, setUserState] = useState({});
  // const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    async function getUser() {
      console.log("Fetching user with ID:", userId);
      const {payload} = await dispatch(fetchUserById(userId));
      console.log("Payload received:", payload);
      setUserState(payload);
    }
    getUser();
  }, [userId, dispatch]);

  useEffect(() => {
    console.log("Updated userState:", userState);
  }, [userState]);

  console.log("Component rendering with userState:", userState);

  if (!userState || !userState.education || !userState.workAndExperience) return <p>Loading...</p>;

  return (
    <>
      <div>
        <header className={styles.header}></header>
      </div>
      <Container className='mt-5'>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <JobSeekerProfileCard />
          </Col>
          <Col className='mt-3' xs={12} sm={6} md={9}>
            <Overview />
            {userState.education[0] && (
              <EduCard 
                name={'Education'} 
                title={userState.education[0].title} 
                academy={userState.education[0].academy} 
                description={userState.education[0].description}
                from={userState.education[0].from} 
                to={userState.education[0].to} 
              />
            )}
            {userState.workAndExperience[0] && (
              <EduCard 
                name={'Work & Experience'} 
                title={userState.workAndExperience[0].title} 
                academy={userState.workAndExperience[0].academy} 
                description={userState.workAndExperience[0].description}
                from={userState.workAndExperience[0].from} 
                to={userState.workAndExperience[0].to} 
              />
            )}
            <SkillsList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobSeekerProfile;
