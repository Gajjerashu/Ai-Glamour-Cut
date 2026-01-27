import React, { useState, useEffect } from 'react';
import './KidsCaro.css';

const carouselData = [
    {
        id: 1,
        type: 'video',
        // અહીં તમારી નવી Cloudinary લિંક કનેક્ટ કરી દીધી છે
        url: "https://res.cloudinary.com/dwkkep7sg/video/upload/v1769484511/kids1_pqlox5.mp4",
        title: "Experience The Magic",
        tag: "Live"
    },
    {
        id: 2,
        type: 'image',
        url: "src/Images/Kids/img1.jpg",
        title: "Modern Junior Cuts",
        tag: "Trendy"
    },
    {
        id: 3,
        type: 'image',
        url: "src/Images/Kids/img2.jpg",
        title: "Gaming While Styling",
        tag: "Fun"
    },
    {
        id: 4,
        type: 'image',
        url: "https://images.unsplash.com/photo-1590541576391-dfc42314a7ae?q=80&w=2070",
        title: "Safety & Care First",
        tag: "Kids"
    },
    {
        id: 5,
        type: 'image',
        url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069",
        title: "The Junior Masterclass",
        tag: "Expert"
    }
];

const KidsCaro = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
        }, 8000); // 8 seconds for slides
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="premium-caro-container">
            {carouselData.map((slide, index) => (
                <div key={slide.id} className={`p-slide ${index === currentIndex ? 'active' : ''}`}>

                    {slide.type === 'video' ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="p-media"
                            // Key ઉમેરવાથી જ્યારે સ્લાઈડ બદલાશે ત્યારે વિડિયો પ્રોપર રીલોડ થશે
                            key={slide.url}
                        >
                            <source src={slide.url} type="video/mp4" />
                        </video>
                    ) : (
                        <div className="p-media" style={{ backgroundImage: `url(${slide.url})` }}></div>
                    )}

                    <div className="p-overlay">
                        <div className="p-content-box">
                            <span className="p-tag">{slide.tag}</span>
                            <h1 className="p-title">{slide.title}</h1>
                            <p className="p-desc">Premium grooming for the next generation.</p>
                            <div className="p-btn-group">
                                <button className="p-btn-red">Book Session</button>
                                <button className="p-btn-glass">Our Styles</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Progress Bars */}
            <div className="p-progress-nav">
                {carouselData.map((_, idx) => (
                    <div
                        key={idx}
                        className={`p-bar ${idx === currentIndex ? 'filling' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    >
                        <div className="p-fill"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KidsCaro;