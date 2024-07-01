import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSeekerSidebar from "../JobSeekerSidebar";
import styles from "./Setting.module.css";
import { changePassword } from "../../store/Slices/usersSlice";

const Setting = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.users);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(formData));
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <JobSeekerSidebar />
        </Col>
        <Col md={9}>
          <h4 className="mt-4 mb-5">Setting</h4>

          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form className={`${styles.formContainer}`} onSubmit={handleSubmit}>
            <Form.Group className="mb-4 position-relative">
              <Form.Label className={`position-absolute bg-white ${styles.inputLabel}`} column sm={2}>
                Old Password
              </Form.Label>
              <Col sm={12}>
                <Form.Control
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder="Enter Old Password"
                  type="password"
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Label className={`position-absolute bg-white ${styles.inputLabel}`} column sm={2}>
                New Password
              </Form.Label>
              <Col sm={12}>
                <Form.Control
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput} ${styles.inputField}`}
                  placeholder="Enter New Password"
                  type="password"
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Label className={`position-absolute bg-white ${styles.inputLabel}`} column sm={2}>
                Confirm Password
              </Form.Label>
              <Col sm={12}>
                <Form.Control
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput} ${styles.inputField}`}
                  placeholder="Confirm Password"
                  type="password"
                />
              </Col>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="success" type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Setting;
