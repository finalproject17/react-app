import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import JobSeekerSidebar from '../JobSeekerSidebar'

export default function ManageCV () {
  return (
    <>
    <Container fluid>
      <Row>
        <Col md={3}>
          <JobSeekerSidebar />
        </Col>
        <Col md={9}>
          <h4 className="mt-4 mb-5">Manage CV</h4>
          </Col>
          </Row>
    </Container>
    </>
    )
}
