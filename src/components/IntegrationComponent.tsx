import HeaderComponent from './HeaderComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import integrationVideo from '../assets/videos/video_3.mp4';
import BrandSlider from './BrandSlider';

const IntegrationComponent = () => {
    return (
        <section id="integration" className="integration-component">
            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    <Col md={6} xs={12} className="image-column">
                        <Fade direction="left" duration={800}>
                            <div className="video-wrapper">
                                <video autoPlay loop muted className="integration-video">
                                    <source src={integrationVideo} type="video/mp4" />
                                </video>
                            </div>
                        </Fade>
                        <BrandSlider />
                    </Col>
                    <Col md={6} xs={12} className="text-column">
                        <Fade direction="right" duration={800}>
                            <HeaderComponent
                                text1="Integración"
                                text2="total con las principales Plataformas Educativas"
                                color1="#F96400"
                                color2="#662D91"
                            />
                            <p className="integration-description mt-5">
                                BTrAIn le permite gestionar, actualizar y personalizar la capacitación de su equipo en varios idiomas y desde cualquier lugar, combinando la flexibilidad del aprendizaje online con el impacto de sesiones presenciales estratégicas on demand. Esta modalidad blended maximiza la efectividad del aprendizaje, adaptándose a las necesidades específicas de su equipo. Todo está respaldado en una plataforma segura en la nube, diseñada para evolucionar junto a su empresa y ofrecer una experiencia de formación completa y escalable.
                            </p>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default IntegrationComponent;
