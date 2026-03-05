import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    return (
        <header class="site_header">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <div class="nav_outer_wrapper">
                        <Navbar.Brand href="#home">Mansi Vaidhya</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#featured_section">Work</Nav.Link>
                                <Nav.Link href="#about_section">About</Nav.Link>
                                <Nav.Link href="#contact_section">Contact</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
