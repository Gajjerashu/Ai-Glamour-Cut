import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Stats.css';

const Stats = () => {
    const [stats, setStats] = useState({
        stylists: 15, clients: 10000, locations: 5, accuracy: 100
    });

    // Display mate numbers
    const [counts, setCounts] = useState({ stylists: 0, clients: 0, locations: 0, accuracy: 0 });

    useEffect(() => {
        // Backend fetch
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/feedback/add`, feedbackData);
            .then(res => {
                const data = {
                    stylists: parseInt(res.data.stylists) || 15,
                    clients: parseInt(res.data.clients) || 10000,
                    locations: parseInt(res.data.locations) || 5,
                    accuracy: parseInt(res.data.accuracy) || 100
                };
                setStats(data);
            })
            .catch(() => console.log("Using default stats for animation"));
    }, []);

    useEffect(() => {
        // Infinite Loop Animation logic
        const speed = 50; // Jetlo number ocho etli speed vadhare

        const timer = setInterval(() => {
            setCounts(prevCounts => ({
                // % (Modulo) operator vaprava thi number target sudhi jai ne pacho 0 thai jase
                stylists: (prevCounts.stylists + 1) % (stats.stylists + 1),
                clients: (prevCounts.clients + 10) % (stats.clients + 10),
                locations: (prevCounts.locations + 1) % (stats.locations + 1),
                accuracy: (prevCounts.accuracy + 1) % (stats.accuracy + 1)
            }));
        }, speed);

        return () => clearInterval(timer); // Component unmount thay tyre stop thase
    }, [stats]);

    const statsList = [
        { id: 1, number: counts.stylists + "+", label: "Expert Stylists" },
        { id: 2, number: (counts.clients / 1000).toFixed(1) + "k+", label: "Happy Clients" },
        { id: 3, number: counts.locations, label: "Salon Locations" },
        { id: 4, number: counts.accuracy + "%", label: "AI Accuracy" }
    ];

    return (
        <section className="stats-section py-5">
            <div className="container">
                <div className="row g-4 text-center">
                    {statsList.map((item) => (
                        <div className="col-md-3" key={item.id}>
                            <div className="stat-card">
                                <h2 className="stat-number fw-bold">{item.number}</h2>
                                <p className="stat-label text-uppercase small">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
