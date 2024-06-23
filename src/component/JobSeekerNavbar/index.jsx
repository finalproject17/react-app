import React from "react";
import { Navbar, Nav, Button, Container, NavDropdown, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../contexts/authContext";

const JobSeekerNavbar = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ boxShadow: "0 0px 16px rgba(0,0,0,0.1)" }}
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
            <Link to="/home" className="nav-link text-success"> {/* Replace Nav.Link with Link */}
              Home
            </Link>
            <Link to="/jobs" className="nav-link">
              Find jobs
            </Link>
            <Link to="/savedjobs" className="nav-link">
              Saved Jobs
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="/contact" className="nav-link" style={{ paddingRight: "3rem" }}>
              Contact
            </Link>
            {isLoggedIn ? (
              <>
                <NavDropdown
                  style={{}}
                  title={
                    <div className="d-flex align-items-center ">
                      <Image
                        src="https://cdn.helperplace.com/misc/jpi/4/Couple%202%20kids%202-sm.webp"
                        roundedCircle
                        width="40"
                        className="me-3"
                      />
                      
                      <Col
                        className="applicantInfo"
                        style={{ fontSize: "10px" }}
                        xs={3}
                      >
                        <h6 className="applicantName">Madonna Adel</h6>
                        <span className="salery text-green">Your Profile</span>
                      </Col>
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#account">
                    My Account
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={() => logout()}>
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    Settings
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                 <Link
              to="/signUp"
              className="nav-link"
              style={{ color: "#01A84D", fontWeight: "bold", textDecoration: "underline" }}
            >
              Register
            </Link>
            <Link
            to="/login"
                          variant="success"
              className="m-0">
              
              Sign In
            </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default JobSeekerNavbar;
