import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* 1. Brand Section */}
                <div className="footer-brand">
                    {/* લોગો ઇમેજ ની જગ્યાએ ટેક્સ્ટ લોગો સેટ કર્યો છે */}
                    <h2 className="footer-logo-text">GLAMOUR <span>CUTZ</span></h2>
                    <p className="footer-tagline">
                        Style, Shine, Transform. Your premier destination for professional hair and beauty services.
                    </p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                {/* 2. Quick Links */}
                <div className="footer-links">
                    <h3>Quick <span>Links</span></h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/kids">Kids Special</a></li>
                    </ul>
                </div>

                {/* 3. Services Section */}
                <div className="footer-links">
                    <h3>Our <span>Services</span></h3>
                    <ul>
                        <li><a href="#">Bridal Makeover</a></li>
                        <li><a href="#">Skin Brightening Spa</a></li>
                        <li><a href="#">Classic Skin Fade</a></li>
                        <li><a href="#">Beard Grooming</a></li>
                        <li><a href="#">Gel Nail Artistry</a></li>
                    </ul>
                </div>

                {/* 4. Contact Information */}
                <div className="footer-contact">
                    <h3>Contact <span>Us</span></h3>
                    <div className="contact-info">
                        <p><i className="fas fa-map-marker-alt"></i> 123 Salon Street, Downtown, City</p>
                        <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
                        <p><i className="fas fa-envelope"></i> info@glamourcutz.com</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 <span>Glamour Cutz</span> Salon. All Rights Reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;