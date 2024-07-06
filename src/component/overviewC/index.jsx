import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Form } from 'react-bootstrap';
import styles from './overview.module.css';
import { getAllUsersAction } from '../../store/Slices/usersSlice';

const Overview = () => { 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  console.log(user);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <Form>
      {/* <overvies userId= "" */}
  <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
                Overview
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                disabled
                  name="overview"
                  className={`${styles.jobSeekerInput} ${styles.inputField}`}
                  placeholder={ user?.overview
                    || "Please write a professional overviw" }
                  
                />
              </Col>
            </Form.Group>
    </Form>
  );
};

export default Overview;
