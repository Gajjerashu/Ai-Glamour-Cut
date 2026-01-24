import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, ShieldCheck } from 'lucide-react';
import './Keratin.css';

import video1 from '../../assets/videos/keratin-video1.mp4';
import video2 from '../../assets/videos/keratin-video2.mp4';
import video3 from '../../assets/videos/keratin-video3.mp4';

const Keratin = () => {
    const videoList = [video1, video2, video3];
    const [currentIdx, setCurrentIdx] = useState(0);
    const [nextIdx, setNextIdx] = useState(1);
    const [fade, setFade] = useState(false);

    const handleVideoEnd = () => {
        setFade(true); // ફેડ આઉટ શરૂ કરો

        setTimeout(() => {
            const newCurrent = nextIdx;
            const newNext = (nextIdx + 1) % videoList.length;

            setCurrentIdx(newCurrent);
            setNextIdx(newNext);
            setFade(false); // નવા વીડિયો માટે ફેડ ઈન
        }, 800); // આ ટાઈમ CSS ટ્રાન્ઝિશન સાથે મેચ થવો જોઈએ
    };

    return (
        <section className="keratin-wrapper">
            <div className="container-fluid d-flex justify-content-end px-5">
                <div className="keratin-main-card">

                    {/* LEFT SIDE: Crossfade Video Section */}
                    <div className="keratin-left-media">
                        {/* કરન્ટ વીડિયો લેયર */}
                        <video
                            key={videoList[currentIdx]}
                            className={`keratin-video ${fade ? 'fade-out' : 'fade-in'}`}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnd}
                        >
                            <source src={videoList[currentIdx]} type="video/mp4" />
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