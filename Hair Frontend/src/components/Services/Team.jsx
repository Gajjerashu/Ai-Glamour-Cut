import React, { useState } from 'react';
import './Team.css';

import member1 from '../../Images/Explore/img18.jpg';
import member2 from '../../Images/Explore/img39.jpg';
import member3 from '../../Images/Explore/img36.jpg';
import member4 from '../../Images/Explore/img19.jpg';

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            name: "Jennifer Lopez",
            role: "Owner (Master Stylist)",
            desc: "Jennifer is an experienced senior stylist with 22 years of experience. She specializes in balayage and blondes.",
            img: member1,
            align: 'left',
            details: {
                license: "LC-9920348-CA",
                certificates: ["Master Colorist", "Advanced Balayage Expert"],
                experience: "22 Years",
                specialty: "Blondes & Color Correction"
            }
        },
        {
            name: "Mya Mejia",
            role: "Owner (Stylist)",
            desc: "A dedicated member since 2022, Mya loves creating stunning transformations. She is a supportive team member.",
            img: member2,
            align: 'right',
            details: {
                license: "LC-8837421-CA",
                certificates: ["Modern Fade Specialist", "Professional Styling"],
                experience: "4 Years",
                specialty: "Transformation Cuts"
            }
        },
        {
            name: "Jackie Pham",
            role: "Our-Partner (Stylist)",
            desc: "Jackie brings a blend of technical expertise and natural artistry. She specializes in long haircuts.",
            img: member3,
            align: 'left',
            details: {
                license: "LC-7746210-CA",
                certificates: ["Scalp Care Expert", "Women's Long Hair Artist"],
                experience: "6 Years",
                specialty: "Scalp Therapy"
            }
        },
        {
            name: "Mariah Rath",
            role: "Our-Partner (Stylist)",
            desc: "A proud graduate with a lifelong passion for hair and makeup. Mariah ensures each client feels beautiful.",
            img: member4,
            align: 'right',
            details: {
                license: "LC-6655109-CA",
                certificates: ["Bridal Makeup Certified", "Hair Extensions Pro"],
                experience: "5 Years",
                specialty: "Bridal & Extensions"
            }
        }
    ];

    return (
        <section className="team-section">
            <h1 className="team-main-title">Our <span>Team</span></h1>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className={`team-card ${member.align}`}>
                        <div className="team-img-wrapper">
                            <div className="team-border-frame"></div>
                            <img src={member.img} alt={member.name} className="team-img" />
                        </div>
                        <div className="team-info">
                            <h2 className="member-name">{member.name} <span>{member.role}</span></h2>
                            <div className="member-rating">⭐⭐⭐⭐⭐ (5.0)</div>
                            <p className="member-desc">{member.desc}</p>
                            {/* Profile Button */}
                            <button className="profile-btn" onClick={() => setSelectedMember(member)}>
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Profile Details Modal --- */}
            {selectedMember && (
                <div className="profile-modal-overlay" onClick={() => setSelectedMember(null)}>
                    <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-x" onClick={() => setSelectedMember(null)}>&times;</button>

                        <div className="modal-header">
                            <img src={selectedMember.img} alt={selectedMember.name} className="modal-avatar" />
                            <h3>{selectedMember.name}</h3>
                            <p className="modal-role">{selectedMember.role}</p>
                        </div>

                        <div className="modal-body">
                            <div className="detail-item">
                                <strong>Professional License:</strong>
                                <span>{selectedMember.details.license}</span>
                            </div>
                            <div className="detail-item">
                                <strong>Experience:</strong>
                                <span>{selectedMember.details.experience}</span>
                            </div>
                            <div className="detail-item">
                                <strong>Certifications:</strong>
                                <ul>
                                    {selectedMember.details.certificates.map((cert, i) => (
                                        <li key={i}>{cert}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="detail-item">
                                <strong>Top Specialty:</strong>
                                <span>{selectedMember.details.specialty}</span>
                            </div>
                        </div>


                    </div>
                </div>
            )}
        </section>
    );
};

export default Team;