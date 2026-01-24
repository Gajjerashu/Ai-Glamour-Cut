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
        { title: "Bridal Makeup", price: "$150", description: "Complete bridal makeover with premium HD products.", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=500&auto=format&fit=crop", category: "Female" },
        { title: "Keratin Treatment", price: "$80", description: "Smooth, frizz-free hair with long-lasting shine.", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=500&auto=format&fit=crop", category: "Female" },
        { title: "Luxury Facial Spa", price: "$40", description: "Skin rejuvenation with organic gold-collagen masks.", image: "https://images.unsplash.com/photo-1570172619380-4106adbc8953?q=80&w=500&auto=format&fit=crop", category: "Female" },
        { title: "Gel Nail Art", price: "$30", description: "Designer nail extensions with long-wear gel polish.", image: "https://images.unsplash.com/photo-1604654894610-df490c81726a?q=80&w=500&auto=format&fit=crop", category: "Female" },
        { title: "Expert Fade Cut", price: "$25", description: "Precision taper fade customized to your face shape.", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop", category: "Male" },
        { title: "Beard Sculpture", price: "$15", description: "Sharp edging with hot towel and razor finish.", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=500&auto=format&fit=crop", category: "Male" }
    ];

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/services');
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

            {/* Appointment Modal Connection */}
            {showModal && selectedService && (
                <Appointment
                    serviceName={selectedService.title}
                    servicePrice={selectedService.price}
                    onClose={() => setShowModal(false)}
                    isAboutUs={false} // Services page che etle dropdown nahi dekhay
                />
            )}
        </section>
    );
};

export default Services;