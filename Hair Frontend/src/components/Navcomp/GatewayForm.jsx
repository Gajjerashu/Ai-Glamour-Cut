import React, { useState } from 'react';
import './GatewayForm.css';ીં

const GatewayForm = ({ setAccessRole }) => {
    const [formData, setFormData] = useState({ name: '', phone: '' });

    const handleEnter = (e) => {
        e.preventDefault();
        // Admin Logic: Admin / Admin123
        if (formData.name.toLowerCase() === 'admin' && formData.phone === 'Admin123') {
            setAccessRole('admin');
        } else if (formData.name.trim() !== '' && formData.phone.length >= 10) {
            setAccessRole('user');
        } else {
            alert("Please enter valid details.\nFor Admin: Use 'Admin' & 'Admin123'\nFor User: Use Name & 10-digit Mobile Number");
        }
    };

    return (
        <div className="gateway-wrapper">
            <div className="prelook-card shadow-lg">
                <div className="prelook-header">
                    <img src="/logo.png" alt="Logo" className="gateway-logo" />
                    <h3>GLAMOUR <span className="text-danger-custom">CUTZ</span></h3>
                    <p>Enter your details to continue</p>
                </div>

                <form onSubmit={handleEnter} className="gateway-form-content">
                    <div className="v4-input-group">
                        <label><i className="fas fa-user"></i> Name </label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="v4-input-group">
                        <label><i className="fas fa-phone"></i> Mobile Number </label>
                        <input
                            type="text"
                            placeholder="Enter Your Mobile Number"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="v4-submit-btn">
                        Enter Website
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GatewayForm;
