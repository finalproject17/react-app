import React, { useEffect, useState } from "react";
import { Container, Row, Col ,Button,Modal} from "react-bootstrap";
import JobSeekerCard from "./../../component/JobSeekerCard/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../store/Slices/usersSlice";
import JobSeekersFilter from "../../component/JobSeekersFilter";
import styles from "./candidate.module.css";


const Candidates = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.users.users);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const candidatesPerPage = 9;

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCandidates(candidates);
  }, [candidates]);

  const handleFilter = (filteredCandidates) => {
    setFilteredCandidates(filteredCandidates);
    setCurrentPage(1);
  };

  const indexOfLastCandidate = currentPage * candidatesPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
  const currentCandidates = filteredCandidates.slice(indexOfFirstCandidate, indexOfLastCandidate);

  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          <Col md={3}>
            <Button
              variant="success"
              className={`${styles.filterButton} `}
              onClick={handleShow}
            >
              Filter
            </Button>
            <div className={styles.filter}>
              <JobSeekersFilter
                candidates={candidates}
                onFilter={handleFilter}
              />
            </div>
          </Col>
          <Col md={9}>
            <Row>
              <p>All {filteredCandidates.length} candidates found</p>
              {currentCandidates.map((candidate, index) => (
                <Col
                  key={index}
                  md={6}
                  lg={4}
                  className="d-flex align-items-center justify-content-center flex-wrap"
                >
                  <JobSeekerCard candidate={candidate} />
                </Col>
              ))}
            </Row>
            <div className="pagination">
              <a
                href="#"
                onClick={() => handleClick(currentPage - 1)}
                className="prev"
                style={{ pointerEvents: currentPage === 1 ? "none" : "auto" }}
              >
                &lt;
              </a>
              {[...Array(totalPages)].map((_, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => handleClick(index + 1)}
                  className={`page ${
                    index + 1 === currentPage ? "active" : ""
                  }`}
                >
                  {index + 1}
                </a>
              ))}
              <a
                href="#"
                onClick={() => handleClick(currentPage + 1)}
                className="next"
                style={{
                  pointerEvents: currentPage === totalPages ? "none" : "auto",
                }}
              >
                &gt;
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <JobSeekersFilter candidates={candidates} onFilter={handleFilter} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Candidates;
