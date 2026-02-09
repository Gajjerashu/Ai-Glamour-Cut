import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]); // New state for feedback
    const [filteredData, setFilteredData] = useState([]);
    const [totalEarnings, setTotalEarnings] = useState(0);
    const [activeTab, setActiveTab] = useState('all'); // all, today, feedback
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role !== 'owner') { navigate('/login'); }

        const fetchData = async () => {
            try {
                // Fetch Bookings
                const resBooking = await axios.get(`${import.meta.env.VITE_API_URL}/api/bookings`);
                setBookings(resBooking.data);
                setFilteredData(resBooking.data);

                // Calculate Revenue
                const total = resBooking.data.reduce((sum, b) => {
                    const price = parseFloat(b.servicePrice?.toString().replace('$', '') || 0);
                    return sum + price;
                }, 0);
                setTotalEarnings(total);

                // Fetch Feedbacks
                const resFeed = await axios.get(`${import.meta.env.VITE_API_URL}/api/feedback`);
                setFeedbacks(resFeed.data);
            } catch (err) {
                console.error("Fetch Error:", err);
            }
        };
        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('role');
        navigate('/');
    };

    // Tab Logic
    const showAll = () => { setActiveTab('all'); setFilteredData(bookings); };
    const showToday = () => {
        setActiveTab('today');
        const today = new Date().toISOString().split('T')[0];
        setFilteredData(bookings.filter(b => b.date === today));
    };
    const showFeedback = () => { setActiveTab('feedback'); };

    // Delete Feedback Function
    const deleteFeedback = async (id) => {
        if (window.confirm("Delete this feedback?")) {
            try {
                await axios.delete(`http://localhost:5000/api/feedback/${id}`);
                setFeedbacks(feedbacks.filter(f => f._id !== id));
            } catch (err) { alert("Error deleting feedback"); }
        }
    };

    return (
        <div className="dashboard-container py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="owner-title">Owner <span className="text-danger">Panel</span></h1>
                    <button className="logout-btn-round" onClick={handleLogout}>Logout</button>
                </div>

                <div className="stats-wrapper mb-4">
                    <div className="revenue-card-mini shadow-sm">
                        <div className="rev-icon">💰</div>
                        <div>
                            <p className="rev-label">TOTAL REVENUE</p>
                            <h2 className="rev-amount text-danger">${totalEarnings.toFixed(2)}</h2>
                        </div>
                    </div>
                </div>

                <div className="tab-container mb-4">
                    <button className={`tab-link ${activeTab === 'all' ? 'active' : ''}`} onClick={showAll}>Bookings</button>
                    <button className={`tab-link ${activeTab === 'today' ? 'active' : ''}`} onClick={showToday}>Today</button>
                    <button className={`tab-link ${activeTab === 'feedback' ? 'active' : ''}`} onClick={showFeedback}>Customer Feedbacks</button>
                </div>

                <div className="row g-4">
                    {activeTab === 'feedback' ? (
                        // Feedback Card UI
                        feedbacks.map((f) => (
                            <div className="col-lg-4 col-md-6" key={f._id}>
                                <div className="feedback-card-premium shadow-sm">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="cust-name">{f.customerName}</h5>
                                        <span className="rating-badge">{"⭐".repeat(f.rating)}</span>
                                    </div>
                                    <p className="feed-text">"{f.message}"</p>
                                    <div className="card-foot d-flex justify-content-between align-items-center">
                                        <span className="date-tag">📅 {new Date(f.createdAt).toLocaleDateString()}</span>
                                        <button className="del-btn" onClick={() => deleteFeedback(f._id)}>🗑️</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Booking Card UI
                        filteredData.map((b, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="booking-card-new shadow-sm">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <h5 className="cust-name">{b.customerName}</h5>
                                        <span className="badge-service">{b.service}</span>
                                    </div>
                                    <p className="cust-phone">📞 {b.phone}</p>
                                    <div className="card-foot mt-3">
                                        <span className="date-tag">📅 {b.date} | ⏰ {b.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
