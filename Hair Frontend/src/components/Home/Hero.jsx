import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import Appointment from '../AboutUS/Appointment';

const Hero = () => {
    const [heroData, setHeroData] = useState({
        offer: 'AI-Powered Grooming',
        title: 'Redefine Your Look',
        subtitle: 'With Precision'
    });

    // Appointment modal માટે state
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getHeroContent = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/hero');
                setHeroData(response.data);
            } catch (error) {
                console.error("Backend fetch error, showing default content.");
            }
        };
        getHeroContent();
    }, []);

    const handleAIClick = () => {
        navigate('/ai-analyzer');
    };

    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center min-vh-100">

                    {/* Left Side: Content */}
                    <div className="col-lg-7 text-start">
                        <h6 className="text-danger fw-bold text-uppercase mb-3">
                            {heroData.offer}
                        </h6>
                        <h1 className="hero-main-title">
                            {heroData.title} <br />
                            <span className="text-outline">{heroData.subtitle}</span>
                        </h1>
                        <p className="hero-text my-4">
                            Our AI technology analyzes your unique face shape to recommend the perfect
                            haircut and beard style tailored for you.
                        </p>

                        <div className="hero-btns mt-4">
                            <button className="ai-glow-btn" onClick={handleAIClick}>
                                <i className="bi bi-stars"></i> Try AI Look Predictor
                            </button>
                            {/* onClick handle ઉમેર્યું */}
                            <button
                                className="book-btn ms-3"
                                onClick={() => setShowModal(true)}
                            >
                                Book Appointment
                            </button>
                        </div>
                    </div>

                    {/* Right Side: AI Visual Effect */}
                    <div className="col-lg-5 d-none d-lg-block text-center">
                        <div className="ai-visual-box">
                            <div className="scan-line"></div>
                            <img
                                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500"
                                alt="AI Salon Analysis"
                                className="hero-ai-img"
                            />
                            <div className="ai-status-tag">AI ANALYSIS READY</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Appointment Modal અહીં રેન્ડર થશે */}
            {showModal && (
                <Appointment
                    isAboutUs={true}
                    onClose={() => setShowModal(false)}
                />
            )}
        </section>
    );
};

export default Hero;