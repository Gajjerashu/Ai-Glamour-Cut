import React, { useEffect } from 'react';
import './View.css';

const View = () => {
    // Cloudinary વિડિયો URL
    const brandingVideoUrl = "https://res.cloudinary.com/dwkkep7sg/video/upload/v1769490012/keratin-video2_gy9avi.mp4";

    // Exact 5 images as per your layout
    const displayImages = Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        img: `/src/Images/Success/View/img${i + 1}.jpg`,
        alt: `Vogue Style ${i + 1}`
    }));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="vogue-gallery-section">
            <div className="vogue-grid-v2">

                {/* Image 1 (Top Left) */}
                <div className="vogue-item area-img1">
                    <img src={displayImages[0].img} alt="Style 1" />
                </div>

                {/* TOP CENTER BRANDING CARD WITH ONLINE VIDEO */}
                <div className="vogue-branding-card area-brand">
                    <video className="branding-video-bg" autoPlay loop muted playsInline>
                        {/* અહીં ઓનલાઈન લિંક સેટ કરી છે */}
                        <source src={brandingVideoUrl} type="video/mp4" />
                    </video>
                    <div className="branding-content">
                        <h2 className="brand-title-v2">GLAMOUR <br /> CUTZ</h2>
                        <button className="view-collection-btn-v2">
                            View Collection <span>✂</span>
                        </button>
                    </div>
                </div>

                {/* Image 2 (Top Right) */}
                <div className="vogue-item area-img2">
                    <img src={displayImages[1].img} alt="Style 2" />
                </div>

                {/* Bottom 3 Images */}
                <div className="vogue-item area-img3">
                    <img src={displayImages[2].img} alt="Style 3" />
                </div>
                <div className="vogue-item area-img4">
                    <img src={displayImages[3].img} alt="Style 4" />
                </div>
                <div className="vogue-item area-img5">
                    <img src={displayImages[4].img} alt="Style 5" />
                </div>

            </div>
        </section>
    );
};

export default View;