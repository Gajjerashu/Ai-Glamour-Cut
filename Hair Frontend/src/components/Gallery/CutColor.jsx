// CutColor.jsx
import React, { useEffect } from 'react';
import './CutColor.css';

export default function CutColor() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="cc-page">
            <div className="cc-header">
                <h1 className="outline-text">CREATIVE</h1>
                <h1>Cut & <span className="red-text">Color</span></h1>
            </div>

            <div className="cc-content-grid container">
                <div className="cc-text-box">
                    <h2>Visionary Perspective</h2>
                    <p>This course aims at encouraging the stylist to see a haircut and color from a completely new perspective. We push the boundaries of traditional styling.</p>
                    <div className="module-row">
                        <div className="module"><strong>Color Theory</strong><p>Understanding pigments and light.</p></div>
                        <div className="module"><strong>Avant-Garde</strong><p>Non-traditional cutting styles.</p></div>
                    </div>
                </div>
                <div className="cc-cta-box">
                    <div className="price-tag">Advanced Level</div>
                    <button className="v4-submit-btn">Apply For Batch</button>
                </div>
            </div>
        </div>
    );
}