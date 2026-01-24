import React from 'react';
import './KidsServices.css';

export default function KidsServices() {
    const services = [
        {
            title: "First Haircut",
            desc: "Includes a personalized certificate & lock of hair keepsake.",
            price: "Premium",
            icon: "👶"
        },
        {
            title: "Junior Styling",
            desc: "Cool spikes, braids or creative hair art for parties.",
            price: "Standard",
            icon: "⭐"
        },
        {
            title: "Gentle Grooming",
            desc: "Calm, sensory-friendly environment for our little heroes.",
            price: "Expert",
            icon: "🧸"
        }
    ];

    return (
        <section className="kids-services-wrapper">
            <div className="ks-header">
                <span className="ks-subtitle">OUR SPECIALTIES</span>
                <h2 className="ks-title">Junior <span className="red-highlight">Services</span></h2>
            </div>

            <div className="ks-list-container">
                {services.map((s, i) => (
                    <div className="ks-row-item" key={i}>
                        <div className="ks-icon-box">{s.icon}</div>

                        <div className="ks-info-box">
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>

                        <div className="ks-price-tag">
                            <button className="ks-book-mini">Book Junior Slot</button>
                            <span className="ks-badge">{s.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}