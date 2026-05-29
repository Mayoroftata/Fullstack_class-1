import { useEffect, useCallback } from 'react';
import UserNavBar from '../Components/UserNavBar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const verifyToken = useCallback(() => {
        const storedToken = localStorage.getItem("token");

        if (!storedToken) {
            navigate("/signin");
            return;
        }

        let tokenToBeVerified;
        try {
            tokenToBeVerified = JSON.parse(storedToken);
        } catch {
            tokenToBeVerified = storedToken;
        }

        axios.post("https://project-1-backend-9424.onrender.com/verifytoken", { token: tokenToBeVerified })
            .then((response) => {
                const decoded = response.data.decoded;
                if (!decoded || decoded.exp < Math.floor(Date.now() / 1000)) {
                    localStorage.removeItem("token");
                    navigate("/signin");
                }
            })
            .catch((err) => {
                console.error("Token verification failed:", err);
                localStorage.removeItem("token");
                navigate("/signin");
            });
    }, [navigate]);

    useEffect(() => {
        verifyToken();
    }, [verifyToken]);

    return (
        <div>
            <UserNavBar />

            {/* Hero Section */}
            <section className="hero-section py-5" style={{
                backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Tech+Background')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                position: 'relative'
            }}>
                <div className="hero-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.65)'
                }}></div>

                <Container className="position-relative" style={{ zIndex: 2 }}>
                    <Row className="align-items-center justify-content-center text-center" style={{ minHeight: '85vh' }}>
                        <Col md={10} lg={8}>
                            <h1 className="display-3 fw-bold mb-4">
                                Welcome back, <span className="text-warning">Makinde</span>!
                            </h1>
                            <p className="lead fs-4 mb-5">
                                Empowering your tech vision with cutting-edge solutions.
                                Let&apos;s build something amazing today.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill fw-bold">
                                    Get Started
                                </Button>
                                <Button variant="outline-light" size="lg" className="px-5 py-3 rounded-pill fw-bold">
                                    Watch Demo
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-5 bg-light">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="display-5 fw-bold">Why Choose Us?</h2>
                            <p className="lead text-muted">Powerful tools to help you succeed</p>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {[
                            { title: "Fast & Secure", desc: "Enterprise-grade security with lightning-fast performance." },
                            { title: "Scalable Solutions", desc: "Grow without limits. Built to handle any scale." },
                            { title: "24/7 Support", desc: "Expert support team always ready to help you." },
                            { title: "Innovation First", desc: "Stay ahead with the latest technology stack." }
                        ].map((feature, index) => (
                            <Col md={6} lg={3} key={index}>
                                <Card className="h-100 border-0 shadow-sm text-center p-4">
                                    <Card.Body>
                                        <div className="mb-3 text-primary fs-1">★</div>
                                        <Card.Title className="fw-bold">{feature.title}</Card.Title>
                                        <Card.Text>{feature.desc}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Quick Stats */}
            <section className="py-5">
                <Container>
                    <Row className="text-center g-4">
                        <Col md={3} sm={6}>
                            <h3 className="display-4 fw-bold text-primary">250+</h3>
                            <p className="text-muted">Projects Completed</p>
                        </Col>
                        <Col md={3} sm={6}>
                            <h3 className="display-4 fw-bold text-primary">98%</h3>
                            <p className="text-muted">Client Satisfaction</p>
                        </Col>
                        <Col md={3} sm={6}>
                            <h3 className="display-4 fw-bold text-primary">50k+</h3>
                            <p className="text-muted">Active Users</p>
                        </Col>
                        <Col md={3} sm={6}>
                            <h3 className="display-4 fw-bold text-primary">24</h3>
                            <p className="text-muted">Countries Reached</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-5 bg-primary text-white text-center">
                <Container>
                    <h2 className="display-5 fw-bold mb-4">Ready to take your project to the next level?</h2>
                    <p className="lead mb-4">Join thousands of innovators building the future with us.</p>
                    <Button variant="light" size="lg" className="px-5 py-3 rounded-pill fw-bold">
                        Start Building Now
                    </Button>
                </Container>
            </section>

        </div>
    );
};

export default Dashboard;