import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Award, Users, Star, Quote } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Achieve.css';


import img1 from "../../Images/Success/Achive1.jpg";
import img2 from "../../Images/Success/Achive2.jpg";
import img3 from "../../Images/Success/Achive3.jpg";
import img4 from "../../Images/Success/Achive4.jpg";
import img5 from "../../Images/Success/Achive5.jpg";

const achievements = [
    { img: img1, title: "1000+ Bridal Makeovers", desc: "Celebrating a decade of crafting flawless beauty for our brides.", icon: <Users /> },
    { img: img2, title: "Best Luxury Salon 2024", desc: "Recognized as the leading premium salon for excellence in styling.", icon: <Award /> },
    { img: img3, title: "Master Artistry Achievement", desc: "Our stylists are certified by world-class international academies.", icon: <Star /> },
    { img: img4, title: "Community Choice Award", desc: "Voted #1 for customer satisfaction and hygienic environment.", icon: <Quote /> },
    { img: img5, title: "Global Beauty Trends", desc: "Bringing international hair & skin standards to your doorstep.", icon: <Users /> },
];

const Achieve = () => {
    return (
        <section className="achieve-section">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <span className="premium-label">ABOUT GLAMOUR CUTZ</span>
                    <h2 className="main-title">Our Journey & <span className="highlight">Achievements</span></h2>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect={'fade'}
                    speed={1000}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                    className="achieve-swiper"
                >
                    {achievements.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="achieve-card">
                                <div className="achieve-image-box">
                                    <img src={item.img} alt={item.title} className="achieve-img" />
                                    <div className="img-overlay"></div>
                                </div>
                                <div className="achieve-content">
                                    <div className="icon-badge">{item.icon}</div>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-desc">{item.desc}</p>
                                    <div className="stat-row">
                                        <div className="stat-item">
                                            <span className="stat-num">10+</span>
                                            <span className="stat-label">Years Exp.</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-num">50k+</span>
                                            <span className="stat-label">Happy Clients</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Achieve;