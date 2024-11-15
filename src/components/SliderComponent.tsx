import React from "react";
import img2 from '../assets/avatar-1.png'
import img3 from '../assets/avatar-1.png'
import img4 from '../assets/avatar-1.png'


const reviewsMock = [
    {
        text: "Usar BTrAIn ha sido una experiencia increíble. No solo facilitó la capacitación de nuestro equipo, sino que realmente transformó nuestra forma de aprender. BTrainAI es, sin duda, la mejor manera de aprender y crecer juntos como equipo.",
        userName: "John Doe",
        avatar: img2,
        rating: 5,
        reviews: 25,
    },
    {
        text: "Usar BTrAIn ha sido una experiencia increíble. No solo facilitó la capacitación de nuestro equipo, sino que realmente transformó nuestra forma de aprender. La plataforma es fácil de usar y permite que cada persona aprenda a su ritmo.",
        userName: "John Doe",
        avatar: img3,
        rating: 5,
        reviews: 25,
    },
    {
        text: "Usar BTrAIn ha sido una experiencia increíble. No solo facilitó la capacitación de nuestro equipo, sino que realmente transformó nuestra forma de aprender. La plataforma es fácil de usar y permite que cada persona aprenda a su ritmo, lo que hace que el proceso sea mucho más efectivo.",
        userName: "John Doe",
        avatar: img4,
        rating: 5,
        reviews: 25,
    }
   
];

interface SliderProps {
    animation: "left" | "right";
}

const SliderComponent: React.FC<SliderProps> = ({ animation }) => {
    return (
        <div className={`slider-container slider-${animation}`}>
            {reviewsMock.map((review, index) => (
                <div className="slider-card" key={index}>
                    <p className="slider-text">{review.text}</p>
                    <div className="slider-footer">
                        <div className="slider-user">
                            <img
                                src={review.avatar}
                                alt={review.userName}
                                className="slider-avatar"
                            />
                            <span>{review.userName}</span>
                        </div>
                       
                        <div className="slider-rating">
                            {"★".repeat(review.rating).padEnd(5, "☆")}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SliderComponent;
