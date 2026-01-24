import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import Feed from './Feed';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Rew.css';

const Rew = ({ isDarkMode }) => {
    const [isFeedOpen, setIsFeedOpen] = useState(false);

    const reviews = [
        { id: 1, name: "Aryan Shah", type: "Male", rating: 5, img: "https://randomuser.me/api/portraits/men/32.jpg", text: "The precision in their haircut is unmatched. Best doorstep service ever!", recommend: "Highly Recommended" },
        { id: 2, name: "Priya Patel", type: "Female", rating: 5, img: "https://randomuser.me/api/portraits/women/44.jpg", text: "My bridal makeup was flawless. They really know how to handle premium products.", recommend: "Must Try" },
        { id: 3, name: "Aarav Mehta", type: "Kid", rating: 5, img: "https://randomuser.me/api/portraits/lego/1.jpg", text: "My son loved the haircut! Very patient and friendly staff for kids.", recommend: "Top Notch" },
        { id: 4, name: "Sneha Reddy", type: "Female", rating: 4, img: "https://randomuser.me/api/portraits/women/68.jpg", text: "Skin brightening spa was so relaxing. My skin feels rejuvenated!", recommend: "Excellent" },
        { id: 5, name: "Kabir Singh", type: "Male", rating: 5, img: "https://randomuser.me/api/portraits/men/85.jpg", text: "Classic fade was perfect. Professional tools and very hygienic.", recommend: "Premium Quality" },
        { id: 6, name: "Ishani Vyas", type: "Female", rating: 4, img: "https://randomuser.me/api/portraits/women/17.jpg", text: "Keratin treatment done at home. Very convenient and salon-like results.", recommend: "Highly Recommended" },
        { id: 7, name: "Rohan Das", type: "Male", rating: 5, img: "https://randomuser.me/api/portraits/men/22.jpg", text: "Beard grooming service is top class. They focus on every small detail.", recommend: "Best in Town" },
        { id: 8, name: "Ananya Iyer", type: "Female", rating: 5, img: "https://randomuser.me/api/portraits/women/26.jpg", text: "Gel nail art was artistic and lasted for weeks. Very happy!", recommend: "Must Visit" },
        { id: 9, name: "Vihaan Joshi", type: "Kid", rating: 4, img: "https://randomuser.me/api/portraits/lego/5.jpg", text: "Coolest haircut for my boy. He didn't cry even once!", recommend: "Kid Friendly" },
        { id: 10, name: "Meera Desai", type: "Female", rating: 5, img: "https://randomuser.me/api/portraits/women/90.jpg", text: "Doorstep luxury at its best. No more waiting in long salon queues.", recommend: "Highly Recommended" }
    ];

    return (
        <section className="rew-section">
            <div className="rew-container">
                <div className="rew-header">
                    <span className="sub-title">Testimonials</span>
                    <h2 className="main-title">Client <span className="red-glow">Spotlight</span></h2>
                </div>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 3.5, slideShadows: false }}
                    autoplay={{ delay: 2800, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination, EffectCoverflow]}
                    className="mySwiper"
                >
                    {reviews.map((item) => (
                        <SwiperSlide key={item.id} className="rew-slide">
                            <div className="rew-card">
                                <div className="user-img-wrapper">
                                    <img src={item.img} alt={item.name} className="user-real-img" />
                                    <div className={`status-dot ${item.type.toLowerCase()}`}></div>
                                </div>
                                <div className="user-meta">
                                    <h4>{item.name}</h4>
                                    <span className="user-type">{item.type}</span>
                                </div>
                                <div className="stars">{"★".repeat(item.rating)}</div>
                                <div className="card-body">
                                    <p className="review-text">"{item.text}"</p>
                                </div>
                                <div className="card-footer">
                                    <span className="recommend-badge">✓ {item.recommend}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text-center mt-5">
                    <button className="leave-rev-btn" onClick={() => setIsFeedOpen(true)}>
                        Leave a Review
                    </button>
                </div>
            </div>

            {isFeedOpen && (
                <div className="feed-modal-overlay">
                    <div className="feed-modal-content">
                        {/* THE CROSS BUTTON */}
                        <button className="feed-close-x" onClick={() => setIsFeedOpen(false)}>&times;</button>
                        <Feed isDarkMode={isDarkMode} onClose={() => setIsFeedOpen(false)} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Rew;