import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../assets/logo-r.png';

const FooterComponent = () => {
    return (
        <section className="footer-component">
            <Container className="d-flex flex-column h-100">
                <div className="footer-content flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                    <Row className="justify-content-center align-items-center text-center mb-5">
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <img src={logo} alt="Logo" className="footer-logo" />
                            <div className="footer-divider mx-4"></div>
                            <span className="footer-title">Capacitaciones para empresas</span>
                        </Col>
                    </Row>
                    <Row className="justify-content-center text-center mb-5">
                        <Col xs={12}>
                            <p className="footer-bold-text">
                                Regístrate ahora y obtén tu capacitación lista en 7 días.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center text-center mb-5">
                        <Col xs={12} md={8}>
                            <Form className="footer-form d-flex justify-content-center">
                                <Form.Control
                                    type="email"
                                    placeholder="Tu Email"
                                    className="footer-input me-3"
                                />
                                <Button variant="primary" className="custom-button">
                                    Suscríbete
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <Row className="justify-content-center text-center">
                    <Col xs={12}>
                        <p className="footer-copyright">
                            © Copy Right 2024 BizitGlobal
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FooterComponent;
