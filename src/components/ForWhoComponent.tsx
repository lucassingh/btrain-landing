import HeaderComponent from './HeaderComponent';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Fade, Zoom } from 'react-awesome-reveal';
import img1 from '../assets/why1.png';
import img2 from '../assets/why2.png';
import img3 from '../assets/why3.png';
import img4 from '../assets/why4.png';

interface CardInfo {
    title: string;
    text: string;
    imageUrl: string;
}

const cardData: CardInfo[] = [
    {
        title: "Flexibilidad Total a Su Medida",
        text: "La IA le ayuda a diseñar el curso completamente personalizado y elige entre contenido predefinido listo para usar.",
        imageUrl: img1,
    },
    {
        title: "Integración Sin Esfuerzo",
        text: "Puede conectarlo fácilmente con las plataformas LMS Todo funciona sin complicaciones.",
        imageUrl: img2,
    },
    {
        title: "Velocidad que Impulsa Resultados",
        text: "Entre 3 a 10 días tendrá su capacitación lista, por módulo.",
        imageUrl: img3,
    },
    {
        title: "Seguridad y Confidencialidad Absoluta",
        text: "Ideal para entrenamientos basados en documentos internos",
        imageUrl: img4,
    },
];

const ForWhoComponent = () => {
    return (
        <section id="who" className="who-section">
            {/* Título con Zoom */}
            <Zoom duration={600}>
                <HeaderComponent
                    text1="¿Por qué elegir"
                    text2="BTrAIn?"
                    color1="#662D91"
                    color2="#F96400"
                />
            </Zoom>
            <Container className="mt-4">
                <Row className="justify-content-center">
                    {cardData.map((card, index) => (
                        <Col key={index} md={3} xs={12} className="mb-4">
                            {/* Animación Fade con dirección derecha a izquierda */}
                            <Fade direction="right" delay={index * 300} duration={600}>
                                <Card className="who-card">
                                    <Card.Img variant="top" src={card.imageUrl} alt="Card Image" className="card-image" />
                                    <Card.Body>
                                        <Card.Title className="card-title">{card.title}</Card.Title>
                                        <Card.Text className="card-text">{card.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Fade>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ForWhoComponent;
