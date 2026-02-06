import React, { useEffect } from 'react';
import './Explore.css';

const Explore = () => {
    // Cloudinary Images Mapping
    const onlineImages = {
        1: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501602/img1_wiwncr.jpg",
        2: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501604/img2_xqmw3l.jpg",
        3: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501604/img3_hs5lu1.jpg",
        4: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501603/img4_ra1xlx.jpg",
        5: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501612/img5_xudpk3.jpg",
        6: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501606/img6_bnrhum.jpg",
        7: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501609/img7_mriech.jpg",
        8: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501612/img8_oiuu1h.jpg",
        9: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501611/img9_ownv0q.jpg",
        10: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501614/img10_z9s14d.jpg",
        11: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501614/img11_bmg4yd.jpg",
        12: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501619/img12_je0efa.jpg",
        13: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501618/img13_wl36nc.jpg",
        14: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501620/img14_t4ddlc.jpg",
        15: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501621/img15_wppgig.jpg",
        16: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501627/img16_sddhct.jpg",
        17: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501626/img17_okgjer.jpg",
        18: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501626/img18_p9aove.jpg",
        19: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501640/img19_ebikmh.jpg",
        20: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501628/img20_w7ooco.jpg",
        21: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501631/img21_p2qp93.jpg",
        22: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501633/img22_kenzkn.jpg",
        23: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501633/img23_lwyeye.jpg",
        24: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501636/img24_doved8.jpg",
        25: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501638/img25_tklugl.jpg",
        26: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501639/img26_nrxtyr.jpg",
        27: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501640/img27_puvhhs.jpg",
        28: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501644/img28_mkioy8.jpg",
        29: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501644/img29_em7rck.jpg",
        30: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501648/img30_danlyy.jpg",
        31: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501648/img31_mjf8te.jpg",
        32: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501656/img32_qajc9q.jpg",
        33: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501653/img33_ekv3to.jpg",
        34: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501653/img34_qfl69u.jpg",
        35: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501654/img35_uzxtwa.jpg",
        36: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501655/img36_x7dcro.jpg",
        37: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501663/img37_oev4jd.jpg",
        38: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501660/img38_fkqlkw.jpg",
        39: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501661/img39_tutuc3.jpg",
        40: "https://res.cloudinary.com/dwkkep7sg/image/upload/v1769501662/img40_ikq9jn.jpg"
    };

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
            img: onlineImages[id], // Using the online link from our mapping
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