import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobSeekerProfileCard from '../../component/jobSeekerProfileCard';
import Overview from '../../component/overviewC';
import Education from '../../component/EduCard';
import Work from '../../component/EduCard';
import SkillsList from '../../component/SkillsList';
import styles from './style.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const JobSeekerProfile = () => {
  const user = useSelector((state)=>state.users.user)
  console.log(user.education[0].title);
  const {userId} = useParams();
  console.log(userId);
  return (
    <>
      <div>
        <header className={styles.header}></header>
      </div>
      <Container className='mt-5'>
        <Row >
          <Col  xs={12} sm={6} md={3}>
            <JobSeekerProfileCard />
          </Col>
          <Col className='mt-3' xs={12} sm={6} md={9}>
            <Overview   />
            <Education name={'Education'} title={user.education[0].title} academy={ user.education[0].academy} description={user.education[0].description}
            from={user.education[0].from}   to ={user.education[0].to} />
             <Education name={'Work & Experience'} title={user.workAndExperience[0].title} academy={ user.workAndExperience[0].academy} description={user.workAndExperience[0].description}
            from={user.workAndExperience[0].from}   to ={user.workAndExperience[0].to} />
            {/* <Work name={'Work & Experience'} /> */}
            <SkillsList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobSeekerProfile;