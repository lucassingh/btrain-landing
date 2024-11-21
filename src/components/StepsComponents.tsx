import HeaderComponent from './HeaderComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade, Zoom } from 'react-awesome-reveal';
import img1 from '../assets/step1.png';
import img2 from '../assets/step2.png';
import img3 from '../assets/step3.png';

interface CardInfo {
    title: string;
    text: string;
    imageUrl: string;
}

const cardData: CardInfo[] = [
    {
        title: "Subir\nDocumentos",
        text: `Carga documentos o manuales en segundos. 
                Personaliza con los colores y la imagen de tu 
                marca para mantener la identidad visual de 
                tu empresa.`,
        imageUrl: img1
    },
    {
        title: "La IA Hace el Trabajo \n por Usted",
        text: `Nuestra IA no solo adapta su contenido, sino que 
               lo transforma en experiencias de aprendizaje 
               dinámicas, creando videos interactivos, quizzes 
               de alta calidad listos para usar y seguimiento 
               adaptado a cada alumno.`,
        imageUrl: img2
    },
    {
        title: "Publica y capacita sin\nComplicaciones",
        text: `Publique sus cursos directamente en su LMS
               o utiliza nuestra plataforma intuitiva para 
               comenzar a capacitar a su equipo en cuestión 
               de días, sin contratiempos.`,
        imageUrl: img3
    }
];

const StepsComponents = () => {
    return (
        <section id='steps' className='step-section'>
            <Zoom duration={600}>
                <HeaderComponent text1='Crea y Publica' text2='Cursos en Tiempo Record' color1='#F96400' color2='#662D91' />
            </Zoom>
            <Container className="mt-4">
                <Row className="justify-content-center align-items-center h-100">
                    {cardData.map((card, index) => (
                        <Col key={index} md={4} xs={12} className="mb-4">
                            {/* Animación Fade con delay dinámico */}
                            <Fade direction="up" delay={index * 500} duration={600}>
                                <div className='mb-4 text-center'>
                                    <img src={card.imageUrl} alt="Step" className="card-image" />
                                </div>
                                <div className="step-card">
                                    <div className="card-body">
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-text">{card.text}</p>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default StepsComponents;
