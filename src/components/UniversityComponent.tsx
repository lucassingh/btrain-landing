import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade, Zoom } from 'react-awesome-reveal';
import HeaderComponent from './HeaderComponent';

interface CardProps {
    title: string;
    text: string;
    backgroundColor: string;
    widthPercentage: string;
}

const Card: React.FC<CardProps> = ({ title, text, backgroundColor, widthPercentage }) => (
    <div className="dynamic-card" style={{ backgroundColor, width: widthPercentage }}>
        <h5>{title}</h5>
        <p>{text}</p>
    </div>
);

const UniversityComponent = () => {
    return (
        <section id="university" className="u-section">
            <Zoom duration={1000}>
                <HeaderComponent
                    text1="Crea la Universidad Corporativa con"
                    text2="BTrAIn"
                    color1="#662D91"
                    color2="#F96400"
                />
            </Zoom>
            <div className="university-component d-flex flex-direction-column">
                <Container>
                    <Row className="justify-content-start">
                        <Col lg={12} className="d-flex flex-column">
                            <Fade cascade direction="left" damping={0.2} duration={1200}>
                                <Card
                                    title="Empresas que optimizan procesos"
                                    text="Capacita a tu equipo en temas específicos de forma rápida y eficiente con soluciones automatizadas y alineadas a tus KPIs clave. Obtén un retorno directo en cada dólar invertido en capacitación, mejorando tiempos productivos y aumentando la rentabilidad."
                                    backgroundColor="#662D91"
                                    widthPercentage="65%"
                                />
                                <Card
                                    title="Organizaciones que prefieren lo práctico"
                                    text="Accede a cursos listos para usar, sin la necesidad de crear contenido propio. BTrAnI ofrece un servicio superior sin costo extra, brindándote una experiencia integral de formación que no solo educa, sino que impulsa el cumplimiento de tus objetivos de negocio."
                                    backgroundColor="#C52126"
                                    widthPercentage="75%"
                                />
                                <Card
                                    title="Organizaciones que prefieren lo práctico"
                                    text="Diseñamos formación breve y evaluaciones constantes para asegurar resultados inmediatos. La capacitación está directamente alineada a tus KPIs, lo que transforma el aprendizaje en una inversión estratégica que impacta en áreas clave, como aumento de ventas y optimización de procesos."
                                    backgroundColor="#D30F78"
                                    widthPercentage="85%"
                                />
                                <Card
                                    title="¿Cuáles son tus KPIs?"
                                    text="BTrAIn garantiza que la capacitación influya directamente en ellos, asegurando que cada sesión contribuya a mejorar los resultados que realmente importan para tu empresa."
                                    backgroundColor="#F96400"
                                    widthPercentage="100%"
                                />
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default UniversityComponent;
