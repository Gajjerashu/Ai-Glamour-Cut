// LongHair.jsx
import React, { useEffect } from 'react';
import './LongHair.css';

export default function LongHair() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="lh-page-wrapper">
            <div className="lh-hero">
                <div className="lh-hero-text">
                    <h1>Long Hair <span className="red-highlight">Styling</span></h1>
                    <p>The ultimate guide to updos, braids, and red-carpet waves.</p>
                </div>
            </div>

            <div className="lh-content container">
                <div className="lh-description">
                    <h2>Course Objective</h2>
                    <p>This course aims at encouraging and teaching the stylist about long hair styling, focus on bridal looks and high-fashion trends.</p>
                    <div className="lh-perks">
                        <div className="perk">✦ Bridal Masterclass</div>
                        <div className="perk">✦ Advanced Braiding</div>
                        <div className="perk">✦ Red Carpet Waves</div>
                    </div>
                </div>
                <div className="lh-action">
                    <div className="lh-card">
                        <h4>Next Batch</h4>
                        <p>Starting from Monday</p>
                        <button className="v4-submit-btn">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}