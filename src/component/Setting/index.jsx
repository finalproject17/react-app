// JobSeekerMyProfileEdit.js

import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import JobSeekerSidebar from "../JobSeekerSidebar";
import styles from "./Setting.module.css";

const Setting = () => {


  const [formData, setFormData] = useState({
    firstName: "",
    overview: "",
    email: "",

  });
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

 
  return (
    <Container fluid>
      <Row>
        <Col md={3}>

          <JobSeekerSidebar />
        </Col>
        <Col md={9}>
        <h4 className='mt-4 mb-5'>Setting</h4>

   
          <Form className={`${styles.formContainer}`}>
            <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
Old Password              </Form.Label>
              <Col sm={12}>
                <Form.Control
                  name="firstName"
                  value={formData.firstName}
                //   onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.firstName
                      ? "Enter Old Password"
                      : formData.firstName
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
                New Password
              </Form.Label>
              <Col sm={12}>
                <Form.Control
                  name="overview"
                  value={formData.overview}
                //   onChange={handleChange}
                  className={`${styles.jobSeekerInput} ${styles.inputField}`}
                  placeholder={
                    !formData.overview ? "Enter New Password" : formData.category
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
                New Password
              </Form.Label>
              <Col sm={12}>
                <Form.Control
                  name="overview"
                  value={formData.overview}
                //   onChange={handleChange}
                  className={`${styles.jobSeekerInput} ${styles.inputField}`}
                  placeholder={
                    !formData.overview ? "Confirm Password" : formData.category
                  }
                />
              </Col>
            </Form.Group>

           
        

            <div className="d-flex justify-content-end">
              <Button  variant="success">
                Save Changes
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Setting;
