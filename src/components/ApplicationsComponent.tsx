import { Container, Row, Col, Card } from 'react-bootstrap';
import { Zoom } from 'react-awesome-reveal';
import HeaderComponent from './HeaderComponent';

const ApplicationsComponent = () => {
    return (
        <section id="applications" className="app-section">
            <Zoom duration={1000}>
                <HeaderComponent
                    text1="Aplicaciones Prácticas"
                    text2="BTrAIn"
                    color1="#fff"
                    color2="#F96400"
                />
            </Zoom>
            <Container>
                <Row className="mt-4">
                    {/* Primera tarjeta con Zoom */}
                    <Col lg={6} xs={12}>
                        <Zoom duration={1000} delay={0}>
                            <Card className="app-card">
                                <Card.Body>
                                    <h5 className="app-card-title">Capacitación Corporativa Rápida</h5>
                                    <p className="app-card-text">
                                        Automatiza el proceso de formación de sus empleados, asegurando una capacitación continua, sin demoras, y siempre actualizada. Reduce costos y tiempo de implementación mientras mejora la eficiencia.
                                    </p>
                                    <ul className="app-card-items">
                                        <li>Onboarding de nuevos Empleados.</li>
                                        <li>Capacitación en actualización de procedimientos de seguridad.</li>
                                        <li>Formación para la adopción de nuevas políticas internas.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </Col>

                    {/* Segunda tarjeta con Zoom y un delay mayor */}
                    <Col lg={6} xs={12}>
                        <Zoom duration={1000} delay={500}>
                            <Card className="app-card">
                                <Card.Body>
                                    <h5 className="app-card-title">Cursos de Compliance Simplificados</h5>
                                    <p className="app-card-text">
                                        Cumplir con normativas nunca fue tan fácil. Asegurar que todo su equipo esté alineado con los estándares internos y regulaciones externas, con cursos diseñados para garantizar el cumplimiento sin esfuerzo adicional.
                                    </p>
                                    <ul className="app-card-items">
                                        <li>Cumplimiento de normas ambientales.</li>
                                        <li>Introducción rápida a regulaciones fiscales.</li>
                                        <li>Cursos de protección de datos y privacidad.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </Col>
                </Row>

                {/* Tercera tarjeta con Zoom y un delay aún mayor */}
                <Row>
                    <Col xs={12}>
                        <Zoom duration={1000} delay={1000}>
                            <Card className="app-card">
                                <Card.Body>
                                    <p className="app-card-title">
                                        Conquista mercados globales. Adapte sus programas de formación al idioma, cultura y normativas específicas de cada región. Desde el contenido hasta la entrega, BTrAIn se ajusta a las necesidades locales, asegurando una experiencia de aprendizaje efectiva en cualquier parte del mundo.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ApplicationsComponent;
