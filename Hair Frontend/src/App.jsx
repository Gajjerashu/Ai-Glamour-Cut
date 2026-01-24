import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Navigate અહીં ઉમેર્યું છે
import "./App.css";

// Layout & Main Pages
import Navbar from './components/Navcomp/Navbar';
import Home from './pages/MainPage/Home';
import ServiceManager from './pages/MainPage/ServiceManager';
import About from './pages/MainPage/About';
import Gallery from './pages/MainPage/Gallery';
import Kids from './pages/MainPage/Kids';
import Customer from './pages/MainPage/Customer';
import Footer from './components/Navcomp/Footer';
import GatewayForm from './components/Navcomp/GatewayForm';

// Components
import AIAnalyzer from './components/AiTool/AIAnalyzer';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import Explore from './components/Gallery/Explore';

// Course Detail Pages
import HairDressing from './components/Gallery/HairDressing';
import SalonEssential from './components/Gallery/SalonEssential';
import ClassicCut from './components/Gallery/ClassicCut';
import MenHair from './components/Gallery/MenHair';
import CutColor from './components/Gallery/CutColor';
import LongHair from './components/Gallery/LongHair';

function App() {
    const [accessRole, setAccessRole] = useState(localStorage.getItem('accessRole') || null);

    // લોકલ સ્ટોરેજ મેનેજમેન્ટ
    useEffect(() => {
        if (accessRole) {
            localStorage.setItem('accessRole', accessRole);
        } else {
            localStorage.removeItem('accessRole');
        }
    }, [accessRole]);

    // જો યુઝરે લોગિન નથી કર્યું, તો તેને ફક્ત GatewayForm દેખાશે
    if (!accessRole) {
        return <GatewayForm setAccessRole={setAccessRole} />;
    }

    return (
        <Router>
            <div className="app-container">
                {/* Navbar ને રોલ મોકલીએ છીએ જેથી તે Admin બટન છુપાવી શકે */}
                <Navbar role={accessRole} setAccessRole={setAccessRole} />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<ServiceManager />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/explore" element={<Explore />} />

                        {/* Course Routes */}
                        <Route path="/course/hair-dressing" element={<HairDressing />} />
                        <Route path="/course/salon-essential" element={<SalonEssential />} />
                        <Route path="/course/classic-cut" element={<ClassicCut />} />
                        <Route path="/course/mens-hair" element={<MenHair />} />
                        <Route path="/course/cut-and-color" element={<CutColor />} />
                        <Route path="/course/long-hair" element={<LongHair />} />

                        {/* Admin & Tools */}
                        <Route path="/ai-analyzer" element={<AIAnalyzer />} />
                        <Route path="/login" element={<AdminLogin />} />

                        {/* Security: ફક્ત 'admin' હશે તો જ Dashboard ખુલશે, નહીંતર Home પર રિડાયરેક્ટ થશે */}
                        <Route
                            path="/admin/dashboard"
                            element={accessRole === 'admin' ? <AdminDashboard /> : <Navigate to="/" />}
                        />

                        {/* Extra Routes */}
                        <Route path="/kids" element={<Kids />} />
                        <Route path="/customer" element={<Customer />} />

                        {/* ગમે તે ખોટો પાથ હોય તો Home પર મોકલી આપશે */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;