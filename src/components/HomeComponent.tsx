import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoPlay } from "react-icons/io5";
import img from '../assets/img-1.png';
import imgBg from '../assets/background-1.png';

const HomeComponent = () => {
    return (
        <div 
            className="home-component"
            style={{ backgroundImage: `url(${imgBg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}
        >
            <Container className="h-100">
                <Row className="h-100 align-items-center justify-content-center">
                    <Col lg={6} className="text-col text-center text-lg-start">
                        <h1>Capacita a tu <br /> Equipo en Días, <br /> No Semanas</h1>
                        <p className="subtitle">
                            Generamos Capacitación a la Medida de <br />tu Empresa en 7 Días
                        </p>
                        <Button className="demo-button mb-3">SOLICITAR TU DEMO GRATIS</Button>
                        <div className="video-button">
                            <Button variant="outline-light" className="play-button">
                                <IoPlay className="me-2" /> Ver como Funciona
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6} className="image-col d-none d-lg-flex">
                        <img src={img} alt="Home Illustration" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomeComponent;
