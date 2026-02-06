import React from 'react';
import './Follow.css';

const Follow = () => {
    // Cloudinary Online Image Links
    const followImages = [
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212182/img1_cq9p35.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212182/img2_psztqr.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212185/img3_zvgz3m.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212184/img4_imd9yt.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212185/img5_gsdoho.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212185/img6_glea0l.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212184/img7_wq2eu8.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212184/img8_val4ir.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212185/img9_cc1kcx.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212187/img10_kiozow.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212186/img11_k4usff.jpg",
        "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770212187/img12_gvw9gq.jpg"
    ];

    return (
        <section className="glamour-follow-v3">
            <div className="follow-v3-header">
                <h2 className="follow-v3-title">
                    FOLLOW US <span className="v3-handle">@glamourcutz_official</span>
                </h2>
            </div>

            <div className="v3-insta-slider">
                <div className="v3-slider-track">
                    {/* Infinity loop માટે ઈમેજીસને બે વાર સ્પ્રેડ કરી છે */}
                    {[...followImages, ...followImages].map((img, index) => (
                        <div className="v3-insta-card" key={index}>
                            <img src={img} alt={`Glamour Cutz Feed ${index}`} className="v3-insta-img" />
                            <div className="v3-insta-overlay">
                                <div className="v3-overlay-content">
                                    <i className="fab fa-instagram"></i>
                                    <span>GLAMOUR CUTZ</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Follow;