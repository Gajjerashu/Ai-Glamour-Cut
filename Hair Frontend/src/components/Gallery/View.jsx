import React, { useEffect } from 'react';
import './View.css';

const View = () => {
    // Cloudinary વિડિયો URL
    const brandingVideoUrl = "https://res.cloudinary.com/dwkkep7sg/video/upload/v1769490012/keratin-video2_gy9avi.mp4";

    // Cloudinary ઓનલાઈન ઈમેજ લિંક્સ
    const onlineImages = [
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770210519/img1_boccdv.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770210519/img2_slttka.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770210519/img3_qv1mcv.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770210519/img4_cfacjj.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770210519/img5_jp2hr6.jpg"
    ];

    // Mapping images for the layout
    const displayImages = onlineImages.map((url, i) => ({
        id: i + 1,
        img: url,
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
                    <img src={displayImages[0].img} alt={displayImages[0].alt} />
                </div>

                {/* TOP CENTER BRANDING CARD WITH ONLINE VIDEO */}
                <div className="vogue-branding-card area-brand">
                    <video className="branding-video-bg" autoPlay loop muted playsInline>
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
                    <img src={displayImages[1].img} alt={displayImages[1].alt} />
                </div>

                {/* Bottom 3 Images */}
                <div className="vogue-item area-img3">
                    <img src={displayImages[2].img} alt={displayImages[2].alt} />
                </div>
                <div className="vogue-item area-img4">
                    <img src={displayImages[3].img} alt={displayImages[3].alt} />
                </div>
                <div className="vogue-item area-img5">
                    <img src={displayImages[4].img} alt={displayImages[4].alt} />
                </div>

            </div>
        </section>
    );
};

export default View;