import React, { useState } from 'react';
import './KidsHero.css';
import Appointment from '../AboutUS/Appointment';

export default function KidsHero() {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="kids-hero-section">
            <div className="kids-hero-grid">

                {/* Left Side: Content */}
                <div className="k-hero-text">
                    <div className="k-badge-pill">
                        <span className="dot"></span> Little Stars Cutz
                    </div>

                    <h1 className="k-display-title">
                        Premium Cuts <br />
                        For <span className="highlight-red">Cool Kids</span>
                    </h1>

                    <p className="k-subtitle">
                        Where style meets fun. We specialize in making haircuts
                        an enjoyable experience with gaming, treats, and expert care.
                    </p>

                    <div className="k-action-area">
                        <button className="k-main-cta" onClick={() => setShowModal(true)}>
                            BOOK JUNIOR SLOT
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Side: Floating Features Design */}
                <div className="k-hero-visual">
                    <div className="feature-blob"></div>
                    <div className="k-feature-stack">
                        <div className="stack-card card-1">
                            <span className="icon">🎮</span>
                            <div className="info">
                                <strong>Gaming</strong>
                                <small>Play Stations</small>
                            </div>
                        </div>
                        <div className="stack-card card-2">
                            <span className="icon">🎈</span>
                            <div className="info">
                                <strong>Fun</strong>
                                <small>Special Chairs</small>
                            </div>
                        </div>
                        <div className="stack-card card-3">
                            <span className="icon">🍭</span>
                            <div className="info">
                                <strong>Treats</strong>
                                <small>Post-Cut Candy</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <Appointment
                    serviceName="Kids Hair Cutz"
                    servicePrice="$20"
                    onClose={() => setShowModal(false)}
                />
            )}
        </section>
    );
}