import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // રુટિંગ માટે
import './Describe.css';

const Describe = () => {
    const navigate = useNavigate();
    const images = [
        "src/Images/Saloon/salon1.jpg",
        "src/Images/Saloon/salon2.jpg",
        "src/Images/Saloon/salon3.jpg",
        "src/Images/Saloon/salon4.jpg",
        "src/Images/Saloon/salon5.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="describe-container">
            <div className="describe-content">
                <h4 className="sub-title">EXPERIENCE PREMIUM GROOMING</h4>
                <h1 className="main-title">
                    Over <span className="highlight-red">3000+</span> Stylists <br />
                    Trained in 3 Years
                </h1>

                <div className="brand-logos">
                    <img src="src/Images/Saloon/loreal.jpg" alt="Loreal" />
                    <img src="src/Images/Saloon/arth.jpg" alt="Arth" />
                </div>

                <p className="describe-text">
                    <span className='GL'>GLAMOUR CUTZ</span> is a leading chain in Northern India, proud of the L'Oreal Professionnel
                    partnership. Our work has grown from a single studio to over 115+ salons, providing
                    excellent grooming standards since <span className='JN'>January 2014</span>.
                </p>

                <p className="describe-text secondary">
                    Our team firmly believes that education and style go hand-in-hand. We master the latest
                    global trends to bring you a world-class experience right at your doorstep.
                </p>

                {/* ક્લિક કરવા પર /explore પેજ પર જશે */}
                <button className="explore-btn" onClick={() => navigate('/explore')}>
                    Explore Gallery <i className="fas fa-arrow-right"></i>
                </button>
            </div>

            <div className="describe-image-side">
                <div className="slider-wrapper">
                    {images.map((img, index) => (
                        <div key={index} className={`slide-item ${index === currentIndex ? 'active' : ''}`}>
                            <img src={img} alt={`Saloon ${index + 1}`} className="carousel-img" />
                        </div>
                    ))}
                </div>

                <div className="dots-container">
                    {images.map((_, index) => (
                        <span key={index} className={`dot ${index === currentIndex ? 'active-dot' : ''}`} onClick={() => setCurrentIndex(index)}></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Describe;