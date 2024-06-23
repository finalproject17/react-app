// JobSeekerMyProfileEdit.js

import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styles from "./JobSeekerMyProfileEdit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction, updateUser } from "../../store/Slices/usersSlice";
import JobSeekerSidebar from "../JobSeekerSidebar";

const JobSeekerMyProfileEdit = () => {
  const usersArr = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    overview: "",
    email: "",
    phone: "",
    category: "",
    experienceLevel: "",
    desiredJobType: "",
    qualifications: "",
    facebook: "",
    linkedin: "",
    country: "",
    city: "",
    completeAddress: "",
  });

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  useEffect(() => {
    if (usersArr && usersArr.length > 0) {
      const user = usersArr[0];
      setFormData({
        firstName: user.firstName || "",
        overview: user.overview || "",
        email: user.email || "",
        phone: user.phone || "",
        category: user.category || "",
        experienceLevel: user.experienceLevel || "",
        desiredJobType: user.desiredJobType || "",
        qualifications: user.qualifications || "",
        facebook: user.facebook || "",
        linkedin: user.linkedin || "",
        country: user.country || "",
        city: user.city || "",
        completeAddress: user.completeAddress || "",
      });
    }
  }, [usersArr]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    dispatch(updateUser(formData));
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>

          <JobSeekerSidebar />
        </Col>
        <Col md={9}>
        <h4 className='mt-4 mb-5'>My Profile</h4>

          <div className="d-flex align-items-center mb-5">
            <img
              src="logo-10.svg"
              alt="Company Logo"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <Button className={`${styles.myButton}`} variant="success">
              Upload new photo
            </Button>
            <Link className="ms-2 text-danger">Delete</Link>
          </div>

          <Form className={`${styles.formContainer}`}>
            <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
                First Name
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.firstName
                      ? "Enter your first name"
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
                Overview
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  name="overview"
                  value={formData.overview}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput} ${styles.inputField}`}
                  placeholder={
                    !formData.overview ? "Tell us about you" : formData.category
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
                Email Address
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
                Phone
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.phone
                      ? "Enter your phone number"
                      : formData.phone
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
                Category
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  as="select"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.category ? "Select category" : formData.category
                  }
                >
                  <option>Programming</option>
                  <option>Health Care</option>
                  <option>Finance</option>
                  <option>Accounting</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
                Experience Level
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  as="select"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.experienceLevel
                      ? "Select Experience Level"
                      : formData.experienceLevel
                  }
                >
                  <option>Junior</option>
                  <option>Intern</option>
                  <option>Mid-Level</option>
                  <option>Senior</option>
                  <option>Manager</option>
                  <option>Director</option>
                  <option>C-Level</option>
                  <option>Expert</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
                Desired Job Type
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  as="select"
                  name="desiredJobType"
                  value={formData.desiredJobType}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.desiredJobType
                      ? "Select Desired Job Type"
                      : formData.desiredJobType
                  }
                >
                  <option>Full Time </option>
                  <option>Part Time</option>
                  <option>Temporary</option>
                  <option>Freelance</option>
                  <option>Internship</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
                Qualifications
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  as="select"
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.qualifications
                      ? "Select Qualifications"
                      : formData.qualifications
                  }
                >
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>Doctoral Degree</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <h5 className="mt-4 mb-4">Social Media</h5>

            <Form.Group className="mb-4 position-relative">
              <Form.Label
                className={`position-absolute bg-white ${styles.inputLabel}`}
                column
                sm={2}
              >
                Facebook
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.facebook
                      ? "Enter your facebook profile link"
                      : formData.facebook
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
                Linkedin
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.linkedin
                      ? "Enter your linkedin profile link"
                      : formData.linkedin
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
                Country
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.country
                      ? "Enter your country name"
                      : formData.country
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
                City
              </Form.Label>
              <Col sm={11}>

                <Form.Control
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.city ? "Enter your city name" : formData.city
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
                Complete Address
              </Form.Label>
              <Col sm={11}>

                <Form.Control
                  name="completeAddress"
                  value={formData.completeAddress}
                  onChange={handleChange}
                  className={`${styles.jobSeekerInput}`}
                  placeholder={
                    !formData.completeAddress
                      ? "Enter your complete address"
                      : formData.completeAddress
                  }
                />
              </Col>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button onClick={handleSaveChanges} variant="success">
                Save Changes
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JobSeekerMyProfileEdit;
