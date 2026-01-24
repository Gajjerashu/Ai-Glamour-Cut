import React, { useState } from 'react';
import axios from 'axios';
import './Feed.css';

const Feed = ({ isDarkMode }) => {
    const [feedbackData, setFeedbackData] = useState({
        customerName: '',
        rating: 5,
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ ...status, loading: true });
        try {
            const response = await axios.post('http://localhost:5000/api/feedback/add', feedbackData);
            if (response.data.success) {
                setStatus({ loading: false, success: true });
                setFeedbackData({ customerName: '', rating: 5, message: '' });
                setTimeout(() => setStatus({ loading: false, success: false }), 3000);
            }
        } catch (err) {
            alert("Backend error: Check if server is running!");
            setStatus({ ...status, loading: false });
        }
    };

    return (
        <section className={`feed-section ${!isDarkMode ? 'light-mode' : ''}`}>
            <div className="feed-card">
                <div className="feed-header">
                    <h2>Share Your <span className="red-text">Experience</span></h2>
                    <p>Your feedback helps us make our salon better.</p>
                </div>

                {status.success ? (
                    <div className="feed-success-msg">
                        <div className="check-ring">✓</div>
                        <p>Thank you for your valuable feedback!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="feed-form">
                        <div className="feed-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                                value={feedbackData.customerName}
                                onChange={(e) => setFeedbackData({ ...feedbackData, customerName: e.target.value })}
                            />
                        </div>

                        <div className="feed-group">
                            <label>Rating</label>
                            <select
                                value={feedbackData.rating}
                                onChange={(e) => setFeedbackData({ ...feedbackData, rating: e.target.value })}
                            >
                                <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                                <option value="4">⭐⭐⭐⭐ (Good)</option>
                                <option value="3">⭐⭐⭐ (Average)</option>
                                <option value="2">⭐⭐ (Poor)</option>
                                <option value="1">⭐ (Bad)</option>
                            </select>
                        </div>

                        <div className="feed-group">
                            <label>Your Message</label>
                            <textarea
                                rows="4"
                                placeholder="How was your service?"
                                required
                                value={feedbackData.message}
                                onChange={(e) => setFeedbackData({ ...feedbackData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button type="submit" className="feed-submit-btn" disabled={status.loading}>
                            {status.loading ? "Sending..." : "Submit Feedback"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Feed;