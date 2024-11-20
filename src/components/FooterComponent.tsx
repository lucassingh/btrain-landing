import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaUser, FaShareAlt } from 'react-icons/fa';
import logo from '../assets/logo-r.png';

const FooterComponent = () => {
    return (
        <>
            <section className="footer-component">
                <Container>
                    <Row className="align-items-center h-100">
                        <Col xs={12} md={6} className="footer-left text-center text-md-start">
                            <img src={logo} alt="Logo" className="footer-logo" />
                            <p className="footer-description mt-3">
                                Generamos Capacitación a la Medida de tu Empresa en 7 Días
                            </p>
                            <a href="#" className="footer-newsletter d-flex align-items-center mt-3">
                                <FaShareAlt className="me-2" /> Suscríbete a nuestro newsletter
                            </a>
                        </Col>
                        <Col xs={12} md={3} className="footer-right footer-section">
                            <h5>MAPA DEL SITIO</h5>
                            <ul className="footer-links">
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Capacitaciones</a></li>
                                <li><a href="#">Nosotros</a></li>
                            </ul>
                        </Col>

                        <Col xs={12} md={3} className="footer-right footer-section">
                            <h5>CONTACTANOS</h5>
                            <ul className="footer-contact">
                                <li>
                                    <FaUser className="icon" />
                                    <a href="#">Bizit Global S.A.</a>
                                </li>
                                <li>
                                    <FaPhoneAlt className="icon" />
                                    <a href="tel:+5401123456789">+54 011 2345-6789</a>
                                </li>
                                <li>
                                    <FaEnvelope className="icon" />
                                    <a href="mailto:info@btrai.tech">info@btrai.tech</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="footer-subfooter">
                <Container>
                    <p className="subfooter-text">
                        © Copy Right 2024 <a href="#">BizitGlobal</a>
                    </p>
                </Container>
            </section>
        </>
    );
};

export default FooterComponent;
