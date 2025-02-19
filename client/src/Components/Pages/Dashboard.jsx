import React, { useEffect } from 'react'
import UserNavBar from '../UserNavBar'
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
 verifyToken()
 const interval = setInterval(verifyToken, 6000);
 return () => clearInterval(interval)
  },[navigate])

  const verifyToken = () => {
    const storedToken = localStorage.getItem("token");
    
    if (!storedToken) {
      console.warn("No token found. Redirecting to login...");
      navigate("/signin");
      return;
    }

    let tokenToBeVerified;
    try {
      tokenToBeVerified = JSON.parse(storedToken);
    } catch (error) {
      console.error("Invalid token format:", error);
      localStorage.removeItem("token");
      navigate("/signin");
      return;
    }

    axios.post("https://project-1-backend-9424.onrender.com/verifytoken", { token: tokenToBeVerified })
      .then((response) => {
        const decoded = response.data.decoded;
        if (!decoded || decoded.exp < Math.floor(Date.now() / 1000)) {
          console.warn("Token expired. Redirecting to login...");
          localStorage.removeItem("token");
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.error("Token verification failed:", err);
        localStorage.removeItem("token");
        navigate("/signin");
      });
  };
  
  return (
    <div>
        <UserNavBar/>
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
                </Col>
              </Row>
            </Container>
          </div>
      </section>
    </div>
  )
}

export default Dashboard