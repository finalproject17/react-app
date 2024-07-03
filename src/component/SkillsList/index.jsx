import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form } from 'react-bootstrap';
import { getAllUsersAction } from '../../store/Slices/usersSlice';
import styles from './skillsList.module.css';

const Skills = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getAllUsersAction(userId));
  }, [dispatch, userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const placeholderText = user?.skills?.length > 0
    ? user.skills.map((skill, index) => skill).join(', ')
    : "No skills available";

  return (
    <Form>
      <Form.Group className="mb-4 position-relative">
        <Form.Label className={`position-absolute bg-white ${styles.inputLabel}`} column sm={2}>
          Skills
        </Form.Label>
        <Col sm={11}>
          <Form.Control
            disabled
            name="overview"
            className={`${styles.jobSeekerInput} ${styles.inputField}`}
            placeholder={placeholderText}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Skills;
