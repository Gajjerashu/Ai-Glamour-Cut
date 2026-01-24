import React, { useEffect } from 'react';
import './ClassicCut.css';

const ClassicCut = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const modules = [
        { id: "01", title: "Precision Geometry", desc: "Understanding lines, graduation, and layers." },
        { id: "02", title: "Classic Techniques", desc: "Mastering the fundamental cuts that never go out of style." },
        { id: "03", title: "Personalization", desc: "Adapting classic shapes to suit individual face structures." },
        { id: "04", title: "Finishing Art", desc: "Professional blow-drying and product application." }
    ];

    return (
        <div className="classic-cut-wrapper">
            {/* Minimalist Hero Section */}
            <header className="cc-hero">
                <div className="container">
                    <div className="cc-hero-inner">
                        <div className="cc-hero-text">
                            <span className="cc-label">Masterclass Series</span>
                            <h1 className="cc-title">Classic <span className="highlight-red">Cut</span></h1>
                            <p className="cc-lead">Terminology, precision geometry, and the art of personalizing timeless techniques.</p>
                            <button className="cc-primary-btn">Download Syllabus</button>
                        </div>
                        <div className="cc-hero-visual">
                            <div className="cc-circle-bg"></div>
                            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" alt="Classic Cutting" className="cc-img" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Curriculum Section */}
            <section className="cc-content">
                <div className="container">
                    <div className="cc-grid">
                        <div className="cc-info">
                            <h2 className="section-title">The Foundation <br /> Of Excellence</h2>
                            <p className="section-desc">The Classic Cut course will teach you the core terminology and techniques that form the backbone of modern hairdressing. It’s about perfection in every snip.</p>

                            <div className="cc-modules">
                                {modules.map((item) => (
                                    <div className="module-card" key={item.id}>
                                        <span className="module-num">{item.id}</span>
                                        <div className="module-text">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cc-sidebar">
                            <div className="sticky-enroll-card">
                                <h3>Reserve Your Spot</h3>
                                <div className="detail-row">
                                    <span>Duration:</span>
                                    <strong>4 Weeks</strong>
                                </div>
                                <div className="detail-row">
                                    <span>Level:</span>
                                    <strong>Beginner to Pro</strong>
                                </div>
                                <div className="divider"></div>
                                <p className="card-footer-text">Enroll today to get a professional cutting kit for free.</p>
                                <button className="v4-submit-btn full-width">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClassicCut;