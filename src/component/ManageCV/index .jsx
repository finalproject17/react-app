import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Card, ListGroup, Badge, InputGroup } from 'react-bootstrap';
import JobSeekerSidebar from '../JobSeekerSidebar'
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageCV = () => {
    return (


      <Container fluid>
             <Row>
              <Col md={3}>
                <JobSeekerSidebar />
               </Col>
               <Col md={9}>
                 <h4 className="mt-4 mb-5">Manage CV</h4>
      <Container>
            <UploadCV />
            <Education />
            <WorkExperience />
            <Skills />
            <Button variant="success" className="mt-3">Save Changes</Button>
        </Container>
                 </Col>
                </Row>
          </Container>

    
    );
};

const UploadCV = () => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Upload CV</Card.Title>
                <Form>
                    <InputGroup className="mb-3">
                        <Form.Control type="file" />
                        <Button variant="outline-secondary">Upload</Button>
                    </InputGroup>
                    <p className="mt-2">
                        <Badge bg="success">John Doe.pdf</Badge> <Button variant="link" className="text-danger">Delete</Button>
                    </p>
                </Form>
            </Card.Body>
        </Card>
    );
};

const Education = () => {
    const [educationList, setEducationList] = useState([]);

    const addEducation = () => {
        setEducationList([...educationList, {}]);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Education</Card.Title>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Academy</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>From</Form.Label>
                            <Form.Control as="select">
                                {/* Add year options */}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>To</Form.Label>
                            <Form.Control as="select">
                                {/* Add year options */}
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Descriptions</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" onClick={addEducation}>Add More</Button>
                </Form>
                <ListGroup className="mt-3">
                    {educationList.map((education, index) => (
                        <ListGroup.Item key={index}>
                            {/* Render education details here */}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

const WorkExperience = () => {
    const [workList, setWorkList] = useState([]);

    const addWorkExperience = () => {
        setWorkList([...workList, {}]);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Work & Experience</Card.Title>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>From</Form.Label>
                            <Form.Control as="select">
                                {/* Add year options */}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>To</Form.Label>
                            <Form.Control as="select">
                                {/* Add year options */}
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Descriptions</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" onClick={addWorkExperience}>Add More</Button>
                </Form>
                <ListGroup className="mt-3">
                    {workList.map((work, index) => (
                        <ListGroup.Item key={index}>
                            {/* Render work experience details here */}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

const Skills = () => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Skills</Card.Title>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control type="text" placeholder="Add skills separated by commas" />
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default ManageCV;

