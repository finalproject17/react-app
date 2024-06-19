import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import styles from "./JobSeekerMyProfileEdit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction, updateUser } from "../../store/Slices/usersSlice";

const CompanyForm = () => {
  const usersArr = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    overview: "",
    email: "",
    phone: "",
    category: "",
    // availability: "",
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

  const handleSaveChanges = () => {
    // Dispatch updateUser action when Save Changes button is clicked
    dispatch(updateUser(formData)); // Pass formData to updateUser action
  };

  useEffect(() => {
    if (usersArr && usersArr.length > 0) {
      // Assuming you want to use the first user in the array
      const user = usersArr[0];
      setFormData({
        firstName: user.firstName || "",
        overview: user.overview || "",
        email: user.email || "",
        phone: user.phone || "",
        category: user.category || "",
        availability: user.availability || "",
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

  useEffect(() => {
    if (usersArr && usersArr.length > 0) {
      const user = usersArr[0];
      setFormData((prevFormData) => ({ ...prevFormData, ...user }));
    }
  }, [usersArr]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container className="mt-4">
      <Row className="mb-5">
        <Col>
          <div className="d-flex align-items-center">
            <img
              src="logo-10.svg"
              alt="Company Logo"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <Button className={`${styles.myButton}`} variant="success">Upload new photo</Button>
            <Link className="ms-2 text-danger">Delete</Link>
          </div>
        </Col>
      </Row>

      <Form>
        <Form.Group className="mb-4 position-relative">
          <Form.Label
            className={`position-absolute bg-white ${styles.inputLabel}`}
            column
            sm={2}
          >
            First Name
          </Form.Label>
          <Col className="w-100" sm={10}>
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
          <Col className="w-100" sm={10}>
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
          <Col className="w-100" sm={10}>
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
          <Col className="w-100" sm={10}>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`${styles.jobSeekerInput}`}
              placeholder={
                !formData.phone ? "Enter your phone number" : formData.phone
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
          <Col className="w-100" sm={10}>
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

        {/* <Form.Group className="mb-4 position-relative">
          <Form.Label
            className={`position-absolute bg-white ${styles.inputLabel}`}
            column
            sm={2}
          >
            Availability
          </Form.Label>
          <Col className="w-100" sm={10}>
            <Form.Control
              as="select"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className={`${styles.jobSeekerInput}`}
              placeholder={
                !formData.availability
                  ? "Select availability"
                  : formData.availability
              }
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Temporary</option>
              <option>Freelance</option>
              <option>Internship</option>
            </Form.Control>
          </Col>
        </Form.Group> */}

        <Form.Group className="mb-4 position-relative">
          <Form.Label
            className={`position-absolute bg-white ${styles.inputLabel}`}
            column
            sm={2}
          >
            Experience Level
          </Form.Label>
          <Col className="w-100" sm={10}>
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
          <Col className="w-100" sm={10}>
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
          <Col className="w-100" sm={10}>
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
          <Col className="w-100" sm={10}>
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
          <Col className="w-100" sm={10}>
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

        <h5 className="mt-4 mb-4">Location</h5>

        <Form.Group className="mb-4 position-relative">
          <Form.Label
            className={`position-absolute bg-white ${styles.inputLabel}`}
            column
            sm={2}
          >
            Country
          </Form.Label>
          <Col className="w-100" sm={10}>
            <Form.Control
              as="select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`${styles.jobSeekerInput}`}
              placeholder={
                !formData.country ? "Select country" : formData.country
              }
            >
              {[
                "Egypt",
                "Saudi Arabia",
                "United Arab Emirates",
                "Qatar",
                "Kuwait",
                "Bahrain",
                "Oman",
                "Iraq",
                "Jordan",
                "Lebanon",
                "Syria",
                "Yemen",
                "Libya",
                "Tunisia",
                "Algeria",
                "Morocco",
                "Palestine",
                "Sudan",
                "Somalia",
                "Mauritania",
                "Djibouti",
                "Comoros",
              ].map((city) => (
                <option key={city}>{city}</option>
              ))}
            </Form.Control>
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
          <Col className="w-100" sm={10}>
            <Form.Control
              as="select"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`${styles.jobSeekerInput}`}
            >
              {[
                "Aswan",
                "Luxor",
                "Sharm El Sheikh",
                "Giza",
                "Alexandria",
                "Cairo",
                "Hurghada",
                "Helwan",
                "Sohag",
                "Quesna",
                "Al Khankah",
                "el-Arab",
                "Badr",
                "Sadat City",
                "Obour",
                "New Cairo",
                "6th of October City",
                "Banha",
                "Shibin El Kom",
                "Qalyub",
                "Marsa Matruh",
                "Arish",
                "Kafr El Sheikh",
                "El-Mahalla El-Kubra",
                "Damietta",
                "Assiut",
                "Qena",
                "Minya",
                "Beni Suef",
                "Faiyum",
              ].map((city) => (
                <option key={city}>{city}</option>
              ))}
            </Form.Control>
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
          <Col className="w-100" sm={10}>
            <Form.Control
              type="tel"
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
    </Container>
  );
};

export default CompanyForm;
