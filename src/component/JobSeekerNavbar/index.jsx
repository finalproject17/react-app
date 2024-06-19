import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";

const JobSeekerNavbar = () => {
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
            <Link
              to="/signUp"
              className="nav-link"
              style={{ color: "#01A84D", fontWeight: "bold", textDecoration: "underline" }}
            >
              Register
            </Link>
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
