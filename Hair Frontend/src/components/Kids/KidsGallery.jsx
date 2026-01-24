import React from "react";
import './KidsGallery.css';

const galleryData = [
    {
        id: 1,
        img: "src/Images/Kids/Kids9.png",
        video: "src/assets/videos/Kids2.mp4",
        isHighlight: true
    },
    {
        id: 2,
        img: "src/Images/Kids/kids10.png",
        video: "src/assets/videos/Kids3.mp4",
        isHighlight: true
    },
    {
        id: 3,
        img: "src/Images/Kids/kids11.png",
        video: "src/assets/videos/kids4.mp4",
        isHighlight: true
    }
];

export default function KidsGallery() {
    return (
        <section className="k-gallery-section">
            <h2 className="title">Our Happy <span className="red">Juniors</span></h2>

            <div className="k-img-grid">
                {galleryData.map((item) => (
                    <div key={item.id} className={`k-gallery-card ${item.isHighlight ? 'highlight' : ''}`}>

                        {/* 1. Video Layer - Background ma chalshe pan blurred hase */}
                        <div className="k-video-wrapper">
                            <video
                                className="k-video-element"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={item.video} type="video/mp4" />
                            </video>
                        </div>

                        {/* 2. Front Image Layer - Hover karta aeni opacity 0 thase */}
                        <div className="k-front-img-container">
                            <img src={item.img} alt="Junior Style" className="k-main-img" />
                            {/* Ek halku overlay jethi image par text read thai shake */}
                            <div className="img-overlay-dark"></div>
                        </div>

                        {/* 3. Text Content - Je hamesha top par hase */}
                        <div className="k-hover-content">
                            <span className="k-tag">Trending Style</span>
                            <h3>Superstar Look</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}