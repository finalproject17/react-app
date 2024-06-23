import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Image,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../contexts/authContext";
import { UilEllipsisV } from "@iconscout/react-unicons";
const JobSeekerNavbar = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ boxShadow: "0 0px 16px rgba(0,0,0,0.1)" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="logo.svg"
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
            <Nav.Link href="/home" className="text-success">
              Home
            </Nav.Link>
            <Nav.Link href="candidates">Candidates</Nav.Link>
            <Nav.Link href="about-us">About Us</Nav.Link>
            <Nav.Link style={{ paddingRight: "2rem" }} href="contact">
              Contact
            </Nav.Link>
            
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
                <Nav.Link href="signUp" className="text-success">
                  Register
                </Nav.Link>
                <Button variant="outline-success" className="ml-2" href="login">
                  Login
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default JobSeekerNavbar;

