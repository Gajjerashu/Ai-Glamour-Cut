// SalonEssential.jsx
import React, { useEffect } from 'react';
import './SalonEssential.css';

export default function SalonEssential() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="se-page">
            <div className="se-top-bar">Professional Salon Skills</div>
            <div className="container se-main">
                <div className="se-header">
                    <h1>Salon <span className="red">Essential</span></h1>
                    <p>Building the foundation of a successful salon career.</p>
                </div>
                <div className="se-grid">
                    <div className="se-box">
                        <h3>Business Flow</h3>
                        <p>The objective of this course is to encourage the flow of new ideas that can be implemented in daily salon operations.</p>
                    </div>
                    <div className="se-box">
                        <h3>Client Relations</h3>
                        <p>Learn how to manage high-end clients and provide a premium experience.</p>
                    </div>
                </div>
                <div className="se-footer-cta">
                    <button className="v4-submit-btn">Register Your Interest</button>
                </div>
            </div>
        </div>
    );
}