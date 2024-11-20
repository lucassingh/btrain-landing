import HeaderComponent from './HeaderComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import trainingVideo from '../assets/videos/video_2.mp4';

const TrainingComponent = () => {
    return (
        <section className="training-section">
            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    <Col md={6} xs={12} className="text-column">
                        <Fade direction="left" duration={800}>
                            <HeaderComponent
                                text1="Con BTrAIn, "
                                text2="Experimente la Capacitación Blended que Potencia Resultados"
                                color1="#F96400"
                                color2="#ffffff"
                            />
                            <p className="training-description mt-5">
                                BTrAIn le permite gestionar, actualizar y personalizar la capacitación de su equipo en varios idiomas y desde cualquier lugar, combinando la flexibilidad del aprendizaje online con el impacto de sesiones presenciales estratégicas on demand. Esta modalidad blended maximiza la efectividad del aprendizaje, adaptándose a las necesidades específicas de su equipo. Todo está respaldado en una plataforma segura en la nube, diseñada para evolucionar junto a su empresa y ofrecer una experiencia de formación completa y escalable.
                            </p>
                        </Fade>
                    </Col>
                    <Col md={6} xs={12} className="video-column">
                        <Fade direction="right" duration={800}>
                            <div className="video-wrapper">
                                <video autoPlay loop muted className="training-video">
                                    <source src={trainingVideo} type="video/mp4" />
                                </video>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TrainingComponent;
