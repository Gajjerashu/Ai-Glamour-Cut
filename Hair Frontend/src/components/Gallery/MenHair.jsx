// MenHair.jsx
import React, { useEffect } from 'react';
import './MenHair.css';

export default function MenHair() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="men-hair-page">
            <section className="mh-hero">
                <div className="mh-hero-content">
                    <span className="mh-tag">Barbering & Styling</span>
                    <h1>Men's Hair <span className="red-text">Dressing</span></h1>
                    <p>Master the art of modern barbering, from classic fades to contemporary beard styling.</p>
                </div>
            </section>

            <div className="mh-container grid-2">
                <div className="mh-info">
                    <h2>Modern Masculinity</h2>
                    <p>This course aims at encouraging the stylist Barber to see a haircut and color with a fresh perspective, focusing on masculine features and trends.</p>
                    <div className="skills-box">
                        <div className="skill"><span>✓</span> Skin Fades & Tapers</div>
                        <div className="skill"><span>✓</span> Beard Grooming</div>
                        <div className="skill"><span>✓</span> Scissor over Comb</div>
                    </div>
                </div>
                <div className="mh-card">
                    <h3>Enroll Now</h3>
                    <p>Start your career as a professional barber.</p>
                    <button className="v4-submit-btn">Book My Seat</button>
                </div>
            </div>
        </div>
    );
}