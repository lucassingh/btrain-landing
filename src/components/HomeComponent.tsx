import { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { IoPlay } from "react-icons/io5";
import { Fade, Zoom } from 'react-awesome-reveal';
import video from '../assets/videos/video_1.mp4';
import imgBg from '../assets/background-1.png';
import imgBg2 from '../assets/bg-video.png';

const HomeComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDemoClick = () => {
        window.open('https://calendar.app.google/5H2kMJxjeDz64Ee48', '_blank');
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div
                id="home"
                className="home-component"
                style={{ backgroundImage: `url(${imgBg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}
            >
                <Container className="h-100">
                    <Row className="h-100 align-items-center justify-content-center">
                        <Col lg={6} className="text-col text-center text-lg-start">
                            <Fade direction="left" duration={600}>
                                <h1>
                                    <span className="highlight">Capacita</span> <br /> a tu Equipo en <br /> Días, No Semanas
                                </h1>
                            </Fade>

                            <Fade direction="left" delay={400} duration={600}>
                                <div>
                                    <Button className="demo-button mb-3" onClick={handleDemoClick}>
                                        SOLICITA TU DEMO GRATIS
                                    </Button>
                                    <div className="video-button">
                                        <Button variant="outline-light" className="play-button" onClick={handleDemoClick}>
                                            <IoPlay className="me-2" /> Ver cómo Funciona
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
                                        width: '650px',
                                        height: 'auto',
                                    }}
                                />
                            </Zoom>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Modal */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                centered
                size="lg"
                dialogClassName="modal-100w"
                aria-labelledby="video-modal"
            >
                <Modal.Body className="p-0">
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0}}>
                        <iframe
                            src="https://www.youtube.com/embed/91in2mbSNnc?autoplay=1&controls=0"
                            title="Demo Video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 0,
                            }}
                        ></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default HomeComponent;
