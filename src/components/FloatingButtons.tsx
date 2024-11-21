import { useEffect, useState } from 'react';
import { FaChevronUp } from "react-icons/fa";

const FloatingButtons = () => {

    const [showScrollButton, setShowScrollButton] = useState(false);
    
    const [showDemoButton, setShowDemoButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowScrollButton(scrollY > 300);
            const universitySection = document.getElementById('university-section');
            if (universitySection) {
                const rect = universitySection.getBoundingClientRect();
                setShowDemoButton(rect.top < window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDemoClick = () => {
        window.open('https://calendly.com/lucas-singh-bizitglobal/30min', '_blank');
    };

    return (
        <div className="floating-buttons">
            {showScrollButton && (
                <button className="floating-button up-button" onClick={scrollToTop}>
                    <FaChevronUp />
                </button>
            )}
            {showDemoButton && (
                <button className="floating-button demo-button" onClick={handleDemoClick}>
                    SOLICITA UNA DEMO
                </button>
            )}
        </div>
    );
};

export default FloatingButtons;
