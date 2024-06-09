import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const JobSeekerNavbar = () => {
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
            <Nav.Link href="home" className="text-success">
              Home
            </Nav.Link>
            <Nav.Link href="candidates">Candidates</Nav.Link>
            <Nav.Link href="about-us">About Us</Nav.Link>
            <Nav.Link style={{ paddingRight: "3rem" }} href="contact">
              Contact
            </Nav.Link>
            <Nav.Link
              style={{ color: "#01A84D", fontWeight: "bold" }}
              className="text-decoration-underline"
              href="signUp"
            >
              Register
            </Nav.Link>
            <Button variant="success" className="ml-2">
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default JobSeekerNavbar;
