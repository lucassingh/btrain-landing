import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import img from '../assets/logo.png';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar sticky-top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={img} alt="Logo" width={130} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Button variant="outline-primary" className="me-2  custom-button">Login</Button>
                        <Button variant="primary custom-button">Sign Up</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
