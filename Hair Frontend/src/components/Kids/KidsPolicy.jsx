import React from 'react';
import './KidsPolicy.css';

// Aa line check karo: 'export default' hovu joiye
export default function KidsPolicy() {
    return (
        <div className="k-policy-card">
            <h3>Safety & Comfort <span className="red-text">First</span></h3>
            <ul className="policy-list">
                <li>Sterilized tools for sensitive skin.</li>
                <li>Experienced stylists for active kids.</li>
                <li>Parent-child seating available.</li>
            </ul>
        </div>
    );
}

