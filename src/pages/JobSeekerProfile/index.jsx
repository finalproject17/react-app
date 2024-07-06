import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobSeekerProfileCard from '../../component/jobSeekerProfileCard';
import Overview from '../../component/overviewC';
import Education from '../../component/EduCard';
import Work from '../../component/EduCard';
import SkillsList from '../../component/SkillsList';
import styles from './style.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../store/Slices/usersSlice';

const JobSeekerProfile = () => {
  // const [userr , setUserr] = useState({})
  const user = useSelector((state)=>state.users.user)
  // const dispatch = useDispatch()
  const {userId} = useParams()
  console.log(userId);
  


  // useEffect(()=>{
  //  async function getUser(){
  //  const {payload} = await dispatch(fetchUserById(userId))
  //  console.log(payload);
  //  setUserr(payload)
  //   }
  //   getUser()
  // },[userId])
  if(!user) return <p>Load</p>
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