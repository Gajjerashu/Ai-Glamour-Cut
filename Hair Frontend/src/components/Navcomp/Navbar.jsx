import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ role, setAccessRole }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const isActive = (path) => location.pathname === path ? 'active-link' : '';

    const handleExit = () => {
        if (window.confirm("Are you sure you want to Exit?")) {
            setAccessRole(null);
            localStorage.removeItem('accessRole');
            navigate('/');
        }
    };

    return (
        <nav className="navbar shadow-sm">
            {/* ક્લીન રાઉન્ડ લોગો અને ઇટાલિક લખાણ */}
            <div className="nav-logo" onClick={() => navigate('/')}>
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="round-logo"
                />
                <span className="logo-text-italic">
                    Glamour <span className="text-danger">Cutz</span>
                </span>
            </div>

            <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
                <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
                <li><Link to="/services" className={isActive('/services')} onClick={() => setIsMenuOpen(false)}>SERVICES</Link></li>
                <li><Link to="/gallery" className={isActive('/gallery')} onClick={() => setIsMenuOpen(false)}>GALLERY</Link></li>
                <li><Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>ABOUT US</Link></li>
                <li><Link to="/kids" className={isActive('/kids')} onClick={() => setIsMenuOpen(false)}>KIDS</Link></li>
                <li><Link to="/customer" className={isActive('/customer')} onClick={() => setIsMenuOpen(false)}>CUSTOMER</Link></li>
            </ul>

            <div className="nav-actions">
                <button className="theme-toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? '☀️' : '🌙'}
                </button>

                {role === 'admin' && (
                    <button className="admin-login-btn" onClick={() => navigate('/admin/dashboard')}>
                        Admin
                    </button>
                )}

                <button className="exit-btn" onClick={handleExit}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;