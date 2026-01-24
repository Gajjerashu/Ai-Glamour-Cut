import React from 'react';
import './Awards.css';
import AwardModel from '../../Images/BridalHD/Bridal9.jpg';

const Awards = () => {
    return (
        <section className="glamour-awards-v3">
            <div className="awards-v3-container">
                <h2 className="awards-v3-title">AWARDS & HONORS</h2>

                <div className="awards-v3-layout">
                    {/* LEFT SIDE: Animation from Left */}
                    <div className="awards-bg-text left-side-anim">
                        <div className="award-v3-card">
                            <h3 className="v3-brand">INDIAN HAIRDRESSING</h3>
                            <span className="v3-year">2016 - 17</span>
                            <ul className="v3-list">
                                <li>Best Salon Chain - North</li>
                                <li>Best Salon Design - Cyber Hub</li>
                                <li>Cut & Style - Runners Up</li>
                            </ul>
                        </div>
                        <div className="award-v3-card">
                            <h3 className="v3-brand">L'ORÉAL PROFESSIONAL</h3>
                            <span className="v3-year">Excellence Awards</span>
                            <ul className="v3-list">
                                <li>Men's Image Winner</li>
                                <li>Color Trophy Winners</li>
                            </ul>
                        </div>
                    </div>

                    {/* CENTRAL ROUND IMAGE */}
                    <div className="awards-v3-center-image">
                        <div className="v3-round-wrapper">
                            <img src={AwardModel} alt="Award Winning Lady" className="v3-transparent-img" />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Animation from Right */}
                    <div className="awards-bg-text right-side-anim">
                        <div className="award-v3-card">
                            <h3 className="v3-brand">FRANCHISE INDIA</h3>
                            <span className="v3-year">Business Growth</span>
                            <ul className="v3-list">
                                <li>Regional Salon Chain of the year</li>
                                <li>Entrepreneurial Excellence</li>
                            </ul>
                        </div>
                        <div className="award-v3-card">
                            <h3 className="v3-brand">ESTETICA AWARDS</h3>
                            <span className="v3-year">Design & Style</span>
                            <ul className="v3-list">
                                <li>Most Stylish Interior</li>
                                <li>Best Bridal Makeup Studio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;