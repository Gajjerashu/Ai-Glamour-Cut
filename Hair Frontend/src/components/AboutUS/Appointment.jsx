import React, { useState } from 'react';
import axios from 'axios';
import './Appointment.css';

const Appointment = ({ serviceName = "", servicePrice = "", onClose, isAboutUs = false }) => {
    const [bookingData, setBookingData] = useState({
        customerName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: serviceName,
        servicePrice: servicePrice
    });

    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const servicesList = [
        { title: "Bridal Makeover", price: "$150" },
        { title: "Keratin Smoothing", price: "$80" },
        { title: "Skin Brightening Spa", price: "$45" },
        { title: "Gel Nail Artistry", price: "$30" },
        { title: "Classic Skin Fade", price: "$25" },
        { title: "Beard Grooming", price: "$20" },
        { title: "Kids Hair Cutz", price: "$20" }
    ];

    const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"];

    const handleServiceChange = (e) => {
        const selected = servicesList.find(s => s.title === e.target.value);
        if (selected) {
            setBookingData({ ...bookingData, service: selected.title, servicePrice: selected.price });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/bookings/add`, bookingData);
            if (response.data.success) {
                setIsSuccess(true);
            }
        } catch (err) {
            alert("Error: Server is not responding. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="booking-overlay">
                <div className="success-card text-center">
                    <div className="check-icon">✓</div>
                    <h2 className="fw-bold">Booking <span className="text-danger">Confirmed!</span></h2>
                    <p className="text-muted">તમારા WhatsApp પર કન્ફર્મેશન મેસેજ મોકલી દેવામાં આવ્યો છે.</p>
                    <button className="confirm-booking-btn" onClick={onClose}>Done</button>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-overlay">
            <div className="booking-modal shadow-lg">
                <button className="close-btn" onClick={onClose} aria-label="Close">&times;</button>
                <div className="modal-header text-center">
                    <h2 className="fw-bold">Book <span className="text-danger">Appointment</span></h2>
                    <div className="selected-service-info">
                        {bookingData.service || "Select a Service"} <strong>({bookingData.servicePrice})</strong>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {isAboutUs && (
                        <div className="mb-3">
                            <label htmlFor="serviceSelect" className="form-label">Choose Service</label>
                            <select
                                id="serviceSelect"
                                name="service"
                                className="booking-input"
                                onChange={handleServiceChange}
                                required
                            >
                                <option value="">-- Select Service --</option>
                                {servicesList.map(s => <option key={s.title} value={s.title}>{s.title} ({s.price})</option>)}
                            </select>
                        </div>
                    )}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="customerName"
                                className="booking-input"
                                placeholder="Your Name"
                                required
                                onChange={(e) => setBookingData({ ...bookingData, customerName: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="phoneNum" className="form-label">WhatsApp Number</label>
                            <input
                                type="tel"
                                id="phoneNum"
                                name="phone"
                                className="booking-input"
                                placeholder="10 Digit Number"
                                required
                                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailAddr" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="emailAddr"
                            name="email"
                            className="booking-input"
                            placeholder="example@mail.com"
                            required
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="bookDate" className="form-label">Date</label>
                            <input
                                type="date"
                                id="bookDate"
                                name="date"
                                className="booking-input"
                                required
                                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="timeSlot" className="form-label">Time Slot</label>
                            <select
                                id="timeSlot"
                                name="time"
                                className="booking-input"
                                required
                                onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                            >
                                <option value="">Select Time</option>
                                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="confirm-booking-btn" disabled={loading}>
                        {loading ? 'Confirming...' : 'Confirm Booking'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;
