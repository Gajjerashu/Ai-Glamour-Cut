import React from 'react';
import { Sparkles, Clock, ShieldCheck } from 'lucide-react';
import './Keratin.css';

const Keratin = () => {
    // નવી Cloudinary ઓનલાઈન વિડિયો URL (keratin-video1)
    const videoUrl = "https://res.cloudinary.com/dwkkep7sg/video/upload/v1769484533/keratin-video1_k2ecul.mp4";

    return (
        <section className="keratin-wrapper">
            <div className="container-fluid d-flex justify-content-end px-5">
                <div className="keratin-main-card">

                    {/* LEFT SIDE: Online Video Section */}
                    <div className="keratin-left-media">
                        <video
                            className="keratin-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            {/* નવી લિંક અહીં કનેક્ટ કરી છે */}
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="video-overlay-badge-left">
                            <strong>Smoothness</strong>
                            <span>Guaranteed</span>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Content Section */}
                    <div className="keratin-right-content">
                        <div className="content-inner">
                            <span className="premium-tag">
                                <Sparkles size={12} /> Gold Standard Care
                            </span>
                            <h2 className="keratin-heading">
                                Keratin <span className="brand-red">Therapy</span>
                            </h2>
                            <div className="keratin-scroll-text">
                                <p>Experience the ultimate transformation at <strong>Glamour Cutz</strong>. Our treatment eliminates 95% of frizz, leaving your hair incredibly soft.</p>
                            </div>
                            <div className="features-grid-keratin">
                                <div className="feat-box-k"><ShieldCheck size={14} className="text-red" /> No Formaldehyde</div>
                                <div className="feat-box-k"><Clock size={14} className="text-red" /> 50% Faster Styling</div>
                            </div>
                            <div className="price-booking-flex">
                                <div className="pricing-box">
                                    <span className="starting-at">Starting From</span>
                                    <span className="keratin-price">$80</span>
                                </div>
                                <button className="keratin-action-btn">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Keratin;