import React from 'react';
import './Follow.css';

// 12 ઈમેજીસના સાચા પાથ ઇમ્પોર્ટ કર્યા છે
import img1 from '../../Images/Follow/img1.jpg';
import img2 from '../../Images/Follow/img2.jpg';
import img3 from '../../Images/Follow/img3.jpg';
import img4 from '../../Images/Follow/img4.jpg';
import img5 from '../../Images/Follow/img5.jpg';
import img6 from '../../Images/Follow/img6.jpg';
import img7 from '../../Images/Follow/img7.jpg';
import img8 from '../../Images/Follow/img8.jpg';
import img9 from '../../Images/Follow/img9.jpg';
import img10 from '../../Images/Follow/img10.jpg';
import img11 from '../../Images/Follow/img11.jpg';
import img12 from '../../Images/Follow/img12.jpg';

const Follow = () => {
    // બધી 12 ઈમેજીસને એરેમાં સેટ કરી
    const followImages = [
        img1, img2, img3, img4, img5, img6,
        img7, img8, img9, img10, img11, img12
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
                    {/* અનંત લૂપ માટે ઈમેજીસને બે વાર રેન્ડર કરવી જરૂરી છે */}
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