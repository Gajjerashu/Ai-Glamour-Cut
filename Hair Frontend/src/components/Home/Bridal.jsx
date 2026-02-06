import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import './Bridal.css';

const Bridal = () => {
    // Online Cloudinary Links
    const images = [
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769776691/Bridal1_trzf25.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769776697/Bridal2_ckdyfa.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769776698/Bridal3_ys0yql.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769776687/Bridal4_dkaest.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769776688/Bridal5_emiamy.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769776695/Bridal6_tyfnju.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769776688/Bridal7_qtuxdw.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769776693/Bridal8_wbq01r.jpg"
    ];

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
                                alt={`Bridal ${i + 1}`}
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