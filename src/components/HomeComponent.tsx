import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoPlay } from "react-icons/io5";
import { Fade, Zoom } from 'react-awesome-reveal';
import video from '../assets/videos/video_1.mp4';
import imgBg from '../assets/background-1.png';
import imgBg2 from '../assets/bg-video.png';

const HomeComponent = () => {
    return (
        <div
            className="home-component"
            //style={{backgroundColor:'#fff'}}
            style={{ backgroundImage: `url(${imgBg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}
        >
            <Container className="h-100">
                <Row className="h-100 align-items-center justify-content-center">
                    <Col lg={6} className="text-col text-center text-lg-start">
                        <Fade direction="left" duration={600}>
                            <h1>
                                Capacita a tu <br /> Equipo en Días, <br /> No Semanas
                            </h1>
                        </Fade>

                        <Fade direction="left" delay={200} duration={600}>
                            <p className="subtitle">
                                Generamos Capacitación a la Medida de <br />tu Empresa en 7 Días
                            </p>
                        </Fade>

                        <Fade direction="left" delay={400} duration={600}>
                            <div>
                                <Button className="demo-button mb-3">SOLICITAR TU DEMO GRATIS</Button>
                                <div className="video-button">
                                    <Button variant="outline-light" className="play-button">
                                        <IoPlay className="me-2" /> Ver como Funciona
                                    </Button>
                                </div>
                            </div>
                        </Fade>
                    </Col>

                    <Col lg={6} className="image-col d-none d-lg-flex align-items-center justify-content-center position-relative">
                        <Zoom delay={300} duration={600}>
                            <img
                                src={imgBg2}
                                alt="Background Effect"
                                className="background-image"
                            />
                            <video
                                src={video}
                                autoPlay
                                muted
                                loop
                                className="video-content"
                                style={{
                                    borderRadius: '25px',
                                    width: '300px',
                                    height: 'auto',
                                }}
                            />
                        </Zoom>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeComponent;
