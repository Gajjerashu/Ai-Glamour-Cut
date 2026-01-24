import React, { useState } from 'react';
import './HoSer.css';
import Appointment from '../AboutUS/Appointment';

const HoSer = ({ isDarkMode }) => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        { id: 'hs1', name: "Home Haircut", price: "$35", details: "Doorstep styling", icon: "✂️" },
        { id: 'hs2', name: "Bridal Makeup", price: "$180", details: "Exclusive look", icon: "💄" },
        { id: 'hs3', name: "Home Spa", price: "$55", details: "Total relaxation", icon: "🧖‍♀️" },
        { id: 'hs4', name: "Manicure", price: "$40", details: "Professional care", icon: "💅" }
    ];

    return (
        <section className={`neo-hoser-section ${!isDarkMode ? 'light' : ''}`}>
            <div className="neo-container">
                <div className="neo-side-header">
                    <h2 className="neo-vertical-text">LUXURY</h2>
                    <div className="neo-main-info">
                        <h3>Our <span className="red-glow">Privé</span> Home Services</h3>
                        <p>Experience salon excellence in your personal space.</p>
                    </div>
                </div>

                <div className="neo-grid-wrapper">
                    {services.map((item) => (
                        <div className="neo-card" key={item.id} onClick={() => { setSelectedService(item); setIsModalOpen(true); }}>
                            <div className="neo-icon-box">{item.icon}</div>
                            <div className="neo-content">
                                <span className="neo-price-tag">{item.price}</span>
                                <h4>{item.name}</h4>
                                <p>{item.details}</p>
                            </div>
                            <div className="neo-action-circle">+</div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <Appointment
                    serviceName={selectedService?.name}
                    servicePrice={selectedService?.price}
                    onClose={() => setIsModalOpen(false)}
                    isAboutUs={false}
                />
            )}
        </section>
    );
};

export default HoSer;