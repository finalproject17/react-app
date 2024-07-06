import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobSeekerProfileCard from '../../component/jobSeekerProfileCard';
import Overview from '../../component/overviewC';
import Education from '../../component/EduCard';
import Work from '../../component/EduCard';
import SkillsList from '../../component/SkillsList';
import styles from './style.module.css';
import { useParams } from 'react-router-dom';

const JobSeekerProfile = () => {
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
            <Overview  />
            <Education name={'Education'} />
            <Work name={'Work & Experience'} />
            <SkillsList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobSeekerProfile;
