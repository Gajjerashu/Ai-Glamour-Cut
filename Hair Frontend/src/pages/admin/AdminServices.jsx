import React, { useState } from 'react';
import axios from 'axios';
import './AdminServices.css'; // CSS file import karvi

const AdminServices = () => {
    const [service, setService] = useState({
        title: '',
        price: '',
        description: '',
        icon: '✂️'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/services/add', service);
            alert("Service Added Successfully!");
            setService({ title: '', price: '', description: '', icon: '✂️' });
        } catch (err) {
            console.error("Error adding service", err);
        }
    };

    return (
        <div className="admin-services-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="admin-card">
                            <h2 className="text-center mb-4 main-admin-title">
                                Add New <span className="text-danger">Service</span>
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Service Title</label>
                                    <input
                                        type="text"
                                        className="form-control admin-input"
                                        placeholder="e.g. Hair Styling"
                                        value={service.title}
                                        onChange={(e) => setService({ ...service, title: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Price</label>
                                        <input
                                            type="text"
                                            className="form-control admin-input"
                                            placeholder="$25"
                                            value={service.price}
                                            onChange={(e) => setService({ ...service, price: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Icon (Emoji)</label>
                                        <input
                                            type="text"
                                            className="form-control admin-input"
                                            value={service.icon}
                                            onChange={(e) => setService({ ...service, icon: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control admin-input"
                                        rows="3"
                                        placeholder="Write about service..."
                                        value={service.description}
                                        onChange={(e) => setService({ ...service, description: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-btn w-100">Add Service Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminServices;