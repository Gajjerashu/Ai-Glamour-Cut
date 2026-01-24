import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import './Bridal.css';

// Importing images
import b1 from '../../images/BridalHD/Bridal1.jpg';
import b2 from '../../images/BridalHD/Bridal2.jpg';
import b3 from '../../images/BridalHD/Bridal3.jpg';
import b4 from '../../images/BridalHD/Bridal4.jpg';
import b5 from '../../images/BridalHD/Bridal5.jpg';
import b6 from '../../images/BridalHD/Bridal6.jpg';
import b7 from '../../images/BridalHD/Bridal7.jpg';
import b8 from '../../images/BridalHD/Bridal8.jpg';

const Bridal = () => {
    const images = [b1, b2, b3, b4, b5, b6, b7, b8];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="bridal-wrapper">
            <div className="container-fluid px-5">
                <div className="bridal-main-card">

                    {/* LEFT: Image Slider Section */}
                    <div className="bridal-left-media">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt="Bridal"
                                className={`fade-img ${i === index ? 'active' : ''}`}
                            />
                        ))}
                        <div className="experience-tag-overlay">
                            <strong>10+ Years</strong>
                            <span>Experience</span>
                        </div>
                    </div>

                    {/* RIGHT: Content Section */}
                    <div className="bridal-right-content">
                        <div className="content-inner">
                            <span className="premium-label">Luxury Bridal Makeover</span>
                            <h2 className="bridal-heading">
                                Your Dream Look <br />
                                <span className="brand-red">By Glamour Cutz</span>
                            </h2>

                            <div className="bridal-scroll-text">
                                <p>
                                    At <strong>Glamour Cutz</strong>, we specialize in high-definition (HD) and airbrush technology to ensure a flawless 24-hour finish. From ethnic heritage to modern minimalist looks, we enhance your natural elegance for your big day.
                                </p>
                            </div>

                            <div className="features-inline-grid">
                                <div className="feat-box"><CheckCircle size={14} className="text-red" /> HD Waterproof</div>
                                <div className="feat-box"><CheckCircle size={14} className="text-red" /> Airbrush Tech</div>
                                <div className="feat-box"><CheckCircle size={14} className="text-red" /> Premium Prep</div>
                            </div>

                            <button className="bridal-action-btn">Secure Your Date</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Bridal;