import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { fetchUser } from '../../store/Slices/usersSlice';
import styles from './skillsList.module.css';

const Skills = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Card className={styles.card}>
      <Card.Body className={styles['card-body']}>
        <Card.Title className={styles['card-title']}>Skills</Card.Title>
        <div className={styles.skills}>
          {user?.skills?.map((skill, index) => (
            <div key={index} className={styles.skill}>{skill}</div>
          )) || "No skills available"}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Skills;
