import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

// Cloudinary Online Image Link
const modelImg = "https://res.cloudinary.com/dwkkep7sg/image/upload/v1770210522/img8_wlm78g.png";

const coursesLeft = [
    {
        title: "Beginners Diploma Hair Dressing",
        text: "Jump-start your hairdressing career by joining the Beginners Diploma.",
        icon: "👤",
        path: "/course/hair-dressing"
    },
    {
        title: "Salon Essential",
        text: "The objective of this course is to encourage the flow of new ideas.",
        icon: "✂️",
        path: "/course/salon-essential"
    },
    {
        title: "Long Hair Dressing",
        text: "This course aims at encouraging and teaching the stylist about long hair styling.",
        icon: "👧",
        path: "/course/long-hair"
    }
];

const coursesRight = [
    {
        title: "Classic Cut",
        text: "The course will teach you terminology, classic cuts and personalizing techniques.",
        icon: "✂️",
        path: "/course/classic-cut"
    },
    {
        title: "Men's Hair Dressing",
        text: "This course aims at encouraging the stylist Barber to see a haircut and color.",
        icon: "👨",
        path: "/course/mens-hair"
    },
    {
        title: "Advance Cut & Color",
        text: "This course aims at encouraging the stylist to see a haircut and color from a new perspective.",
        icon: "🎨",
        path: "/course/cut-and-color"
    }
];

export default function Style() {
    return (
        <section className="courses-section">
            <div className="container">
                <div className="header-content">
                    <h1 className='main'>GLAMOUR CUTZ</h1>
                    <h2 className="title">COURSES</h2>
                    <p className="subtitle">
                        The courses at our Academy are delivered with passion and years of expertise.
                    </p>
                </div>

                <div className="courses-grid">
                    {/* Left Column */}
                    <div className="course-column left-align">
                        {coursesLeft.map((course, index) => (
                            <div className="course-card" key={index}>
                                <div className="icon-wrapper">{course.icon}</div>
                                <div className="text-content">
                                    <h4>{course.title}</h4>
                                    <p>{course.text}</p>
                                    <Link to={course.path} className="view-link">View Details →</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Image with Online URL */}
                    <div className="center-model">
                        <div className="model-bg-circle"></div>
                        <img src={modelImg} alt="hair style model" className="model-img" />
                    </div>

                    {/* Right Column */}
                    <div className="course-column right-align">
                        {coursesRight.map((course, index) => (
                            <div className="course-column-item" key={index}>
                                <div className="course-card">
                                    <div className="icon-wrapper">{course.icon}</div>
                                    <div className="text-content">
                                        <h4>{course.title}</h4>
                                        <p>{course.text}</p>
                                        <Link to={course.path} className="view-link">View Details →</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}