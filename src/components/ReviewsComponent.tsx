import { Button, Col, Container, Row } from "react-bootstrap";
import imgBg from '../assets/background-2.png';
import SliderComponent from "./SliderComponent";

const ReviewsComponent = () => {
	return (
		<section
			id="reviews"
			className="reviews-component"
			style={{
				backgroundImage: `url(${imgBg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Container className="h-100">
				<Row className="justify-content-start align-items-start h-100">
					<Col xs={12}>
						<h2 style={{
							fontWeight: 'bold',
							color: '#fff'
						}}>¿Qué opinan nuestros usuarios?</h2>
						<Button variant="outline-primary" className="custom-button">
							Danos tu Valoración
						</Button>
					</Col>
					<SliderComponent />
					<SliderComponent reverseDirection={true} />
				</Row>
			</Container>
		</section>
	);
};

export default ReviewsComponent;
