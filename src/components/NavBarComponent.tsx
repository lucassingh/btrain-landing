import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../assets/logo.png';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            className={`custom-navbar sticky-top ${scrolled ? 'navbar-scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={img} alt="Logo" width={130} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link
                            href="#home"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#applications"
                        >
                            Aplicaciones
                        </Nav.Link>
                        <Nav.Link
                            href="#steps"
                        >
                            Crea tus cursos
                        </Nav.Link>
                        <Nav.Link
                            href="#who"
                        >
                            Por qué BTrAIn?
                        </Nav.Link>
                        <Nav.Link
                            href="#integration"                            
                        >
                            Integraciones
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
