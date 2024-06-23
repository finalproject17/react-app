import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import JobSeekerCard from "./../../component/JobSeekerCard/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../store/Slices/usersSlice";
import JobSeekersFilter from "../../component/JobSeekersFilter";

const Candidates = () => {
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.users.users);
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCandidates(candidates);
  }, [candidates]);

  const handleFilter = (filteredCandidates) => 
    {
    setFilteredCandidates(filteredCandidates);
  
    };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "240px",
          backgroundColor: "#FAFCF8",
          marginBottom: "2rem",
        }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <h4>Browse Candidates</h4>
        <p>Home / Candidates</p>
      </div>
      <Container>
        <Row>
          {/* Sidebar */}
          <Col md={3}>
            <JobSeekersFilter candidates={candidates} onFilter={handleFilter} />
          </Col>

          {/* Main Content */}
          <Col md={9}>
            <Row>
              <p>All {filteredCandidates.length} candidates found</p>
              {filteredCandidates.map((candidate, index) => (
                <Col
                  key={index}
                  md={6} // For larger screens, we set md={6}
                  lg={4}
                   // For extra large screens, we set lg={4}
                  className="d-flex align-items-center justify-content-center flex-wrap"
                >
                  <JobSeekerCard candidate={candidate} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Candidates;
