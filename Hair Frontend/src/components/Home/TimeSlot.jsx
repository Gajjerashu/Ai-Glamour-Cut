import React from 'react';
import './TimeSlot.css';

const TimeSlot = () => {
    // Cloudinary Online Link
    const businessImg = "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769776693/Bridal8_wbq01r.jpg";

    const hours = [
        { day: 'Sunday', time: '10:00 AM - 5:00 PM' },
        { day: 'Monday', time: '10:00 AM - 6:00 PM' },
        { day: 'Tuesday', time: '9:00 AM - 8:00 PM' },
        { day: 'Wednesday', time: '9:00 AM - 8:00 PM' },
        { day: 'Thursday', time: '9:00 AM - 8:00 PM' },
        { day: 'Friday', time: '9:00 AM - 8:00 PM' },
        { day: 'Saturday', time: '9:00 AM - 6:30 PM' },
    ];

    return (
        <section className="timeslot-section">
            <div className="timeslot-container">
                {/* Left Side: Image with Decorative Border */}
                <div className="timeslot-image-wrapper">
                    <div className="decorative-outline"></div>
                    <img src={businessImg} alt="Salon Working Hours" className="business-img" />
                </div>

                {/* Right Side: Working Hours Details */}
                <div className="timeslot-content">
                    <h2 className="timeslot-title">Business <span>Hours</span></h2>
                    <div className="hours-list">
                        {hours.map((item, index) => (
                            <div key={index} className="hour-row">
                                <span className="day-name">{item.day}</span>
                                <span className="time-divider"></span>
                                <span className="time-value">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeSlot;