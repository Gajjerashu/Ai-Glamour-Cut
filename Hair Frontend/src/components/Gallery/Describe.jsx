import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Describe.css';

const Describe = () => {
    const navigate = useNavigate();

    // Cloudinary Online Links for Slider
    const images = [
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770208653/salon1_ogwfuq.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770208656/salon2_wg6ezi.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770208653/salon3_tivfd4.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770208654/onbhbb.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770208653/salon5_swss2b.jpg"
    ];

    // Cloudinary Online Links for Brand Logos
    const lorealLogo = "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770208652/loreal_dm854z.jpg";
    const arthLogo = "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770208654/arth_d40v8k.jpg";

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
                    <img src={lorealLogo} alt="Loreal" />
                    <img src={arthLogo} alt="Arth" />
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