import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';
import img from '../assets/logo.png';

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    const [activeLink, setActiveLink] = useState('#home');

    const handleSetActive = (value: string) => {
        setActiveLink(value);
    };

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
                        <Nav.Link href="#home" className={activeLink === '#home' ? 'active' : ''}
                            onClick={() => handleSetActive('#home')}>Home</Nav.Link>
                        <Nav.Link href="#applications" className={activeLink === '#applications' ? 'active' : ''}
                            onClick={() => handleSetActive('#applications')}>Aplicaciones</Nav.Link>
                        <Nav.Link href="#steps" className={activeLink === '#steps' ? 'active' : ''}
                            onClick={() => handleSetActive('#steps')}>Crea tus cursos</Nav.Link>
                        <Nav.Link href="#who" className={activeLink === '#who' ? 'active' : ''}
                            onClick={() => handleSetActive('#who')}>Por qué BTrAIn?</Nav.Link>
                        <Nav.Link href="#integration" className={activeLink === '#integration' ? 'active' : ''}
                            onClick={() => handleSetActive('#integration')}>Integraciones</Nav.Link>
                    </Nav>
                    {/*<div className="d-flex">
                        <Button variant="outline-primary" className="me-2 custom-button">
                            Login
                        </Button>
                        <Button variant="primary custom-button">Sign Up</Button>
                    </div>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
