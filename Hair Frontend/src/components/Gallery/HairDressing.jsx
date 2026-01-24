import React, { useEffect } from 'react';
import './HairDressing.css';

const HairDressing = () => {
    // Page load thay tyare top par scroll thay te mate
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="course-detail-wrapper">
            {/* Hero Section */}
            <section className="detail-hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="course-category">Academy Specialization</span>
                    <h1 className="course-main-title">Beginners Diploma <br /> <span>In Hair Dressing</span></h1>
                    <p className="hero-subtitle">Master the art of transformation. From fundamentals to advanced styling, start your professional journey with Glamour Cutz.</p>
                    <div className="hero-stats">
                        <div className="stat-item"><strong>24</strong><span>Weeks</span></div>
                        <div className="stat-item"><strong>100%</strong><span>Practical</span></div>
                        <div className="stat-item"><strong>Global</strong><span>Certificate</span></div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="course-main-info">
                <div className="container grid-layout">
                    {/* Left Side: Details */}
                    <div className="info-content-left">
                        <div className="content-block">
                            <h3>Course Overview</h3>
                            <p>Jump-start your hairdressing career by joining the Beginners Diploma. This course is meticulously crafted to turn passionate individuals into industry-ready professionals. You will learn the science of hair, the geometry of cutting, and the psychology of client consultation.</p>
                        </div>

                        <div className="content-block">
                            <h3>What You Will Master</h3>
                            <ul className="mastery-list">
                                <li><span>01</span> Precision Hair Cutting Techniques</li>
                                <li><span>02</span> Advanced Hair Coloring & Chemistry</li>
                                <li><span>03</span> Luxury Hair Spa & Treatments</li>
                                <li><span>04</span> Professional Styling & Finishing</li>
                                <li><span>05</span> Salon Management & Client Ethics</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Sticky Booking Card */}
                    <div className="info-sidebar-right">
                        <div className="booking-card">
                            <div className="price-tag">Premium Course</div>
                            <h4>Enroll in this Program</h4>
                            <p>Limited seats available for the upcoming winter batch.</p>
                            <div className="benefit-pill">Exclusive Kit Included</div>
                            <div className="benefit-pill">Live Model Practice</div>
                            <button className="v4-submit-btn enroll-btn">Get Started Now</button>
                            <span className="secure-text">🔒 Secure your professional future</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HairDressing;