import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { fetchUser } from '../../store/Slices/usersSlice';
import styles from './overview.module.css';

const Overview = ({ userId }) => {
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
        <Card.Title className={styles['card-title']}>Overview</Card.Title>
        <Card.Text className={styles['card-text']}>
          {user?.overview || "No overview available"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Overview;
