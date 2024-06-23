import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CompanyNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ boxShadow: "0 0px 16px rgba(0,0,0,0.1)" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
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
            <Link className="nav-link text-success" to="/home">Home</Link>
            <Link className="nav-link" to="/candidates">Candidates</Link>
            <Link className="nav-link" to="/about-us">About Us</Link>
            <Link className="nav-link" to="/contact" style={{ paddingRight: "3rem" }}>Contact</Link>
            <Link className="nav-link text-decoration-underline" to="/register" style={{ color: "#01A84D", fontWeight: "bold" }}>Register</Link>
            <Button variant="success" className="m-0">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CompanyNavbar;
