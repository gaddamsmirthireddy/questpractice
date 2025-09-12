import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import Navbar from "./Navbar";
import "./auth.css";

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [error, setError] = useState("");

    // form states
    const [name, setName] = useState("");
    const [role, setRole] = useState("Staff");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignIn) {
            if (!email || !password) {
                setError("Please fill in all fields");
                return;
            }
            console.log("Logging in with:", { email, password });
        } else {
            if (!name || !email || !password) {
                setError("Please fill in all fields");
                return;
            }
            console.log("Signing up with:", { name, email, password, role });
        }
        setError("");
    };

    return (
        <>
            <Navbar isAuthPage={true} />
            <div
                className="min-vh-100 d-flex align-items-center"
                style={{
                    background: "linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)",
                    paddingTop: "120px", 
                }}
            >
                <Container>
                    <Row className="justify-content-center">
                        <Col md={10} lg={8}>
                            <div className={`auth-container ${isSignIn ? "" : "right-panel-active"}`}>
                                {/* Sign Up */}
                                <div className="auth-form-container sign-up-container">
                                    <Card className="shadow border-0 rounded-4">
                                        <Card.Body className="p-4 p-md-5">
                                            <h3 className="fw-bold text-center mb-3" style={{ color: "#6f4e37" }}>
                                                Create Account
                                            </h3>
                                            <p className="text-center opacity-75 mb-4">Join our inventory system</p>
                                            {error && <Alert variant="danger">{error}</Alert>}
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: "#6f4e37" }}>Full Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter your full name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <Row>
                                                    <Col md={8}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label style={{ color: "#6f4e37" }}>Email</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                placeholder="Enter your email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label style={{ color: "#6f4e37" }}>Role</Form.Label>
                                                            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                                                                <option value="Admin">Admin</option>
                                                                <option value="Manager">Manager</option>
                                                                <option value="Staff">Staff</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: "#6f4e37" }}>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Create a strong password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <div className="d-grid">
                                                    <Button type="submit" style={{ background: "#6f4e37", border: "none" }}>
                                                        Create Account
                                                    </Button>
                                                </div>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </div>

                                {/* Sign In */}
                                <div className="auth-form-container sign-in-container">
                                    <Card className="shadow border-0 rounded-4">
                                        <Card.Body className="p-4 p-md-5">
                                            <h3 className="fw-bold text-center mb-3" style={{ color: "#6f4e37" }}>
                                                Welcome Back
                                            </h3>
                                            <p className="text-center opacity-75 mb-4">Sign in to your account</p>
                                            {error && <Alert variant="danger">{error}</Alert>}
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: "#6f4e37" }}>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: "#6f4e37" }}>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Enter your password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <div className="d-grid">
                                                    <Button type="submit" style={{ background: "#6f4e37", border: "none" }}>
                                                        Sign In
                                                    </Button>
                                                </div>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </div>

                                {/* Overlay Container */}
                                <div className="overlay-container">
                                    <div className="overlay">
                                        <div className="overlay-panel overlay-left">
                                            <h4 className="fw-bold">Welcome Back!</h4>
                                            <p className="mb-3">To keep connected, please sign in</p>
                                            <Button variant="light" onClick={() => setIsSignIn(true)}>
                                                Sign In
                                            </Button>
                                        </div>
                                        <div className="overlay-panel overlay-right">
                                            <h4 className="fw-bold">Hello, Friend!</h4>
                                            <p className="mb-3">Enter your details and start your journey</p>
                                            <Button variant="light" onClick={() => setIsSignIn(false)}>
                                                Sign Up
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Auth;