import React, { useEffect } from 'react';
import './Explore.css';

const Explore = () => {
    // 1 thi 40 images dynamic array with Real-world Descriptions
    const galleryItems = Array.from({ length: 40 }, (_, i) => {
        const id = i + 1;
        let category, title, description;

        // Categorization for a more professional feel
        if (id % 3 === 0) {
            category = "Sculpted Fades";
            title = `Precision Cut #${id}`;
            description = "Sharp architectural lines with a seamless skin-fade transition.";
        } else if (id % 2 === 0) {
            category = "Glow Therapy";
            title = `Radiance Glow #${id}`;
            description = "Hydrating botanical facial treatment for a natural, healthy shine.";
        } else {
            category = "Classic Grooming";
            title = `Executive Style #${id}`;
            description = "Timeless traditional grooming with hot towel finish and razor lining.";
        }

        return {
            id,
            img: `/src/Images/Explore/img${id}.jpg`,
            category,
            title,
            description
        };
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="explore-premium-wrapper">
            <div className="luxury-blob blob-1"></div>
            <div className="luxury-blob blob-2"></div>

            <div className="explore-content-container">
                <header className="explore-luxury-header">
                    <span className="gold-tag">ESTABLISHED 2026</span>
                    <h1 className="display-title">THE <span className="stroke-text">GALLERY</span> OF ELITE</h1>
                    <p className="description-text">
                        Immerse yourself in our portfolio of 40 bespoke transformations.
                        Where every cut is a signature and every style is a masterpiece.
                    </p>
                    <div className="premium-divider"></div>
                </header>

                <div className="luxury-masonry-grid">
                    {galleryItems.map((item) => (
                        <div className="luxury-item-card" key={item.id}>
                            <div className="luxury-image-box">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x600?text=Premium+Service'; }}
                                />
                                <div className="luxury-card-overlay">
                                    <div className="overlay-info">
                                        <span className="card-cat">{item.category}</span>
                                        <h4 className="card-name">{item.title}</h4>
                                        <p className="mini-description">{item.description}</p>
                                        <div className="explore-indicator">
                                            <div className="line"></div>
                                            <span>VIEW ART</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-border-glow"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;