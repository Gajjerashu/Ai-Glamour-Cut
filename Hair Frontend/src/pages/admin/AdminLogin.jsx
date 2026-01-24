import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Real-world practice: Owner credentials
        if (user.username === 'admin' && user.password === '1234') {
            localStorage.setItem('role', 'owner');
            navigate('/admin/dashboard');
        } else {
            alert("Invalid Credentials! Please try again.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-card shadow-lg">
                <h2 className="mb-4">Admin <span className="text-danger">Login</span></h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3 text-start">
                        <label className="text-muted small fw-bold">USERNAME</label>
                        <input type="text" className="form-control login-input"
                            placeholder="Enter username" required
                            onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </div>
                    <div className="form-group mb-4 text-start">
                        <label className="text-muted small fw-bold">PASSWORD</label>
                        <input type="password" className="form-control login-input"
                            placeholder="Enter password" required
                            onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </div>
                    <button type="submit" className="login-btn w-100">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;