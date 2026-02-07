import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Appointment from '../AboutUS/Appointment';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const defaultServices = [
        {
            title: "Bridal Makeover",
            price: "$150",
            description: "Premium HD makeup with hairstyling for your special day.",
            // મેં અહીં નવી વર્કિંગ લિંક સેટ કરી છે
            image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
            category: "Female"
        },
        { title: "Keratin Smoothing", price: "$80", description: "Professional keratin treatment for silky and frizz-free hair.", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=500&auto=format&fit=crop", category: "Female" },
        { title: "Skin Brightening Spa", price: "$45", description: "Deep cleansing facial with organic fruit extracts and steam.", image: "https://images.unsplash.com/photo-1570172619380-4106adbc8953?q=80&w=500&auto=format&fit=crop", category: "Female" },
        { title: "Gel Nail Artistry", price: "$30", description: "Trendy nail extensions with custom hand-painted designs.", image: "https://images.unsplash.com/photo-1604654894610-df490c81726a?q=80&w=500&auto=format&fit=crop", category: "Female" },
        { title: "Classic Skin Fade", price: "$25", description: "Modern taper fade with razor sharp outlines and styling.", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop", category: "Male" },
        { title: "Beard Grooming", price: "$20", description: "Hot towel beard trim with premium oil massage finish.", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=500&auto=format&fit=crop", category: "Male" }
    ];

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/services`);
                if (res.data && res.data.length > 0) {
                    setServices(res.data);
                } else {
                    setServices(defaultServices);
                }
            } catch (err) {
                setServices(defaultServices);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    return (
        <section className="services-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h6 className="text-danger fw-bold text-uppercase">Our Expertise</h6>
                    <h2 className="service-main-title">Premium <span className="text-danger">Beauty Solutions</span></h2>
                </div>

                <div className="row g-4">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="service-card shadow-sm">
                                <div className="service-img-container">
                                    <img src={service.image} alt={service.title} className="service-img" />
                                    <div className="category-tag">{service.category}</div>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-card-title">{service.title}</h4>
                                    <p className="service-card-desc">{service.description}</p>
                                    <div className="service-card-footer">
                                        <span className="service-card-price">{service.price}</span>
                                        <button className="service-btn" onClick={() => { setSelectedService(service); setShowModal(true); }}>
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                                <div className="card-underline"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && selectedService && (
                <Appointment
                    serviceName={selectedService.title}
                    servicePrice={selectedService.price}
                    onClose={() => setShowModal(false)}
                    isAboutUs={false}
                />
            )}
        </section>
    );
};

export default Services;
