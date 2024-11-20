
import img1 from '../assets/slider/img1.png';
import img2 from '../assets/slider/img2.png';
import img3 from '../assets/slider/img3.png';
import img4 from '../assets/slider/img4.png';
import img5 from '../assets/slider/img5.png';
import img6 from '../assets/slider/img6.png';
import img7 from '../assets/slider/img7.png';

const images = [img1, img2, img3, img4, img5, img6, img7];

const BrandSlider: React.FC = () => {
    return (
        <div className="brand-slider">
            <div className="slider-track">
                {images.concat(images).map((imgSrc, index) => (
                    <div className="slider-item" key={index}>
                        <img src={imgSrc} alt={`Brand ${index % images.length + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandSlider;
