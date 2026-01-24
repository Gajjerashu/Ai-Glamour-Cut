import React, { useState } from 'react';
import { Sparkles, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import './Beard.css';

// તમારા વિડિયો પાથ અહીં ઈમ્પોર્ટ કરો
import beard1 from '../../assets/videos/Beard1.mp4';
import beard2 from '../../assets/videos/Beard2.mp4';

const Beard = () => {
    const videoList = [beard1, beard2];
    const [currentIdx, setCurrentIdx] = useState(0);
    const [fade, setFade] = useState(false);

    const handleVideoEnd = () => {
        setFade(true); // ફેડ આઉટ શરૂ કરો
        setTimeout(() => {
            setCurrentIdx((prevIdx) => (prevIdx + 1) % videoList.length);
            setFade(false); // ફેડ ઈન
        }, 800);
    };

    return (
        <section className="beard-wrapper">
            {/* justify-content-start થી કાર્ડ ડાબી બાજુ રહેશે */}
            <div className="container-fluid d-flex justify-content-start px-5">
                <div className="beard-main-card">

                    {/* LEFT SIDE: Content Section */}
                    <div className="beard-left-content">
                        <div className="content-inner">
                            <span className="premium-tag">
                                <Sparkles size={12} /> Premium Grooming
                            </span>
                            <h2 className="beard-heading">
                                Master <span className="brand-red">Beard Grooming</span>
                            </h2>

                            <div className="beard-scroll-text">
                                <p>
                                    Experience precision at <strong>Glamour Cutz</strong>. Our professional beard grooming includes a hot towel trim and premium oil massage for a sharp, clean finish.
                                </p>
                            </div>

                            <div className="features-grid-beard">
                                <div className="feat-box-b"><ShieldCheck size={14} className="text-red" /> Sharp Precision Trim</div>
                                <div className="feat-box-b"><Clock size={14} className="text-red" /> Quick 20-Min Session</div>
                                <div className="feat-box-b"><CheckCircle size={14} className="text-red" /> Premium Oil Finish</div>
                            </div>

                            <div className="price-booking-flex">
                                <div className="pricing-box">
                                    <span className="starting-at">Starting From</span>
                                    <span className="beard-price">$20</span>
                                </div>
                                <button className="beard-action-btn">Book Appointment</button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Video Section */}
                    <div className="beard-right-media">
                        <video
                            key={videoList[currentIdx]}
                            className={`beard-video ${fade ? 'fade-out' : 'fade-in'}`}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnd}
                        >
                            <source src={videoList[currentIdx]} type="video/mp4" />
                        </video>
                        <div className="video-overlay-badge-right">
                            <strong>Sharp Look</strong>
                            <span>Top Quality</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Beard;