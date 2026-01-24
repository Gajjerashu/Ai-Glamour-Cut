import React from 'react';
// Tamara folder structure mujab no path
import Services from "../../components/Services/Services";
import HoSer from '../../components/Services/HoSer';
import Team from '../../components/Services/Team';

const ServiceManager = () => {
    return (
        <>
            <div className="service-manager-wrapper" style={{ paddingTop: '80px' }}>
                {/* Jem Home.jsx ma Hero/Stats che, em ahiya fakt Services che */}
                <Services />
            </div>
            <HoSer />
            <Team />
        </>
    );
};

export default ServiceManager;