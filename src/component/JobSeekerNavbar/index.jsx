import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Container, NavDropdown, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../contexts/authContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../store/Slices/usersSlice";

const JobSeekerNavbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);
  const { t, i18n } = useTranslation();
   const [User, setUser] = useState({});

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

 useEffect(() => {
   const fetchUserData = async () => {
     if (isLoggedIn) {
       const userId = localStorage.getItem("userId");
       if (userId) {
         const User = await dispatch(fetchUserById(userId));
         console.log("ressssssssssssssss", User.payload, userId);
         setUser(User.payload);
       }
     }
   };
   fetchUserData();
 }, [isLoggedIn, dispatch]);
  const user = localStorage.getItem("user");
         
  // console.log("this is navBaaaaaaaaaar",user);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ boxShadow: "0 0px 16px rgba(0,0,0,0.1)" }}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            src="/logo.svg"
            width="60%"
            className="d-inline-block align-top"
            alt="Careers logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="ml-auto p-3">
            <Link
              to="/home"
              className="nav-link text-success"
              activeClassName="active"
            >
              {t("Home")}
            </Link>
            <Link to="/jobs" className="nav-link" activeClassName="active">
              {t("Find jobs")}
            </Link>
            <Link to="/savedjobs" className="nav-link" activeClassName="active">
              {t("Saved Jobs")}
            </Link>
            <Link
              to="/candidates"
              className="nav-link"
              activeClassName="active"
            >
              {t("Candidates")}
            </Link>
            <Link to="/aboutus" className="nav-link" activeClassName="active">
              {t("About Us")}
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              style={{ paddingRight: "3rem" }}
              activeClassName="active"
            >
              {t("Contact")}
            </Link>
            {isLoggedIn ? (
              <>
                <NavDropdown
                  style={{}}
                  title={
                    <div className="d-flex align-items-center ">
                      <Image
                        src={
                          `${User.img}` ||
                          "../../../src/assets/images/userAvtar.svg"
                        }
                        roundedCircle
                        width="40"
                        className="me-3"
                      />

                      <Col
                        className="applicantInfo"
                        style={{ fontSize: "10px" }}
                        xs={3}
                      >
                        <h6 className="applicantName">
                          {t(`${User?.firstName} ${User?.lastName}`)}
                        </h6>

                        <span className="salery text-green">
                          {t("Your Profile")}
                        </span>
                      </Col>
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href={`/profile/${User?._id}`}>
                    {t("My Account")}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => logout()}>
                    {t("Logout")}
                  </NavDropdown.Item>
                  <NavDropdown.Item>{t("Settings")}</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Link
                  to="/signUp"
                  className="nav-link"
                  style={{
                    color: "#01A84D",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  variant="success"
                  className="nav-link"
                  style={{
                    color: "#01A84D",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Sign In
                </Link>
              </>
            )}
            <NavDropdown title={<FaGlobe size={24} />} id="language-dropdown">
              <NavDropdown.Item onClick={() => changeLanguage("en")}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage("ar")}>
                عربي
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default JobSeekerNavbar;
