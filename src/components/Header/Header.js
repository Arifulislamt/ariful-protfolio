import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar variant="dark" bg="secondary" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand href="#home">
                    <span className="name fw-bold">Ariful Islam</span>
                    </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="fw-bold text-style" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="fw-bold text-style" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="fw-bold text-style" as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link className="fw-bold text-style" as={Link} to="/contactUs">Contact Us</Nav.Link>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;