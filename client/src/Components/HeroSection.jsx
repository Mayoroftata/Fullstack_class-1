import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background styling */}
      <div className="hero-background" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <Container>
          <Row className="align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Col md={8} lg={6} className="text-center text-black">
              {/* Title */}
              <h1 className="display-3 fw-bold">Empowering Your Tech Vision</h1>
              
              {/* Subtitle */}
              <p className="lead my-4">
                Build scalable, secure, and innovative solutions with our cutting-edge technology stack.
              </p>
              
              {/* Call-to-Action Button */}
              <Button variant="outline-light" size="lg" className="px-5">
                <Link to="/signup" className='text-decoration-none btn btn-outline-dark'>Get Started</Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;