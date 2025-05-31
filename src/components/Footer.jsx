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

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-start">
          {/* Left side - copyright */}
          <Col md={6} className="mb-3 mb-md-0 text-center text-md-start">
            <p className="mb-0">© 2025. All rights reserved.</p>
          </Col>

          {/* Right side - contact info */}
          <Col md={6}>
            <div className="text-md-end text-center">
              <h6 className="fw-bold mb-1">Dr. Usman Attique</h6>
              <p className="mb-2 small">
                Ophthalmologist | Vitreoretinal Specialist
              </p>

              <div className="d-flex justify-content-md-end justify-content-center align-items-center mb-1">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <small>
                  Flat 205,209 2nd Floor
                  <br />
                  Said Anwar Medical Center
                  <br />
                  Dabgari Garden Peshawar Cantt
                </small>
              </div>

              <div className="d-flex justify-content-md-end justify-content-center align-items-center mb-1">
                <FaClock className="me-2 text-primary" />
                <small>3:30 PM – 8:00 PM</small>
              </div>

              <div className="d-flex justify-content-md-end justify-content-center align-items-center mb-1">
                <FaCalendarWeek className="me-2 text-primary" />
                <small>Mon – Fri</small>
              </div>

              <div className="d-flex justify-content-md-end justify-content-center align-items-center mb-1">
                <FaPhone className="me-2 text-primary" />
                <small>0332-890 0093</small>
              </div>

              <div className="d-flex justify-content-md-end justify-content-center align-items-center">
                <FaEnvelope className="me-2 text-primary" />
                <small>atiqeyecare@gmail.com hai</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
