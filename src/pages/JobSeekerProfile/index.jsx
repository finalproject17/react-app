// JobSeekerProfile.jsx
import { Container, Row, Col } from 'react-bootstrap';
import JobSeekerProfileCard from '../../component/jobSeekerProfileCard';
import JobSeekerProfileCardPartTwo from '../../component/jobSeekerProfileCardPartTwo';
import Overview from '../../component/overviewC';
import Education from '../../component/EduCard';
import Work from '../../component/EduCard';
import SkillsList from '../../component/SkillsList';
import styles from './style.module.css';

const JobSeekerProfile = () => {
  return (
    <div>
      <header className={styles.header}></header>
      <Container fluid>
        <Row>
          <Col md={3}>
            <JobSeekerProfileCard />
            <JobSeekerProfileCardPartTwo />
          </Col>
          <Col className={styles.mainContent}>
            <Overview />
            <Education name={'Education'}/>
            <Work name={'Work & Experience'} />
            <SkillsList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobSeekerProfile;
