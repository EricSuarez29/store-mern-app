import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const NavbarMain = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MERN App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link><NavLink to="/clients">Clientes</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
