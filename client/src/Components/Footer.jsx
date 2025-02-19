import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-white py-5">
      <Container>
        <Row className="gy-4">
          {/* About Section */}
          <Col md={4}>
            <h5>About Us</h5>
            <p className="text-white">
              We are a team of passionate developers building innovative solutions to empower businesses.
            </p>
          </Col>

          {/* Links Section */}
          <Col md={2}>
            <h5>Quick Links</h5>
            <ListGroup className="list-unstyled">
              <ListGroup.Item as="li" className="text-dark">
                <a href="#home" className="text-reset text-decoration-none">
                  Home
                </a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="text-dark">
                <a href="#services" className="text-reset text-decoration-none">
                  Services
                </a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="text-dark">
                <a href="#about" className="text-reset text-decoration-none">
                  About
                </a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="text-dark">
                <a href="#contact" className="text-reset text-decoration-none">
                  Contact
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Social Media Section */}
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset text-decoration-none fs-4"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset text-decoration-none fs-4"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset text-decoration-none fs-4"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset text-decoration-none fs-4"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>

          {/* Contact Section */}
          <Col md={3}>
            <h5>Contact Us</h5>
            <address className="text-white text-white">
              <strong>Address:</strong> 123 Tech Street, Innovation City, USA<br />
              <strong>Email:</strong> objmak@gmail.com<br />
              <strong>Phone:</strong> (+234) 9031270936
            </address>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-5 border-top pt-3">
          <Col className="text-center">
            <p className="text-white small mb-0">
              &copy; {new Date().getFullYear()} MayorTech. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;