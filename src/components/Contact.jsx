// Contact.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCalendarWeek,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpg"; // Replace with your image path

const Contact = () => {
  return (
    <Container className="py-5" style={{ maxWidth: "700px" }}>
      <div className="text-center mb-4">
        <img
          src={profileImg}
          alt="John Carter"
          className="rounded-circle mb-3"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
        <h4 className="fw-bold mb-0">Dr. Usman Attique</h4>
        <p className="text-muted">
          Ophthalmologist | Vitreoretinal Specialist | CEO of Atiq Eye Care{" "}
        </p>
      </div>

      <Row className="mb-3">
        <Col xs={1}>
          <FaMapMarkerAlt className="text-primary mt-1" />
        </Col>
        <Col>
          <strong>Address:</strong>
          <div className="text-muted">
            Flat 205,209 2nd Floor
            <br />
            Said Anwar Medical Center
            <br />
            Dabgari Garden Peshawar Cantt
            <br />
            Pakistan.
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={1}>
          <FaClock className="text-primary mt-1" />
        </Col>
        <Col>
          <strong>Timing:</strong>
          <div className="text-muted">3.30 PM to 8 PM.</div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={1}>
          <FaCalendarWeek className="text-primary mt-1" />
        </Col>
        <Col>
          <strong>Working Days:</strong>
          <div className="text-muted">Monday to Friday </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={1}>
          <FaPhone className="text-primary mt-1" />
        </Col>
        <Col>
          <strong>Phone:</strong>
          <div className="text-muted">0332-890 0093</div>
        </Col>
      </Row>

      <Row>
        <Col xs={1}>
          <FaEnvelope className="text-primary mt-1" />
        </Col>
        <Col>
          <strong>E-mail:</strong>
          <div className="text-muted">atiqeyecare@gmail.com</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
