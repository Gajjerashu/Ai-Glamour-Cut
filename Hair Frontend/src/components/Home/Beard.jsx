import React from 'react';
import { Sparkles, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import './Beard.css';

const Beard = () => {
    // Cloudinary વિડિયો URL
    const videoUrl = "https://res.cloudinary.com/dwkkep7sg/video/upload/v1769484508/Beard1_vkcee7.mp4";

    return (
        <section className="beard-wrapper">
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

                    {/* RIGHT SIDE: Online Video Section */}
                    <div className="beard-right-media">
                        <video
                            className="beard-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            {/* અહીં Cloudinary URL સેટ કર્યું છે */}
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
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