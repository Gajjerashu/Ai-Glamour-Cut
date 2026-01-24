import React, { useState } from 'react'; // useState add karyu
import Achieve from '../../components/AboutUS/Achieve';
import Story from '../../components/AboutUS/Story';
import Follow from '../../components/AboutUS/Follow';
import Promise from '../../components/AboutUS/Promise';
import Awards from '../../components/AboutUS/Awards';
import Appointment from '../../components/AboutUS/Appointment';

const About = () => {
    const [showModal, setShowModal] = useState(false); // Modal state

    return (
        <div className="about-page-wrapper">
            <Achieve />
            <Story />
            <Follow />
            <Promise />
            <Awards />

            {/* Appointment Section with Button */}
            <div className="appointment-cta-section py-5">
                <div className="container text-center">
                    <h2 className="transformation-title mb-4">Ready for a Transformation?</h2>
                    <button
                        className="confirm-booking-btn cta-btn"
                        onClick={() => setShowModal(true)}
                    >
                        Book Your Appointment
                    </button>
                </div>
            </div>

            {/* Appointment Modal Logic */}
            {showModal && (
                <Appointment
                    onClose={() => setShowModal(false)}
                    isAboutUs={true}
                />
            )}
        </div>
    );
};

export default About;